
// import React, { useState } from "react";

// function PostCard({ post }) {
//   const initial = post.userName ? post.userName[0].toUpperCase() : "?";
//   const [likes, setLikes] = useState(0);
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([]);
//   const [showComments, setShowComments] = useState(false);

//   const handleLike = () => setLikes(likes + 1);
//   const toggleComments = () => setShowComments(!showComments);

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (comment.trim() === "") return;
//     setComments([...comments, comment]);
//     setComment("");
//   };

//   return (
//     <div className="post-card">
//       {/* Header */}
//       <div className="post-header">
//         <div className="post-user-info">
//           <div className="avatar">{initial}</div>
//           <h3 className="username">{post.userName}</h3>
//         </div>
//         <span className="timestamp">{post.timestamp}</span>
//       </div>

//       {/* Post Content */}
//       <div className="post-content">
//         <p>{post.text}</p>
//       </div>

//       {/* Like & Comment Icons */}
//       <div
//         className="post-actions"
//         style={{
//           display: "flex",
//           gap: "15px",
//           alignItems: "center",
//           marginTop: "10px",
//         }}
//       >
//         <button
//           onClick={handleLike}
//           className="like-btn"
//           style={{
//             background: "none",
//             border: "none",
//             cursor: "pointer",
//             fontSize: "1.2rem",
//           }}
//         >
//           👍 {likes}
//         </button>

//         <button
//           onClick={toggleComments}
//           className="comment-toggle-btn"
//           style={{
//             background: "none",
//             border: "none",
//             cursor: "pointer",
//             fontSize: "1.2rem",
//           }}
//         >
//           💬 {comments.length}
//         </button>
//       </div>

//       {/* Comment Section (toggle visible) */}
//       {showComments && (
//         <div className="comment-section" style={{ marginTop: "10px" }}>
//           <form
//             onSubmit={handleCommentSubmit}
//             style={{ display: "flex", gap: "8px", alignItems: "center" }}
//           >
//             <input
//               type="text"
//               className="comment-input"
//               placeholder="Add a comment..."
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               style={{ flex: 1 }}
//             />
//             <button type="submit" className="comment-btn">
//               Post
//             </button>
//           </form>

//           {/* Comment List */}
//           <div className="comments-list" style={{ marginTop: "5px" }}>
//             {comments.map((cmt, index) => (
//               <p key={index} className="comment-text">
//                 💬 {cmt}
//               </p>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PostCard;
import React, { useState } from "react";

function PostCard({ post }) {
  const initial = post.userName ? post.userName[0].toUpperCase() : "?";
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => setLikes(likes + 1);
  const toggleComments = () => setShowComments(!showComments);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="post-card">
      {/* Header */}
      <div className="post-header">
        <div className="post-user-info">
          <div className="avatar">{initial}</div>
          <h3 className="username">{post.userName}</h3>
        </div>
        <span className="timestamp">{post.timestamp}</span>
      </div>

      {/* Post Content */}
      <div className="post-content">
        <p>{post.text}</p>

        {/* ✅ Show post image if available */}
        {post.image && (
          <div className="post-image-container" style={{ marginTop: "10px" }}>
            <img
              src={post.image}
              alt="Post"
              style={{
                maxWidth: "100%",
                borderRadius: "8px",
              }}
            />
          </div>
        )}
      </div>

      {/* Like & Comment Icons */}
      <div
        className="post-actions"
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <button
          onClick={handleLike}
          className="like-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.2rem",
          }}
        >
          👍 {likes}
        </button>

        <button
          onClick={toggleComments}
          className="comment-toggle-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.2rem",
          }}
        >
          💬 {comments.length}
        </button>
      </div>

      {/* Comment Section (toggle visible) */}
      {showComments && (
        <div className="comment-section" style={{ marginTop: "10px" }}>
          <form
            onSubmit={handleCommentSubmit}
            style={{ display: "flex", gap: "8px", alignItems: "center" }}
          >
            <input
              type="text"
              className="comment-input"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{ flex: 1 }}
            />
            <button type="submit" className="comment-btn">
              Post
            </button>
          </form>

          {/* Comment List */}
          <div className="comments-list" style={{ marginTop: "5px" }}>
            {comments.map((cmt, index) => (
              <p key={index} className="comment-text">
                💬 {cmt}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PostCard;
