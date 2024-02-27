import Navbar from "./include/navbar/navbar";
import Home from "./component/pages/home/home";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Login from "./component/pages/login";
import Register from "./component/pages/register";
import CommonHome from "./component/pages/commonHome";
import Footer from "./include/footer";
import FeaturedRes from "./assets/topresidencies/featuredRes";
import ResidentialForm from "./component/forms/properties/residential";
import NotFound from "./component/pages/notFound";
import SetupProfile from "./component/forms/setupProfile";
import UsePrivateRoute from "./hooks/usePrivateRoute";
import Residentbuy from "./component/forms/properties/Residentbuy";
import SinglePropertyCard from "./component/card/SinglePropertyCard";
import Mylistings from "./component/pages/home/components/Mylistings";
import Testpage from "./component/pages/Testpage";


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
