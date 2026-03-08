import { NavLink } from "react-router-dom";
import { LayoutDashboard, Map, FileText } from "lucide-react";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/map", label: "Map", icon: Map },
  { to: "/reports", label: "Reports", icon: FileText },
];

const NavBar = () => {
  return (
    <nav className="flex items-center gap-1 bg-card border border-border rounded-lg p-1 mb-4">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "bg-primary/15 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`
          }
        >
          <link.icon className="w-4 h-4" />
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
