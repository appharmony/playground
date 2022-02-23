import React, { useEffect, useState } from "react";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import { Link, useNavigate } from "react-router-dom";
import Header from "shell/Header";
import Footer from "shell/Footer";
import "./Dashboard.css";

const data = [
  {
    name: "JAN",
    debit: 4000,
    credit: 2400,
    amt: 2400,
  },
  {
    name: "FEB",
    debit: 3000,
    credit: 1398,
    amt: 2210,
  },
  {
    name: "MAR",
    debit: 2000,
    credit: 9800,
    amt: 2290,
  },
  {
    name: "APR",
    debit: 2780,
    credit: 3908,
    amt: 2000,
  },
  {
    name: "MAY",
    debit: 1890,
    credit: 4800,
    amt: 2181,
  },
  {
    name: "JUN",
    debit: 2390,
    credit: 3800,
    amt: 2500,
  },
  {
    name: "JUL",
    debit: 3490,
    credit: 4300,
    amt: 2100,
  },
];

function Dashboard() {
  const [role, setRole] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    setRole(localStorage.getItem("user-role"));
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="dashboard__content">
        {role === "ROLE_FULLACCESS" ? (
          <LineGraph data={data} dataKey1="credit" dataKey2="debit" />
        ) : (
          <BarGraph data={data} dataKey1="credit" dataKey2="debit" />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
