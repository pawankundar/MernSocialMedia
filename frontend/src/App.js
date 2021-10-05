import { useContext } from "react";
import { BrowserRouter, Switch, Route,Redirect} from "react-router-dom";
import { Context } from "./context/context";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Message from "./pages/message/Message";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Register from "./pages/register/Register";

const App = () => {
  const {user} = useContext(Context)
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={user?Home : Login} />
        <Route path="/profile/:username"> 
        {user ? <ProfilePage/> : <Redirect to="/"/>}
        </Route>
        <Route path="/login">
          {user?<Redirect to="/"/>:<Login/>}
        </Route>
        <Route path="/Register">
        {user?<Redirect to="/"/>:<Register/>}
        </Route>
        <Route  path="/message" component={Message}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
