import Layout from "./layout/Layout";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import AddNewPg from "./pages/addnew/AddNewPg";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <p>Home</p>
          </Route>
          <Route path="/dashboard" exact>
            <p>Dashboard</p>
          </Route>
          <Route path="/add-new" exact>
            <AddNewPg />
          </Route>
          <Route path="**">
            <p>404</p>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
