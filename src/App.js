import Navbar from "./include/navbar/navbar";
import Home from "./component/pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/pages/login";
import Register from "./component/pages/register";
import Dashboard from "./Dashboard/dashboard";
import BrokerDashboard from "./Dashboard/brokerDashboard";
import CommonHome from "./component/pages/commonHome";
import Footer from "./include/footer";
import FeaturedRes from "./component/topresidencies/featuredRes";
import ResidentialForm from "./component/forms/residential";
import NotFound from "./component/pages/notFound";
import CreateFeed from "./component/forms/createFeed";


function App() {
  return (
   <>
   
   <Navbar/>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<CommonHome/>} />
    <Route path="/Home" element={<Home/>}/>
    <Route path="/login" element={<Login/>} /> 
    <Route path="/register" element={<Register/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/brokerdashboard" element={<BrokerDashboard/>}/>
    <Route path="/featuredRes" element={<FeaturedRes/>}/>
    <Route path="/residentialform" element={<ResidentialForm/>} />
    <Route path="/createfeed" element={<CreateFeed/>} />
    <Route path="/createproperty" element={<createPropertyCard/>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
  </BrowserRouter>
    <Footer/>
   </>
  );
}

export default App;
