import React, { useState } from 'react';
import api from '../api';

export default function CreatePost({ onPosted }) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await api.post('/posts', { text });
      setText('');
      onPosted && onPosted(res.data);
    } catch (err) {
      alert(err.response?.data?.msg || 'Error posting');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="create-post" onSubmit={submit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Share something..."
        rows={3}
      />
      <div className="create-actions">
        <button className="btn" type="submit" disabled={loading}>{loading ? 'Posting...' : 'Post'}</button>
      </div>
    </form>
  );
}
