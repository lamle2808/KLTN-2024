import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Signup from "./routes/signup/signup";
import ServicePage from "./routes/servicePage/ServicePage";
import BookingPage from "./routes/bookingPage/BookingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./redux/store";
import UserManagement from "./admin/routes/userManagementPage/UserManagement";
import OrderManagement from "./admin/routes/orderManagement/OrderManagement";
import AddVenuePage from "./routes/addVenuePage/AddVenuePage";
import PaymentPage from "./routes/paymentPage/PaymentPage";
import OrderPage from "./routes/orderPage/OrderPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/order",
          element: <OrderPage />,
        },
        {
          path: "/signup",
          element: <Signup/>,
        },
        {
          path: "/service",
          element: <ServicePage />,
        },
        {
          path: "/booking",
          element: <BookingPage />,
        },
        {
          path: "payment",
          element: <PaymentPage />,
        },
        {
          path: "/add/venue",
          element: <AddVenuePage />,
        },
        {
          path: "/admin/user",
          element: <UserManagement />,

        },
        {
          path: "/admin/order",
          element: <OrderManagement />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} store={store} />;
}

export default App;
