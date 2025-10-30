import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Add styles below

export default function Signup({ onSignup }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const passwordRules = [
    { regex: /.{8,}/, msg: "At least 8 characters" },
    { regex: /[A-Z]/, msg: "At least one uppercase letter" },
    { regex: /[a-z]/, msg: "At least one lowercase letter" },
    { regex: /\d/, msg: "At least one number" },
    { regex: /[!@#$%^&*(),.?\":{}|<>]/, msg: "At least one special character" },
  ];

  const validationResults = passwordRules.map(rule => ({
    msg: rule.msg,
    valid: rule.regex.test(password),
  }));

  const allValid = validationResults.every(r => r.valid);
  const passwordsMatch = password === confirm && confirm.length > 0;

  // Strength meter logic
  const strengthScore = validationResults.filter(r => r.valid).length;
  const strengthLabels = ["Weak", "Fair", "Good", "Strong", "Very Strong"];
  const strengthColors = ["#e74c3c", "#e67e22", "#f1c40f", "#2ecc71", "#27ae60"];
  const strength = strengthLabels[strengthScore - 1] || "";
  const strengthColor = strengthColors[strengthScore - 1] || "#ccc";

  const handleSubmit = async (e) => {
    console.log("calling");
    
    e.preventDefault();
    setMessage("");

    if (!allValid) return setMessage("❌ Please meet all password requirements.");
    if (!passwordsMatch) return setMessage("❌ Passwords do not match.");

    try {
      const res = await api.post("/auth/register", { name, email, password });
      onSignup(res.data);
      setMessage("✅ Account created successfully!");
      setTimeout(() => navigate("/feed"), 1000);
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.msg || "Signup failed"));
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        {message && <div className="alert">{message}</div>}

        <input
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="password-container">
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="show-password-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {password && (
          <div className="password-checklist">
            {validationResults.map((rule, index) => (
              <p key={index} className={rule.valid ? "valid" : "invalid"}>
                {rule.valid ? "✅" : "❌"} {rule.msg}
              </p>
            ))}

            <div className="strength-meter">
              <div
                className="strength-bar"
                style={{
                  width: `${(strengthScore / passwordRules.length) * 100}%`,
                  backgroundColor: strengthColor,
                }}
              ></div>
            </div>
            {strength && <p className="strength-label" style={{ color: strengthColor }}>{strength}</p>}
          </div>
        )}

        <input
          placeholder="Confirm Password"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        {confirm && (
          <p className={passwordsMatch ? "valid" : "invalid"}>
            {passwordsMatch ? "✅ Passwords match" : "❌ Passwords do not match"}
          </p>
        )}

        <button className="btn" type="submit" disabled={!allValid || !passwordsMatch}>
          Sign Up
        </button>

        <p>
          Already have an account?{" "}
          <button
            className="linkish"
            type="button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}
