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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
