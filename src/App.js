import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./include/navbar/navbar";
import Home from "./pages/home";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
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
import Right from "./pages/home/components/right";
import AllListings from "./pages/Explore/AllListings";
import ListingTypes from "./component/homeComponents/listingTypes";
import Profile from "./pages/Profile/Profile";
import ResidentialRent from "./pages/Residential/ResidentialRent";
import CommercialBuy from "./pages/Residential/CommercialBuy";
import CommercialRent from "./pages/Residential/CommercialRent";
import MyAppointments from "./pages/Appointments/MyAppointments";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CommonHome />} />

          <Route path="/explore" element={<Home />}>
            <Route path="mylistings" element={<Right />} />

            <Route path="alllistings" element={<AllListings />} />

            <Route path="listingtypes" element={<ListingTypes />} />

            <Route path="profile" element={<Profile />} />

            <Route path="appointments" element={<MyAppointments />} />

            <Route path="residentialbuy" element={<Residentbuy />} />

            <Route path="residentialrent" element={<ResidentialRent />} />

            <Route path="commercialbuy" element={<CommercialBuy />} />

            <Route path="commercialrent" element={<CommercialRent />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/featuredRes" element={<FeaturedRes />} />
          <Route path="/residentialform" element={<ResidentialForm />} />
          <Route path="/setupprofile" element={<SetupProfile />} />
          <Route path="*" element={<NotFound />} />

          <Route
            path="/property/:propertyId"
            element={<SinglePropertyCard />}
          />

          <Route path="/mylistings" element={<Mylistings />} />

          <Route path="/testpage" element={<Testpage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
