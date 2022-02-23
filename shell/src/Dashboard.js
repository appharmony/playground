import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default Dashboard;
