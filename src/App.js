import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/navbar";
import IndexPage from "./components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import President from "./components/president";
import Faculty from "./components/faculty";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Committee from "./components/committee";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="president" element={<President />} />
        <Route path="committee" element={<Committee />} />
        <Route path="faculty" element={<Faculty />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
