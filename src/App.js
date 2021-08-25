import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/index";
/* import Resume from "./components/Resume"; */
import Portfolio from "./components/Portfolio";
import CssBaseline from "@material-ui/core/CssBaseline";
import imageUrl from "./coffee-apple.jpg";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      <>
        <CssBaseline />
        <Route exact path="/" component={Home} />
        {/* <Route path="/resume" component={Resume} /> */}
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </>
    </div>
  );
}

export default App;
