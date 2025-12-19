import { User, Folder, Mail, Download } from "lucide-react";

function Sidebar({ active, setActive }) {
  const menu = [
    { id: "about", label: "About Me", icon: <User size={18} /> },
    { id: "projects", label: "Projects", icon: <Folder size={18} /> },
    { id: "download", label: "Download", icon: <Download size={18} /> },
    { id: "contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <aside className="bg-gradient-to-b from-sky-400 to-sky-600 text-white w-64 fixed h-full flex flex-col items-center py-8 shadow-lg">
      <img
        src="src\assets\WhatsApp Image 2025-11-11 at 13.04.29_6fd6580b.jpg"
        className="w-40 h-40 rounded-full border-4 border-white object-cover shadow mb-3"
        alt="Putri Mifta"
      />
      <h1 className="text-xl font-bold mb-6">Putri Mifta</h1>

      <nav className="flex flex-col gap-2 w-full px-4">
        {menu.map(item => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center gap-2 py-2 px-4 rounded text-left hover:bg-sky-500
              ${active === item.id ? "bg-white/30" : ""}`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
