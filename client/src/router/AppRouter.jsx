import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import DashboardPage from "../Pages/DashboardPage";


const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </>
  )
);

export default AppRouter;
