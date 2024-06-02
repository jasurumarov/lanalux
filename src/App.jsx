import { Route, Routes } from "react-router-dom";
import "./scss/style.scss";

// Pages
import Home from "./pages/home/Home";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
