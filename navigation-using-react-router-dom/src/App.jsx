// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import PageNotFound from "./screens/PageNotFound";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "./screens/Posts";
import { routes } from "./routes";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Layout>
        <Routes>
          {routes.map(({ path, screen }, index) => (
            <Route key={index} path={path} element={screen} />
          ))}
          {/* {routes.map((route) => (
          <Route path={route.path} element={route.screen} />
        ))} */}
          {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
