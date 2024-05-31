import fs from 'fs';
import path from 'path';
import Card from '../components/Card';
import HeavyComponent from '@/components/HeavyComponent';

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const jsonData = fs.readFileSync(filePath);
  const posts = JSON.parse(jsonData);

  return {
    props: {
      posts,
    },
  };
}

const SSR = ({ posts }) => {
  return (
    <div className='wrapper'>
      <h1>Server-Side Rendering (SSR)</h1>
      {posts.map((post) => (
       <Card title={post.title} content={post.content} key={post.id}/>
      ))}
       {/* <HeavyComponent /> */}
    </div>
  );
};

export default SSR;
