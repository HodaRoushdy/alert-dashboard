import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ResponsiveDrawer from "./components/Drawer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResponsiveDrawer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
