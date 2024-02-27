import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./include/navbar/navbar";
import Home from "./pages/home";  
import Login from "./pages/Login/login";
import Register from "./pages/Register/register"
import CommonHome from "./pages/commonHome";
import Footer from "./include/footer";
import FeaturedRes from "./assets/topresidencies/featuredRes";
import ResidentialForm from "./component/forms/properties/residential";
import NotFound from "./pages/NotFound/notFound";
import SetupProfile from "./component/forms/setupProfile";
import UsePrivateRoute from "./hooks/usePrivateRoute";
import Residentbuy from "./pages/Residential/Residentbuy";
import SinglePropertyCard from "./component/card/SinglePropertyCard";
import Mylistings from "./pages/home/components/Mylistings";
import Testpage from "./pages/Testpage";



function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonHome />} />
          <Route
            path="/Home"
            element={
              <UsePrivateRoute>
                <Home />
              </UsePrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        
          <Route path="/featuredRes" element={<FeaturedRes />} />
          <Route
            path="/residentialform"
            element={
              <UsePrivateRoute>
                <ResidentialForm />
              </UsePrivateRoute>
            }
          />
          <Route
            path="/setupprofile"
            element={
              <UsePrivateRoute>
                <SetupProfile />
              </UsePrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />

          <Route
            path="/residentialbuy"
            element={
              <UsePrivateRoute>
                <Residentbuy />
              </UsePrivateRoute>
            }
          />

          <Route
            path="/property/:propertyId"
            element={
              <UsePrivateRoute>
                <SinglePropertyCard />
              </UsePrivateRoute>
            }
          />

          <Route
            path="/mylistings"
            element={
              <UsePrivateRoute>
                <Mylistings />
              </UsePrivateRoute>
            }
          />

          <Route path="/testpage" element={<Testpage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
