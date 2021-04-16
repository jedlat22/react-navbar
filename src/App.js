import React from "react"
import './App.css';
import Navbar from "./components/navbar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Services from './components/pages/services';
import Products from './components/pages/products';
import ContactUs from './components/pages/contact';
import SignUp from "./components/pages/signup";
import Marketing from "./components/pages/marketing";
import Consulting from "./components/pages/consulting";
import Home from "./components/pages/home";

function App() {
  return (
   <Router>
      <Navbar/>
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/services" component={Services} exact/>
      <Route path="/products" component={Products} exact/>
      <Route path="/contact-us" component={ContactUs} exact/>
      <Route path="/signup" component={SignUp} exact/>
      <Route path="/marketing" component={Marketing} exact/>
      <Route path="/consulting" component={Consulting} exact/>
      </Switch>
   </Router>
  );
}

export default App;
