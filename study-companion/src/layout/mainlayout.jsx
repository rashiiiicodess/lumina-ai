import { useState } from "react";
import Sidebar from "../components/sidebar.jsx";

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex">
      
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

    
    </div>
  );
};

export default MainLayout;