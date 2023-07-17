import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import "./styles/global.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Reports from "./pages/reports/Reports";
import Users from "./pages/users/Users";
import Analytics from "./pages/analytics/Analytics";
import History from "./pages/history/History";
// import Assets from "./pages/assets/Assets";
import Substations from "./pages/assets/substations/Substations";

const App = () => {
  console.log("reload");
  const Layout = () => {
    return (
      <div className="main">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="container">
          <Navbar />
          <div className="pageContainer">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/analytics",
          element: <Analytics />,
        },
        {
          path: "/history",
          element: <History />,
        },
        {
          path: "/assets",
          children: [
            {
              path: "/assets/substations",
              element: <Substations />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
