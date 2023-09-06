import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Dashboard from "./components/Dashboard/Dashboard";
import PreSetup from "./components/PreSetup/PreSetup";
import Exercises from "./components/Exercises/Exercises"
import Valutation from "./components/Valutation/Valutation";
import Setting from "./components/Setting/Setting";
import Tecnic from "./components/Tecnic/Tecnic";
import Calendar from "./components/Calendar/Calendar";
import FAQ from "./components/FAQ/FAQ";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pre_setup" element={<PreSetup />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/valutation" element={<Valutation />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/tecnic" element={<Tecnic />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
