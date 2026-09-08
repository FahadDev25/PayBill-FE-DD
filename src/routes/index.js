import Dashboard from "../pages/vertical-layout/Dashboard";
import Login from "../pages/noauth-layout/Login";
import { BillDetail, Add } from "../pages/vertical-layout/bill-detail";
import { BillHistory } from "../pages/vertical-layout/bill-history";
import { Payments } from "../pages/vertical-layout/payment";
import { Plans } from "../pages/vertical-layout/plan";
import Home from "../pages/noauth-layout/Home";
const authProtectedRoutesList = [
  { path: "/dashboard", element: Dashboard },
  { path: "/bill-details", element: BillDetail },
  { path: "/bill-details/add", element: Add },
  { path: "/bill-history", element: BillHistory },
  { path: "/payments", element: Payments },
  { path: "/plans", element: Plans },
];
const publicRoutesList = [
  { path: "/", element: Home },
  { path: "/login", element: Login },
];

export { authProtectedRoutesList, publicRoutesList };
