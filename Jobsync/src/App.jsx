import { ColorModeContext, useMode } from "./theme";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
// import Topbar from './scenes/global/Topbar'
import Home from "./scenes/Home";
import Contact from "./scenes/Contact";
import Error from "./scenes/404";
import Pricing from "./scenes/pricing";
import Signup from "./scenes/Auth";
import Jobsync from "./scenes/resume";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <main className="content">
            {/* <Topbar/> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/auth" element={<Signup />} />
              <Route path="/resume-analysis" element={<Jobsync/>} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
