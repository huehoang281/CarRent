import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import"./global.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Category from './pages/category/Category';
import Detail from './pages/detail/Detail';
import Payment from "./pages/payment/Payment"
import Admin from './pages/admin/Admin';
import { ThemeContext } from "./context";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "#111" : "white", 
    color: darkMode && "orange"}}>
    
    <div className="App">
      <Router>
    <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/category" element={<Category/>}/>
    <Route exact path="/detail" element={<Detail/>}/>
    <Route exact path="/payment" element={<Payment/>}/>
    
    <Route exact path="/admin" element={<Admin/>}/>



      
        
  


    </Routes>
   </Router>


    </div>
    </div>

  );
}

export default App;
