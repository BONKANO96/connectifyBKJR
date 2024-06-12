import React, { useState } from 'react';

function PostWall() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    setPosts([...posts, newPost]);
    setNewPost('');
  };

  return (
    <div>
      <h3>Mur de publication</h3>
      <input
        type="text"
        placeholder="Quoi de neuf ?"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <button onClick={handlePost}>Publier</button>
      <div>
        {posts.map((post, index) => (
          <div key={index}>{post}</div>
        ))}
      </div>
    </div>
  );
}

export default PostWall;
