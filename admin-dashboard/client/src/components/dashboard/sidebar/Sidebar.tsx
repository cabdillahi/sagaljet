import {
  FolderKanban,
  LayoutPanelLeft,
  MessageSquareText,
  User,
  Users,
  UsersRound,
  X,
  Zap,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }: any) {
  const menuItems = [
    {
      name: "Project",
      icon: FolderKanban,
      link: "/project",
    },
    {
      name: "Category",
      icon: LayoutPanelLeft,
      link: "/category",
    },
    { name: "Team", icon: Users, link: "/team" },
    {
      name: "Client",
      icon: UsersRound,
      link: "/client",
    },
    { name: "User", icon: User, link: "/users" },
    {
      name: "blog",
      icon: MessageSquareText,
      link: "/blog",
    },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <img
          src="/logo.jpg"
          width={150}
          height={40}
          className="rounded-full"
          alt="skillUp logo"
        />
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
          aria-label="Close sidebar"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2 space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded-lg group hover:bg-blue-50 hover:text-blue-600 relative w-full transition-colors ${
                    isActive ? "bg-blue-50 text-blue-600" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r transition-opacity ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                    <item.icon
                      className={`w-5 h-5 text-[#8B96AE] group-hover:text-blue-600 transition-colors ${
                        isActive ? "text-blue-600" : ""
                      }`}
                    />
                    <span className="group-hover:text-blue-600 text-[#8B96AE] transition-colors">
                      {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200 py-28">
        <div className="bg-blue-50 p-3 rounded-lg ">
          <div className="flex items-center space-x-2 text-blue-600 font-semibold mb-2">
            <Zap className="w-5 h-5" />
            <span>New Feature</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Now you can integrate email in Team Feature
          </p>
          <Link to={"/"}>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Back to web
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
