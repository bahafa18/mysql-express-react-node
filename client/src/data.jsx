import {
  Analytics,
  Campaign,
  Dataset,
  History,
  Home,
  People,
  TollOutlined,
} from "@mui/icons-material";

export const menus = [
  {
    id: 1,
    title: "Main",
    listItems: [
      {
        id: 1,
        title: "Dashboard",
        url: "/",
        icon: <Home fontSize="large" />,
      },
    ],
  },
  {
    id: 2,
    title: "Laporan",
    listItems: [
      {
        id: 1,
        title: "Laporan",
        url: "/reports",
        icon: <Campaign fontSize="large" />,
      },
    ],
  },
  {
    id: 3,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Maintenance",
        url: "/maintenance",
        icon: <TollOutlined fontSize="large" />,
      },
    ],
  },
  {
    id: 4,
    title: "Analytics",
    listItems: [
      {
        id: 1,
        title: "Analytics",
        path: "/analytics",
        icon: <Analytics fontSize="large" />,
      },
    ],
  },
  {
    id: 5,
    title: "History",
    listItems: [
      {
        id: 1,
        title: "History",
        path: "/history",
        icon: <History fontSize="large" />,
      },
    ],
  },
  {
    id: 6,
    title: "Assets",
    listItems: [
      {
        id: 1,
        path: "/assets/substations",
        title: "Gardu Induk",
        icon: <Dataset fontSize="large" />,
      },
      {
        id: 2,
        path: "/assets/feeders",
        title: "Penyulang",
        icon: <Dataset fontSize="large" />,
      },
      {
        id: 3,
        path: "/assets/keypoints",
        title: "Keypoint",
        icon: <Dataset fontSize="large" />,
      },
    ],
  },
  {
    id: 7,
    path: "/users",
    title: "Users",
    icon: <People fontSize="large" />,
    listItems: [
      {
        id: 1,
        path: "/users",
        title: "Users",
        icon: <People fontSize="large" />,
      },
    ],
  },
];
