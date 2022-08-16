import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/navbar";
import IndexPage from "./components/index";
import { HashRouter, Route, Routes } from "react-router-dom";
import President from "./components/president";
import Faculty from "./components/faculty";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Committee from "./components/committee";
import Specialmentions from "./components/special";
import Events from "./components/events";
import Band from "./components/band";
import PastCommittee from "./components/pastcommittee";
import SpotlightSingers from "./components/spotlightsingers";
import SpotlightDangers from "./components/spotlightdance";
import Aboutus from "./components/aboutus";
function App() {
  return (
    <HashRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="president" element={<President />} />
        <Route path="committee" element={<Committee />} />
        <Route path="singers" element={<SpotlightSingers />} />
        <Route path="dancers" element={<SpotlightDangers />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="band" element={<Band />} />
        <Route path="special" element={<Specialmentions />} />
        <Route path="events" element={<Events />} />
        <Route path="pastcommittee" element={<PastCommittee />} />
        <Route path="aboutus" element={<Aboutus />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
