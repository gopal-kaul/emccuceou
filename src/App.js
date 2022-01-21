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
import Events from "./components/events";
import Band from "./components/band";
import Spotlight from "./components/spotlight";
import PastCommittee from "./components/pastcommittee";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="president" element={<President />} />
        <Route path="committee" element={<Committee />} />
        <Route path="spotlight" element={<Spotlight/>} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="band" element={<Band />} />
        <Route path="special" element={<Specialmentions />} />
        <Route path="events" element={<Events />} />
        <Route path="pastcommittee" element={<PastCommittee />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
