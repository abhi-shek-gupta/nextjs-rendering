import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  console.log('getStaticProps called', new Date().getTime());
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const jsonData = fs.readFileSync(filePath);
  const posts = JSON.parse(jsonData);
  const randomPost = posts.map((post) => {
    return { ...post, title: post.title + Math.floor((Math.random() * 10) + 1) };
  });
  return {
    props: {
      posts: randomPost,
    },
    revalidate: 20, // Revalidate the page every 20 seconds
  };
}

const ISR = ({ posts }) => (
  <div className='wrapper'>
    <h1>Incremental Static Regeneration (ISR)</h1>
    {posts.map((post) => (
      <div key={post.id}>
        <h2 className='font-bold'>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    ))}
  </div>
);

export default ISR;
