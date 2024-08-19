import React from "react";
import Header from "../components/Header";
import { useFetch } from "../hooks/useFetch";
import {
  Spinner,
  Alert,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Posts = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");
  console.log(posts, "posts");

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (error) {
    return <Alert variant={"danger"}>{error}</Alert>;
  }
  return (
    <Container>
      <Row>
        {posts.map((post) => {
          return (
            <Col key={post.id} sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://random.imagecdn.app/500/150"
                />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {post.id}: {post.title}
                  </Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                  <Link to={`/posts/${post.id}`} className="btn btn-primary">
                    View More
                  </Link>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Posts;
