import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './Layout.jsx'
import Authorization from "./Components/Authorization/Authorizatio.jsx"
import HomePage from "./Components/HomePage/homePage.jsx"
import Setting from "./Components/Setting/settings.jsx"
import AboutUs from "./Components/Aboutus/AboutUs.jsx"
import Analytics from "./Components/Analytics/Analytics.jsx"
import ContactUs from "./Components/ContactUs/ContactUs.jsx"
import Feedback from "./Components/Feedback/FeedbackPage.jsx"
import MainPage from "./Components/MainPage/mainPage.jsx"
import ReceiveUpdates from "./Components/ReceiveUpdates/receiveUpdates.jsx"
import Login from "./Components/Login/Login.jsx"
import { GlobalProvider } from "./globalContext/globalContext.jsx"


function App() {
  return (
    <GlobalProvider>
   <Router>
    <Routes>

      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/updateReceive" element={<ReceiveUpdates/>}/>
        <Route path="/feedbackUs" element={<Feedback/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>

        <Route path="/login" element={<Login/>}/>   
      </Route>
    </Routes>
    
   </Router>
   </GlobalProvider>
  
   
  )
}

export default App
