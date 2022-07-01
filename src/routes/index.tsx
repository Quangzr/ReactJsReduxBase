import Home from "../pages/TestBase/Home";
import Setting from "../pages/TestBase/Setting";

// Public routes
export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/setting", component: Setting },
];

// Private routes
export const privateRoutes = [
  { path: "/", component: Home },
  { path: "/setting", component: Setting },
];
