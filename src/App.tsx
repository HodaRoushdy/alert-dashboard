import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlertPage from "./AlertsPage";
import "./App.css";
import ResponsiveDrawer from "./components/Drawer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ResponsiveDrawer />}>
            <Route path="/" element={<AlertPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
