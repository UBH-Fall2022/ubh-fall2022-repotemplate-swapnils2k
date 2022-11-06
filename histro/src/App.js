import { Fragment, useState, useEffect } from "react";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import DashboardRedirect from "./components/dashboard/DashboardRedirect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onLoginHandler = (username, password, userIdentity) => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("identity", userIdentity);
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("identity");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
  };
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn === true ? (
                <DashboardRedirect onLogout={logoutHandler} />
              ) : (
                <Login onLogin={onLoginHandler} />
              )
            }
          />
          <Route
            path="/verify/login"
            element={
              isLoggedIn === true ? (
                <DashboardRedirect onLogout={logoutHandler} />
              ) : (
                <Login onLogin={onLoginHandler} />
              )
            }
          />
          <Route
            path="/verify/signup"
            element={
              isLoggedIn === true ? (
                <DashboardRedirect onLogout={logoutHandler} />
              ) : (
                <SignUp onSignUp={onLoginHandler} />
              )
            }
          />
          <Route
            path="/verify/dashboard"
            element={
              isLoggedIn === true ? (
                <DashboardRedirect onLogout={logoutHandler} />
              ) : (
                <Login onLogin={onLoginHandler} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
