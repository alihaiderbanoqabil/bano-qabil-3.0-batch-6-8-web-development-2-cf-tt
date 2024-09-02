import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Outlet />
      <Nav className="me-auto">
        <NavLink
          to={"messages"}
          className="nav-link"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Messages
        </NavLink>
        <NavLink
          to={"tasks"}
          className="nav-link"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Tasks
        </NavLink>
      </Nav>
      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      {/* <Outlet /> */}
    </div>
  );
};

export default Dashboard;
