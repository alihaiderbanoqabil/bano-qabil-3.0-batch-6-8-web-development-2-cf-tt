import React, { useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom";

const Posts = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");
  console.log(posts, "posts");
  const navigate = useNavigate();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  // useEffect(() => {
  //   if (token) {
  //     navigate("/posts/1", { replace: false, state: "state data goes here" });
  //   }
  // }, [token]);
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
                  <Link
                    to={`/posts/${post.id}?name=ali&age=${20}`}
                    className="btn btn-primary"
                    state={post}
                  >
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
