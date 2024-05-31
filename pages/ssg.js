import fs from 'fs';
import path from 'path';
import Card from '../components/Card';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const jsonData = fs.readFileSync(filePath);
  const posts = JSON.parse(jsonData);

  return {
    props: {
      posts,
    },
  };
}

const SSG = ({ posts }) => {
  return (
    <div className='wrapper'>
      <h1>Static Site Generation (SSG)</h1>
      {posts.map((post) => (
       <Card title={post.title} content={post.content} key={post.id}/>
      ))}
    </div>
  );
};

export default SSG;
