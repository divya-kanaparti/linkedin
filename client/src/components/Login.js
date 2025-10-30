import React, { useState } from "react";

function LoginPage({ onLoginSuccess, onSignupSuccess }) {
  const [isLoginView, setIsLoginView] = useState(true);
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validatePassword = (password) => {
    const rules = [
      { regex: /.{8,}/, msg: "At least 8 characters" },
      { regex: /[A-Z]/, msg: "At least one uppercase letter" },
      { regex: /[a-z]/, msg: "At least one lowercase letter" },
      { regex: /\d/, msg: "At least one number" },
      { regex: /[!@#$%^&*(),.?\":{}|<>]/, msg: "At least one special character" },
    ];
    for (let rule of rules) {
      if (!rule.regex.test(password)) return rule.msg;
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const type = isLoginView ? "login" : "register";
    const userData = { name, email, password };

    if (!isLoginView) {
      const passwordError = validatePassword(password);
      if (passwordError) {
        setError("Password Error: " + passwordError);
        setLoading(false);
        return;
      }
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/auth/${type}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      if (type === "login") {
        localStorage.setItem("token", data.token);
        onLoginSuccess(data.name);
      } else {
        onSignupSuccess();
        setUsername("");
        setEmail("");
        setPassword("");
        setIsLoginView(true);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <h2>{isLoginView ? "Login" : "register"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLoginView && (
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="primary-button" disabled={loading}>
          {loading ? "Please wait..." : isLoginView ? "Login" : "Create Account"}
        </button>
      </form>
      <div className="switch-text">
        {isLoginView ? "Don't have an account? " : "Already have an account? "}
        <span
          onClick={() => {
            setIsLoginView(!isLoginView);
            setUsername("");
            setEmail("");
            setPassword("");
            setError("");
          }}
          className="switch-link"
        >
          {isLoginView ? "register" : "Login"}
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
