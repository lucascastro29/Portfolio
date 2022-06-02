import './App.css';
import {BrowserRouter,Route, Switch, Redirect} from 'react-router-dom'
import English from './Pages/english';
import Spanish from './Pages/spanish';



function App() {
 


  return (
  <div className="App col-12" style={{padding:"0px"}}>
    <BrowserRouter>
    <Switch>
        <Route path="/" exact>
          <Redirect to="/en"></Redirect>
        </Route>

        <Route path="/en">
          <English />
        </Route>
        
        <Route path="/es">
        <Spanish />

        </Route>

        
        
      </Switch>
      </BrowserRouter>

    

  </div>
  );
}

export default App;
