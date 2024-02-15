import { useContext } from "react";
// import "./App.css";
import Navbar from "./sections/Navbar";
import { AllContext } from "./context/Context";
import { useTheme } from "@emotion/react";
import { Box } from "@chakra-ui/react";
import Home from "./sections/Home";
import About from "./sections/About";
import Education from "./sections/Education";

function App() {
  const { isDarkTheme } = useContext(AllContext);
  const theme = useTheme();
  const styles = {
    // bgColor: isDarkTheme ? theme.colors.dark : theme.colors.light,
    bgColor: "green",
  };
  return (
    <Box className="App " style={{ bgColor: '#000' }}>
      <Navbar />
      <Home/>
      <About/>
      <Education/>
    </Box>
  );
}

export default App;
