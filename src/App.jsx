import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Ourrecipes from "./components/Ourrecipes";
import Cookingitems from "./components/Cookingitems";
import Cookinginfo from "./components/Cookinginfo";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Ourrecipes></Ourrecipes>
      <section className="md:flex md:px-5 gap-3 px-3 md:my-24">
        <Cookingitems></Cookingitems>
        <Cookinginfo></Cookinginfo>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
