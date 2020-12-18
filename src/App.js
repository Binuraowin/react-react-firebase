import  {BrowserRouter} from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Switch from "react-router-dom/es/Switch";
import Dashboard from "./component/dashboard/Dashboard"
import Route from "react-router-dom/es/Route";
import ProjectDetails from "./component/projects/ProjectDetails";
import './css/materialize.css'
import SignIn from "./component/auth/SignIn";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
          <Navbar/>
          <Switch>
              <Route exact path={'/'} component={Dashboard}/>
              <Route path={'/project/:id'} component={ProjectDetails}/>
              <Route path={'/signin'} component={SignIn}/>
          </Switch>
          </div>
      </BrowserRouter>

  );
}

export default App;
