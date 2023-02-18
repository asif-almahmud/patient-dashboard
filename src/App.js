import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from "./layouts/dashboard-layout";
import Schedule from "./pages/schedule";
import Settings from "./pages/settings";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route >
//       <Route path="schedule" element={<Schedule />} />
//       <Route path="settings" element={<Settings />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="schedule" replace={true} />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
