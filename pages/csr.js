import { useEffect, useState } from 'react';
import Card from '../components/Card';

const CSR = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <div className='wrapper'>
      <h1>Client-Side Rendering (CSR)</h1>
      {posts.map((post) => (
       <Card title={post.title} content={post.content} key={post.id}/>
      ))}
    </div>
  );
};

export default CSR;
