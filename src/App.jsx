import "./App.css";
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import NavBar from "./components/common/NavBar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OpenRoute from './components/core/Auth/OpenRoute'
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
function App() {
  console.log("app started");
  return (
    <div className = "w-screen min-h-screen bg-richblack-900 flex flex-col font-inter ">
      <NavBar/>
      <Routes >
        <Route path = '/' element={<Home/>} />
        <Route path="signup" element={
              <OpenRoute>
                <Signup/>
              </OpenRoute>
            } />
            <Route path="login" element={
              <OpenRoute>
                <Login/>
              </OpenRoute>
            } /> 

            <Route
              path="forgot-password"
              element={
                <OpenRoute>
                  <ForgotPassword/>
                </OpenRoute>
              }
            />  
            <Route
              path="update-password/:id"
              element={
                <OpenRoute>
                  <UpdatePassword/>
                </OpenRoute>
              }
            /> 
            <Route
              path="verify-email"
              element={
                <OpenRoute>
                  <VerifyEmail/>
                </OpenRoute>
              }
            /> 
            <Route
              path="about"
              element={
                  <About/>
              }
            /> 
            <Route
            path="contact"
            element={
              <ContactUs/>
            }
            />
            <Route path="dashboard/my-profile"
            element={
              <OpenRoute>
                {/* <MyProfile/> */}
              </OpenRoute>
              }/>
      </Routes>
    </div>
  );
}

export default App;
