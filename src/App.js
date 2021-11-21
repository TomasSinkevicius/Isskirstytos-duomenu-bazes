import Create from "./Components/Sutartis/Create";
import Index from "./Components/Sutartis/Index";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/Create" element={<Create />} />
          <Route path="/" element={<Index />} />
        </Switch>
      </Router>
  );
};

export default App;
