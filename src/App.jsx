import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import ChefsRecipes from './Pages/ChefsRecipes/ChefsRecipes/ChefsRecipes';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Shared/Login/Login/Login';
import Registrantion from './Pages/Shared/Login/Registration/Registrantion';
import NavBar from './Pages/Shared/NavBar/NavBar';
import NotFound from './Pages/Shared/NotFound/NotFound';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />

        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/h" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route
              path="/chefsRecipes/:chefID"
              element={
                <PrivateRoute>
                  <ChefsRecipes />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registrantion />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
