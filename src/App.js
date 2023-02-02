import "./App.css";

//import { purple, green } from "@mui/material/colors";
import Prueba from "./components/Navbar";

// const theme = createTheme({
//   palette: {
//     primary: { main: purple[500] },
//     secondary: { main: green[500] },
//   },
// });

function App() {
  // const classes = useStyles();

  return (
    <Prueba />
    // <ThemeProvider theme={theme}>
    //   <div className={classes.root}>
    //     <Navbar />
    //     <About title="About me" id="about" dark={true} />
    //     <Skills title="My Technologies" id="skills" dark={false} />
    //     <MyWork title="My work" id="myWork" dark={true} />
    //     <Contact title="Contact" id="contact" dark={false} />
    //   </div>
    // </ThemeProvider>
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {},
// }));

export default App;
