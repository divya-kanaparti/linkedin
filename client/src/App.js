import React, { useState } from "react";
import "./App.css";
import LoginPage from "./components/Login";
import Feed from "./components/Feed";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Name, setUserName] = useState("");
  const [posts, setPosts] = useState([]); // ✅ Global posts state

  const handleLoginSuccess = (name = "") => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  const handleSignupSuccess = () => {
    alert("Account created successfully!");
  };

  const handleLogout = () => {
    setUserName("");
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="app-header">
        <div className="logo">
          AppDost <span className="subtext">(LinkedIn Clone)</span>
        </div>
        <nav>
          {isLoggedIn ? (
            <>
              <span className="user-name">
                Welcome, {userName ? userName : "Guest"}!
              </span>
              <button onClick={handleLogout} className="nav-button logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="nav-button">Login</button>
              <button className="nav-button primary-button">Sign up</button>
            </>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {isLoggedIn ? (
          <div className="dashboard">
            {/* Left Sidebar */}
            <aside className="left-sidebar">
              <div className="profile-card">
                <div className="profile-banner"></div>
                <div className="avatar">👤</div>
                <h3>Hey, {userName ? userName : "Guest"}!</h3>
                <button className="view-profile-btn">View Profile</button>
              </div>
            </aside>

            {/* Center Feed */}
            <section className="center-feed">
              <Feed
                userName={userName}
                posts={posts}
                setPosts={setPosts} // ✅ Pass global posts
              />
            </section>
          </div>
        ) : (
          <LoginPage
            onLoginSuccess={handleLoginSuccess}
            onSignupSuccess={handleSignupSuccess}
          />
        )}
      </main>
    </div>
  );
}

export default App;
