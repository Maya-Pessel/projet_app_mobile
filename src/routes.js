import Login from "./screens/public/Login";
import SignUp from "./screens/public/SignUp";
import Profile from "./screens/private/Profile";
import Home from "./screens/private/Home";
import Message from "./screens/private/Message";

const ROUTES = [
    {
        name: "login",
        screen: Login,
        layout: "/public",
    },
    {
        name: "signup",
        screen: SignUp,
        layout: "/public",
    },
    {
        name: "messages",
        screen: Message,
        layout: "/private",
    },
    {
        name: "home",
        screen: Home,
        layout: "/private",
    },
    {
        name: "profile",
        screen: Profile,
        layout: "/private",
    },

];

export default ROUTES;
