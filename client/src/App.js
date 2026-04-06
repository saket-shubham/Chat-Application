import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/protectedRoute";
import Loader from "./components/loader";
import { useSelector } from "react-redux";
import Profile from "./pages/profile";

function App() {
  const { loader } = useSelector(state => state.loaderReducer);
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      { loader && <Loader /> }
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute> }>
          </Route>
          <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute> }>
          </Route>
          <Route path="/login" element={<Login /> }></Route>
          <Route path="/signup" element={<Signup /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
