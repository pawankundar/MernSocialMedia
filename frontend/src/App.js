import { useContext } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { Context } from "./context/context";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Register from "./pages/register/Register";

const App = () => {
  const {user} = useContext(Context)
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={user?Home : Login} />
        <Route path="/profile/:username" component={user ? ProfilePage : Login} />
        <Route path="/login" exact component={user?Home:Login} />
        <Route path="/Register" exact component={user?Home:Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
