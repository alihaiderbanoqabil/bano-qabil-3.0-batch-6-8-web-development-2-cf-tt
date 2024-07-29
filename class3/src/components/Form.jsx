import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

// two ways of handling forms in react
// uncontrolled way // useRef()
// controlled way // useState()

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;
  //   console.log({ name: name });
  console.log(user);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  // const isDisabled = name && email && password;
  const isDisabled =
    nameInputRef.current?.value &&
    emailInputRef.current?.value &&
    passwordInputRef.current?.value;
  console.log({ isDisabled });
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(
  //       "name: ",
  //       (document.getElementById("name").style.backgroundColor = "red")
  //     );
  //   }, 2000);
  // }, []);

  const onInputChnageHandler = (event) => {
    const { name, value, id } = event.target;
    // console.log(
    //   //   event.target.value,
    //   //   event.target.id,
    //   event.target,
    //   //   event.target.name.
    //   name,
    //   value,
    //   id
    // );
    const key = "name";
    // setUser({ ...user, [event.target.name]: event.target.value });
    setUser({ ...user, [name]: value });
    // setUser({ ...user, [key]: event.target.value });
  };
  // const onFormSubmitHandler = async (event) => {
  //   try {
  //     event.preventDefault();
  //     //    event.target
  //     // console.log(event.target[0].value);
  //     const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
  //     const response = await axios(`https://fakestoreapi.com/products`, {
  //       method: "POST",
  //       data: user,
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     console.log({ response });
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };
  const onFormSubmitHandler = async (event) => {
    event.preventDefault();
    const user = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    nameInputRef.current.style.backgroundColor = "yellow";
    console.log({ user });
    console.log(nameInputRef.current.value);
    console.log(emailInputRef.current.value);
    console.log(passwordInputRef.current.value);
  };
  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className="input-container">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          //   value={user.name}
          // value={name}
          // //   onChange={(event) => {
          // //     // setName(event.target.value);
          // //     setUser({ ...user, name: event.target.value });
          // //     // setUser({ email: "", password: "", name: event.target.value });
          // //     console.log(event.target.value);
          // //   }}
          // //   onChange={(event) => onInputChnageHandler(event)}
          // name="name"
          // onChange={onInputChnageHandler}
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          ref={emailInputRef}
          // value={email}
          // //   onChange={(event) => {
          // //     // setUser({
          // //     //   name: user.name,
          // //     //   password: "",
          // //     //   email: event.target.value,
          // //     // });
          // //     setUser({ ...user, email: event.target.value });
          // //   }}
          // name="email"
          // onChange={onInputChnageHandler}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          ref={passwordInputRef}
          // value={password}
          // //   onChange={(event) => {
          // //     setUser({ ...user, password: event.target.value });
          // //   }}
          // name="password"
          // onChange={onInputChnageHandler}
        />
      </div>
      {/* <button disabled={!isDisabled}>Add User</button> */}
      <button disabled={false}>Add User</button>
    </form>
  );
};

export default Form;
