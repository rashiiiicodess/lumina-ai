import {NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  CheckSquare,
  CalendarClock,
  Sparkles,
  Timer,
  FileText,
  ClipboardList,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import StudyCharacter from './character/Lumina.jsx';
const NAV_ITEMS = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/Subjects', label: 'Subjects', icon: BookOpen },
  { path: '/Tasks', label: 'Tasks', icon: CheckSquare },
  { path: '/RevisionPlanner', label: 'Revision Planner', icon: CalendarClock },
  { path: '/StudyPlans', label: 'Study Plans', icon: ClipboardList },
  { path: '/Notes', label: 'Notes', icon: FileText },
  { path: '/FocusMode', label: 'Focus Mode', icon: Timer },
  { path: '/AITools', label: 'AI Tools', icon: Sparkles },
];

const Sidebar = ({ collapsed, setCollapsed }) => {
       
const location = useLocation();
  return (
    <motion.aside
      animate={{ width: collapsed ? 64 : 240 }}
      transition={{ duration: 0.25 }}
      className="h-screen bg-sidebar border-r border-sidebar-border fixed left-0 top-0 z-40 flex flex-col"
    >
      {/* Logo */}
      <div className="p-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-sidebar-primary flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-sidebar-primary-foreground" />
        </div>

        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
            >
              <h1 className="text-sm font-bold text-sidebar-accent-foreground">
                Lumina
              </h1>
              <p className="text-[10px] text-sidebar-foreground uppercase tracking-wider">
                AI Companion
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <motion.div key={item.path} whileHover={{ scale: 1.02 }}>
              <NavLink
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all relative group
                  ${
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
                  }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "text-sidebar-primary" : ""
                  }`}
                />

                {/* Label */}
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-sm font-medium"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Active Dot */}
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute right-2 w-1.5 h-1.5 rounded-full bg-sidebar-primary"
                  />
                )}

                {/* Tooltip (when collapsed) */}
                {collapsed && (
                  <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </NavLink>
            </motion.div>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-3 border-t border-sidebar-border">
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3 p-2 rounded-lg bg-sidebar-accent/60 mb-3"
            >
              <StudyCharacter mood="happy" size="sm" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-sidebar-accent-foreground">
                  Study Buddy
                </p>
                <p className="text-[10px] text-sidebar-foreground truncate">
                  Let’s crush your goals 💪
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition"
        >
         {collapsed ? <ChevronRight /> : <ChevronLeft />}

          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs"
              >
                Collapse
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.aside>
  );
 
};
export default Sidebar;