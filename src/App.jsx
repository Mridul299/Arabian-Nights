import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Ourrecipes from "./components/Ourrecipes";
import Cookingitems from "./components/Cookingitems";
import Cookinginfo from "./components/Cookinginfo";
import { useState } from "react";

function App() {

  const[selecteditem,setselecteditem] = useState([]);

  const handlecookbutton = (recipe) =>{
    
    setselecteditem([...selecteditem,recipe])
    
  }
  console.log(selecteditem);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Ourrecipes></Ourrecipes>
      <section className="md:flex md:px-5 gap-3 px-3 md:my-24">
        <Cookingitems handlecookbutton ={handlecookbutton } ></Cookingitems>
        <Cookinginfo></Cookinginfo>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
