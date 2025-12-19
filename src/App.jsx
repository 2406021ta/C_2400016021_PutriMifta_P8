import { useState } from "react";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Download from "./sections/Download";


function App() {
  const [active, setActive] = useState("about");

  return (
    <div className="flex bg-sky-50 min-h-screen">
      <Sidebar active={active} setActive={setActive} />

      <main className="ml-64 flex-1 p-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {active === "about" && <About />}
          {active === "projects" && <Projects />}
          {active === "contact" && <Contact />}
          {active === "download" && <Download />}
        </div>
      </main>
    </div>
  );
}

export default App;
