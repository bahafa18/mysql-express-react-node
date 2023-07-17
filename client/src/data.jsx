import {
  Analytics,
  Campaign,
  Dataset,
  History,
  Home,
  People,
} from "@mui/icons-material";

export const menus = [
  {
    id: 1,
    path: "/",
    title: "Dashboard",
    icon: <Home fontSize="large" />,
  },
  {
    id: 2,
    path: "/reports",
    title: "Reports",
    icon: <Campaign fontSize="large" />,
  },
  {
    id: 3,
    path: "/analytics",
    title: "Analytics",
    icon: <Analytics fontSize="large" />,
  },
  {
    id: 4,
    path: "/history",
    title: "History",
    icon: <History fontSize="large" />,
  },
  {
    id: 5,
    path: "/assets",
    title: "Assets",
    icon: <Dataset fontSize="large" />,
  },
  {
    id: 6,
    path: "/users",
    title: "Users",
    icon: <People fontSize="large" />,
  },
];
