// pages/api/posts.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const jsonData = fs.readFileSync(filePath);
  const posts = JSON.parse(jsonData);
  res.status(200).json(posts);
}
