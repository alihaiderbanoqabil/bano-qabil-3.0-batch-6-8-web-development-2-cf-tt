import React, { useEffect, useState } from "react";
import Products from "./Products";
import axios from "axios";

const categories = [
  "electronics",
  "men's clothing",
  "jewelery",
  "women's clothing",
];
const Counter = () => {
  //   const count = useState(0);
  const [count, setCount] = useState(0);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    console.log("useEffect calling");
    // cleanup function
    // return () => {
    //   console.log("This code will run when component unmont!");
    // };
    getProducts();
  }, [category]);

  const user = {
    name: "ali",
    email: "ali@gmail.com",
  };
  // function getProducts() {
  //   setIsLoading(true);
  //   // fetch(`https://fakestoreapi.com/products?category=elctronic`
  //   // fetch(`https://fakestoreapi.com/products/1`
  //   fetch(
  //     `https://fakestoreapi.com/products/`
  //     //   , {
  //     //   body: JSON.stringify(user),
  //     //   method:"POST",
  //     //   // headers:{}
  //     // }
  //   )
  //     .then((response) => {
  //       console.log("response: ", response);
  //       return response.json();
  //     })
  //     .then((productsData) => {
  //       console.log("productsData:", productsData);
  //       setProducts(productsData);
  //       // setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log("error: ", error);
  //       setError(error.message);
  //       // setIsLoading(false);
  //     })
  //     .finally(() => {
  //       // console.log("finally block is calling");
  //       setIsLoading(false);
  //     });
  // }
  // function getProducts() {
  //   // fetch(`https://fakestoreapi.com/products?category=elctronic`
  //   // fetch(`https://fakestoreapi.com/products/1`
  //   axios(`https://fakestoreapi.com/products/`, {
  //     method: "GET",
  //     // data: user,
  //     // headers:{
  // 'Authorization':`Bearer ${TOKEN}`}
  //   })
  //     .then((response) => {
  //       console.log("response: ", response);
  //       setProducts(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("error: ", error);
  //       setError(error.message);
  //       // setIsLoading(false);
  //     })
  //     .finally(() => {
  //       // console.log("finally block is calling");
  //       setIsLoading(false);
  //     });
  // }
  async function getProducts() {
    try {
      // fetch(`https://fakestoreapi.com/products?category=elctronic`
      // fetch(`https://fakestoreapi.com/products/1`
      const response = await axios(
        `https://fakestoreapi.com/products${
          category ? `/category/${category}` : ""
        }`,
        {
          method: "GET",
          // data: user,
          // headers:{}
        }
      );
      console.log("response: ", response);
      setProducts(response.data);
    } catch (error) {
      setError(error.message);
      console.log("error: ", error);
    } finally {
      setIsLoading(false);
    }
  }
  console.log(
    "Counter component calling",
    category,
    error,
    isLoading,
    products
  );
  // const increment = () => {
  //   setCount(count + 1);
  //   console.log("increment", count);
  // };
  // const decrement = () => {
  //   // setCount(count - 1);
  //   setCount((previousCount) => {
  //     return previousCount - 1;
  //   });
  //   console.log("decrement", count);
  // };
  //   let count = 0;
  //   const increment = () => {
  //     // count++;
  //     count = count + 1;
  //     console.log("increment", count);
  //   };
  //   const decrement = () => {
  //     count--;
  //     console.log("decrement", count);
  //   };
  // console.log({ isPasswordVisible });

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <select
          onChange={(event) => {
            console.log(event.target.value);
            setCategory(event.target.value);
          }}
        >
          <option value=""> Select your category for filter products!</option>
          <option value={""}>All</option>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
        <h1>Products: {products.length}</h1>
      </div>
      {/* {isLoading ? "Loading..." : null} */}
      {isLoading && "Loading..."}
      {error && <h1 style={{ color: "red" }}>{error}</h1>}
      {products.length > 0 && <Products products={products} />}
    </>
  );
};

export default Counter;

// <div>
// {/* <button onClick={increment}>+</button>
// <button onClick={increment}>+</button>
// <span>{count}</span>
// <button onClick={() => decrement()}>-</button> */}
// {/* <button onClick={() => setIsPasswordVisible(true)}>Show</button> */}
// <button onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
//   {/* {!isPasswordVisible ? "Show" : "Hide"} */}
//   {isPasswordVisible ? "Hide" : "Show"}
// </button>
// {/* <input type="password" /> */}
// <input type={isPasswordVisible ? "text" : "password"} />
// </div>
