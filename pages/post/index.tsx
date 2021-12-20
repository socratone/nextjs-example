import axios from 'axios';
import React, { useState } from 'react';

const Post = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = async () => {
    const result = await axios.post('/api/todo', { todo: value });
    console.log(result.data.message);
  };

  return (
    <>
      <h1>Post</h1>
      <input value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>요청</button>
    </>
  );
};

export default Post;
