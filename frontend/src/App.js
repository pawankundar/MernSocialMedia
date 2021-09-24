import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Register from "./pages/register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile/:username" component={ProfilePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
