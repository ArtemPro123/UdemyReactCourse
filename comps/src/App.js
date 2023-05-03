import Route from "./components/Route";
import AccordionPage from './pages/AccordionPage';
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/SideBar";
import ButtonPage from "./pages/ButtonPage";
import ModelPage from "./pages/ModelPage";
import TablePage from "./pages/TablePage";

function App() {
  return <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
    <div className="col-span-5">
      <Route path="/accordion"><AccordionPage /></Route>
      <Route path="/"><DropdownPage /></Route>
      <Route path="/buttons"><ButtonPage /></Route>
      <Route path="/model"><ModelPage /></Route>
      <Route path="/table"><TablePage /></Route>
    </div>
  </div>
}

export default App;

//Hooks are functions that allows us to introduce new functionality
//useRef allows access to the DOM elements it creates