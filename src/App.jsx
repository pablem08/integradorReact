import { AppBar, Toolbar } from "@mui/material";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { MenuProvider } from "./context/Context";

function App() {
  return (
    <>
      <MenuProvider>
        <AppBar>
          <Toolbar>
            <Navbar />
          </Toolbar>
        </AppBar>
      </MenuProvider>
    </>
  );
}

export default App;
