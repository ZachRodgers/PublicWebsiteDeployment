import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';
import './Sidebar.css';

interface SidebarProps {
  onToggle?: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  const location = useLocation();
  const { activeSection, scrollToSection } = useScrollToSection();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const links = [
    { path: '/', label: 'Home', section: 'home' },
    { path: '/#mobile-app', label: 'App', section: 'mobile-app' },
    { path: '/#operator-portal', label: 'Operator', section: 'operator-portal' },
    { path: '/legal/app/terms-of-service', label: 'Terms', section: null },
    { path: '/legal/app/privacy-policy', label: 'Privacy', section: null },
    { path: '/contact', label: 'Contact', section: null }
  ];

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, link: typeof links[0]) => {
    if (link.section && location.pathname === '/') {
      e.preventDefault();
      scrollToSection(link.section);
    }

    // Close sidebar on mobile after clicking a link
    if (isMobile) {
      setIsCollapsed(true);
    }
  };

  const isActive = (link: typeof links[0]) => {
    if (link.section && location.pathname === '/') {
      return activeSection === link.section;
    }
    return location.pathname === link.path;
  };

  const toggleSidebar = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onToggle?.(newCollapsed);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && !isCollapsed && (
        <div className="sidebar-overlay" onClick={() => setIsCollapsed(true)} />
      )}

      {/* Fixed header that always stays visible */}
      <div className="sidebar-fixed-header">
        <img src="/assets/Logo_Parallel.svg" alt="Parallel Logo" className="sidebar-logo" />
        <button 
          className="sidebar-toggle"
          onClick={toggleSidebar}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <img 
            src={isCollapsed ? "/assets/SidebarOpened.svg" : "/assets/SidebarClosed.svg"} 
            alt={isCollapsed ? "Expand" : "Collapse"}
            className="sidebar-toggle-icon"
          />
        </button>
      </div>

      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobile ? 'mobile' : ''}`}>
        <nav className="sidebar-nav">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => handleLinkClick(e, link)}
              className={`sidebar-link ${isActive(link) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
