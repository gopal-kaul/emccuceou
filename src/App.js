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
import Specialmentions from "./components/special";
import Featured from "./components/featured";
import Events from "./components/events";
import Gallery from "./components/gallery";

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
        <Route path="events" element={<Events />} />
        <Route path="special" element={<Specialmentions />} />
        <Route path="featured" element={<Featured />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
