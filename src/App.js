import  {BrowserRouter} from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Switch from "react-router-dom/es/Switch";
import Dashboard from "./component/dashboard/Dashboard"
import Route from "react-router-dom/es/Route";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
          <Navbar/>
          <Switch>
              <Route path={'/'} component={Dashboard}/>
          </Switch>
          </div>
      </BrowserRouter>

  );
}

export default App;
