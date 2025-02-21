import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-6">
        <nav className="mb-6 bg-white p-4 rounded-lg shadow-md">
          <ul className="flex gap-6">
            <li>
              <Link
                to="/login"
                className="text-lg text-blue-600 hover:text-blue-800 font-semibold"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-lg text-blue-600 hover:text-blue-800 font-semibold"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
        <div className=" p-8 rounded-lg w-full justify-center items-center flex">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
