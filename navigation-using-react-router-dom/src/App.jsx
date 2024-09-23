import { lazy, Suspense } from "react";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
const LazyContact = lazy(() => import('./screens/Contact'));
import PageNotFound from "./screens/PageNotFound";
import Posts from "./screens/Posts";
const LazyPosts = lazy(() => import('./screens/Posts'));
import { routes } from "./routes";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./screens/Dashboard";
import DashboardMessages from "./screens/DashboardMessages";
import DashboardTasks from "./screens/DashboardTasks";
import { Spinner } from "react-bootstrap";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>

      <BrowserRouter>
        {/* <Header /> */}
        <Layout>
          <Routes>
            {/* {routes.map(({ path, screen }, index) => (
            <Route key={index} path={path} element={screen} />
          ))} */}

            <Route path="/" element={<Dashboard />}>
              <Route path="messages" element={<DashboardMessages />} />
              <Route path="tasks" element={<DashboardTasks />} />
            </Route>
            {/* {routes.map((route) => (
          <Route path={route.path} element={route.screen} />
        ))} */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Suspense fallback={<Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>}>
              <LazyContact />
            </Suspense>} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts"
              element={<Suspense fallback={<Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>}>
                <LazyPosts />
              </Suspense>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>

        {/* <Footer /> */}
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
