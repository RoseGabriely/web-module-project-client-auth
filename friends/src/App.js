import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Logout from "./components/Logout";
import Friends from "./components/Friends";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="/logout">
            Logout
          </Link>
          <Link className="link" to="/friends">
            Friends
          </Link>
        </nav>
        <div className="components">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/friends" component={Friends} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
