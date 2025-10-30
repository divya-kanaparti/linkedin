const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Post = require('../models/Post');
const User = require('../models/User');

// ✅ Create a new post
router.post('/', auth, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ msg: 'Post text required' });

    const user = await User.findById(req.user.id).select("name email");
    if (!user) return res.status(404).json({ msg: "User not found" });

    const post = new Post({
      user: user._id,       // link to user
      userName: user.name,  // save name for easy access
      text,
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// ✅ Get all posts (public feed, latest first)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "name email") // include name + email
      .sort({ createdAt: -1 }); // latest first
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error fetching posts" });
  }
});

module.exports = router;
