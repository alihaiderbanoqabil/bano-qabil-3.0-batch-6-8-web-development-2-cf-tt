import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Post from "./screens/Post";
import Posts from "./screens/Posts";
import Services from "./screens/Services";

export const routes = [
  //   {
  //     path: "/",
  //     screen: <Home />,
  //     label: "Home",
  //   },
  {
    path: "/services",
    screen: <Services />,
    label: "Services",
  },
  {
    path: "/contact",
    screen: <Contact />,
    label: "Contact",
  },
  {
    path: "/about",
    screen: <About />,
    label: "About",
  },
  {
    path: "/posts",
    screen: <Posts />,
    label: "Posts",
  },
  {
    path: "/posts/:postId",
    screen: <Post />,
    // label: "Post",
    // isHidden: true,
  },
];
