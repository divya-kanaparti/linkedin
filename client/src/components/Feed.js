// import React, { useState } from "react";
// import PostCard from "./PostCard";

// function Feed({ userName, posts, setPosts }) {
//   const [newPostText, setNewPostText] = useState("");

//   const handlePostSubmit = (e) => {
//     e.preventDefault();
//     if (newPostText.trim() === "") return;

//     const newPost = {
//       id: Date.now(),
//       userName: userName || "Guest", // ✅ fallback added here
//       text: newPostText,
//       timestamp: new Date().toLocaleString(),
//       likes: 0,
//     };

//     // Add new post at the top
//     setPosts([newPost, ...posts]);
//     setNewPostText("");
//   };

//   return (
//     <div className="feed-container">
//       {/* Center Feed Section */}
//       <div className="center-feed">
//         {/* Post Creation Box */}
//         <div className="create-post-box card">
//           <h4>Start a post, {userName || "Guest"}</h4> {/* ✅ fallback here too */}
//           <form onSubmit={handlePostSubmit}>
//             <textarea
//               placeholder="What do you want to talk about?"
//               value={newPostText}
//               onChange={(e) => setNewPostText(e.target.value)}
//               required
//             ></textarea>
//             <button type="submit" className="primary-button">
//               Post
//             </button>
//           </form>
//         </div>

//         {/* Public Posts Section */}
//         <div className="recent-posts-card card">
//           <h3 className="recent-posts-title">Public Feed</h3>

//           {posts.length === 0 ? (
//             <div className="empty-feed-message">
//               <p>No posts yet — start sharing something!</p>
//             </div>
//           ) : (
//             posts.map((post) => (
//               <PostCard key={post.id} post={post} posts={posts} setPosts={setPosts} />
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Feed;
import React, { useState } from "react";
import PostCard from "./PostCard";

function Feed({ userName, posts, setPosts }) {
  const [newPostText, setNewPostText] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPostText.trim() === "" && !postImage) return;

    const newPost = {
      id: Date.now(),
      userName: userName || "Guest",
      text: newPostText,
      timestamp: new Date().toLocaleString(),
      likes: 0,
      image: imagePreview || null, // ✅ include uploaded image
    };

    // Add new post at the top
    setPosts([newPost, ...posts]);
    setNewPostText("");
    setPostImage(null);
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="feed-container">
      {/* Center Feed Section */}
      <div className="center-feed">
        {/* Post Creation Box */}
        <div className="create-post-box card">
          <h4>Start a post, {userName || "Guest"}</h4>
          <form onSubmit={handlePostSubmit}>
            <textarea
              placeholder="What do you want to talk about?"
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
            ></textarea>

            {/* ✅ Optional Image Upload */}
            <div className="image-upload-section" style={{ marginTop: "10px" }}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <div className="image-preview" style={{ marginTop: "10px" }}>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{
                      maxWidth: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              )}
            </div>

            <button type="submit" className="primary-button" style={{ marginTop: "10px" }}>
              Post
            </button>
          </form>
        </div>

        {/* Public Posts Section */}
        <div className="recent-posts-card card">
          <h3 className="recent-posts-title">Public Feed</h3>

          {posts.length === 0 ? (
            <div className="empty-feed-message">
              <p>No posts yet — start sharing something!</p>
            </div>
          ) : (
            posts.map((post) => (
              <PostCard key={post.id} post={post} posts={posts} setPosts={setPosts} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Feed;
