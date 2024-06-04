import { Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import "./global.css";

// Pages
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";
import About from "./pages/about/About";
import Card from "./components/card/Card";
import "./global.css";
import Information from "./components/information";
import Delivery from "./components/information/delivery";
import Obmen from "./components/information/obmen";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="information" element={<Information />}>
            <Route path="delivery" element={<Delivery />} />
            <Route path="obmen" element={<Obmen />} />
          </Route>
        </Route>
        <Route path="/category/:path" element={<Category />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/cart" element={<Card />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
