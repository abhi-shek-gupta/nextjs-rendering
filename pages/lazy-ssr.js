import fs from 'fs';
import path from 'path';
import Card from '../components/Card';
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  ssr: false, 
  loading: () => <p>Loading...</p>,
});

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

const SSRLazyPage = ({ posts }) => {
  return (
    <div className='wrapper'>
      <h1>Server-Side Rendering (SSR)</h1>
      {posts.map((post) => (
       <Card title={post.title} content={post.content} key={post.id}/>
      ))}
      <HeavyComponent />
    </div>
  );
};

export default SSRLazyPage;
