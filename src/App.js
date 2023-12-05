import './App.css';
// import Looker from './components/looker'
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Looker from "./pages/looker";
import TreeMap from "./pages/treemap";
import Donut from "./pages/donut";

function App() {
  // return (
  //   <Looker/>
  // );
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/looker" element={<Looker />} />
            <Route path="/treemap" element={<TreeMap />}/>
            <Route path="/donut" element={<Donut />}/>
        </Routes>
    </Router>
);
}

export default App;
