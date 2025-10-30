// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // export default function Navbar({ user, onLogout }) {
// //   return (
// //     <nav className="nav">
// //       <div className="nav-left">
// //         <Link to="/feed" className="brand">AppDost</Link>
// //       </div>
// //       <div className="nav-right">
// //         {user ? (
// //           <>
// //             <span className="nav-user">Hi, {user.name}</span>
// //             <button className="btn" onClick={onLogout}>Logout</button>
// //           </>
// //         ) : (
// //           <>
// //             <Link to="/login" className="btn-link">Login</Link>
// //             <Link to="/signup" className="btn">Sign up</Link>
// //           </>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // }

// // Updated Navbar.js (Only the app name remains)
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar({ user, onLogout }) {
//   return (
//     <nav className="nav">
//       <div className="nav-left">
//         <Link to="/feed" className="brand">AppDost</Link>
//       </div>
//       {/* The nav-right section is intentionally removed */}
//     </nav>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/feed" className="brand">AppDost (LinkedIn Clone)</Link>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <span className="nav-user">Welcome, {user.name}!</span> {/* Changed "Hi" to "Welcome" */}
            <button className="btn" onClick={onLogout}>Logout</button>
          </>
        ) : (
          // This part will only show if 'user' is null/undefined (e.g., on login/signup page)
          <>
            <Link to="/login" className="btn-link">Login</Link>
            <Link to="/signup" className="btn">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
}