

import React from "react"
import { Container } from "react-bootstrap"
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from '../Signup';
import Dashboard from '../Dashboard';
import Login from '../Login';
import AuthProvider from '../../contexts/AuthContext';
import PrivateRoute from "../PrivateRoute";
import ForgotPassword from "../ForgotPassword";


function App() {
  return (

    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <BrowserRouter>
          <AuthProvider>
             <Routes>
               <Route element={<PrivateRoute/>}>
            <Route exact path="/" element={<Dashboard/>} />
            <Route path="/signup" element={<Signup />} />
            </Route>
            <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
          </AuthProvider>
        </BrowserRouter>

      </div>
    </Container>
  );
}

export default App;
