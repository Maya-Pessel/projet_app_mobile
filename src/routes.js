import Login from "./screens/public/Login";
import SignUp from "./screens/public/SignUp";
import Profile from "./screens/private/Profile";
import Home from "./screens/private/Home";
import Message from "./screens/private/Message";
import MessageDetails from "./screens/private/MessageDetails";
import EditProfile from "./screens/private/EditProfile";
import ForgotPassword from "./screens/public/ForgotPassword";
import Icons from "./assets";

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
        name:"forgot",
        screen: ForgotPassword,
        layout: "/public",
    },
    {
        name: "messages",
        screen: Message,
        layout: "/private",
        menuTab: true,
        Icon: Icons.Menu.Message

    },
    {
        name: "home",
        screen: Home,
        layout: "/private",
        menuTab: true,
        Icon: Icons.Menu.Home

    },
    {
        name: "profile",
        screen: Profile,
        layout: "/private",
        menuTab: true,
        Icon: Icons.Menu.Profile

    },
    {
        name: "messageDetails",
        screen: MessageDetails,
        layout: "/private",
    },
    {
        name: "EditProfile",
        screen: EditProfile,
        layout: "/private",
    },

];

export default ROUTES;
