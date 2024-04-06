import React from "react";
import { Route, Routes } from "react-router-dom";

// Admin
import AdminHeader from "./admin/header/AdminHeader";
import Home from "./admin/pages/Home";
import Product from "./admin/pages/Product";
import About from "./admin/pages/About";
import Contact from "./admin/pages/Contact";

// User
import UserHome from "./user/pages/Home";
import UserAbout from "./user/pages/About";
import UserProduct from "./user/pages/Product";
import UserNavbar from "./user/header/UserNavbar";

function App() {
  let role = "admin";

  if (role === "admin") {
    return (
      <>
        <AdminHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    );
  } else if (role === "user") {
    return (
      <>
        <UserNavbar />
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/product" element={<UserProduct />} />
          <Route path="/about" element={<UserAbout />} />
        </Routes>
      </>
    );
  } else {
    return <h1>Not found</h1>;
  }
}

export default App;
