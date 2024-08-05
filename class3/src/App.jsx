import React, { Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Greeting from "./components/Greeting";
import Products from "./components/Products";
import Children from "./components/Children";
import Counter from "./components/Counter";
import Form from "./components/Form";
import { Todos } from "./components/Todos";
import Parent from "./components/Parent";

export const App = () => {
  const isAdult = true;
  const style = { backgroundColor: "yellow", color: "red" };

  // console.log("hello");
  {
  }
  return (
    // <React.Fragment>
    // <Fragment>
    <>
      <Parent />
      {/* <Todos /> */}
      {/* <Form /> */}
      {/* <Counter /> */}
      {/* <Children
        title="Create user interfaces from components"
        description="React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HIQgjg_Aq28?si=sf9XZkSjyGQXUxU6"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Children>
      <Children
        title="Write components with code and markup"
        description="React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming."
      >
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </table>
      </Children> */}
      {/* <Children
        title="Create user interfaces from components"
        description="React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data."
      /> */}
      {/* <Products /> */}
      {/* <Header /> */}
      {/* <Header />
      <Header />
      <Header /> */}
      {/* <Greeting
        name="ali"
        age={20}
        // h1={<b>Hello wolrd</b>}
      /> */}
      {/* <Greeting age={0} /> */}
      {/* <Greeting name="hasnain" age={40} />
      <Greeting name={"usman"} age={30} />
      <Greeting /> */}
      {/* <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting /> */}
      {/* <div style="background-color: red; color:green;"> */}
      {/* <div style={{ backgroundColor: "red" }}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={isAdult === true ? style : {}}>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer /> */}
    </>
  );
};

// export default App;

// const Header = () => {
//   const isAdult = true;
//   const style = { backgroundColor: "yellow", color: "red" };
//   console.log("hello");
//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1 style={isAdult === true ? style : {}}>Vite + React</h1>
//       {2 + 3}
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// };

// export default Header;
