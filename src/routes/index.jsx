import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Feedback from "~/pages/Feedback";
import HeaderOnly from "~/Components/Layout/HeaderOnly";
//nhung trang khong co layout chi dinh thi se dat theo DefaultLayout
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/feedback", component: Feedback },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
