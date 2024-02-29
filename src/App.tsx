import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ResponsiveDrawer from "./components/Drawer";
import AlertPage from "./AlertsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ResponsiveDrawer />} >
            <Route path="/" element={<AlertPage/> } />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
