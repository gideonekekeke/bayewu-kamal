
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Biography from "./Biography/Biography";
import Buttonview from "./Buttonview/Buttonview";
import NavBar from "./components/NavBar";
import Achievement from "./Achievement/Achievement";
import WorksPage from "./WorksPage/WorksPage";

function App({selected, setSelected}) {
  return (
   
 
    

   <Router>
    <Switch>
         <Route path="/" exact component={Home}/>
           <Route path = "/biography" exact component = {Biography}/> 
           <Route path = "/biography" exact component = {Biography}/> 
           <Route path = "/achievement" exact component = {Achievement} setSelected = {setSelected}/> 
           <Route path = '/work' exact component = {WorksPage} />
           {/* <Route>
           <Achievement/>
           </Route> */}
       </Switch>
     </Router>
    //  <div>
    //    <Buttonview/>
    //  </div>
  

  ) 
}

export default App;
