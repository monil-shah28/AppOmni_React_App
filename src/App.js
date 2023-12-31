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
import TeamPlanner from "./pages/tp";
import Pagination from "./pages/pagination";
import NestedTreeMap from "./pages/nestedtree";
import OverRun from "./pages/overrun";
import TPScenarios from "./pages/tp_scenarios";
import Collapsible from './pages/collapsible';

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
            <Route path="/tp" element={<TeamPlanner />}/>
            <Route path="/pagination" element={<Pagination />}/>
            <Route path="/nested" element={<NestedTreeMap />}/>
            <Route path="/overrun" element={<OverRun />}/>
            <Route path="/tp_scenarios" element={<TPScenarios />}/>
            <Route path="/collapsible" element={<Collapsible />}/>
        </Routes>
    </Router>
);
}

export default App;
