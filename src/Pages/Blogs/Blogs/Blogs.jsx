import axios from 'axios';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://server-side-mrfhmd7-gmailcom.vercel.app/blogs`).then((result) => {
      setIsLoading(false);
      setBlogs(result.data);
    });
  }, []);

  return isLoading ? (
    <Spinner animation='border' variant='primary' />
  ) : (
    <div>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
