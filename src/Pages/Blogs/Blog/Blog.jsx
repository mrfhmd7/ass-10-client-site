import { Card, ListGroup } from 'react-bootstrap';
import './Blog.css';

export default function Blog({ blog }) {
  return (
    <Card className="blog" bg="dark" style={{ width: '100%' }}>
      <ListGroup variant="dark">
        <ListGroup.Item>{blog.question}</ListGroup.Item>
        <ListGroup.Item>{blog.answer}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
