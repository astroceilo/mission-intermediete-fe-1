// import { useState } from "react";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
// import Course from "./pages/course/Course";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout bgClass="bg-[rgba(255,253,243)]">
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <MainLayout bgClass="bg-[rgba(255,253,243)]">
              <Login />
            </MainLayout>
          }
        />
        <Route
          path="/register"
          element={
            <MainLayout bgClass="bg-[rgba(255,253,243)]">
              <Register />
            </MainLayout>
          }
        />
        {/* <Route path="/course/:id" element={<MainLayout bgClass="bg-white"><Course /></MainLayout>} />
          <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
