"use client";

import React, { useState } from 'react';
import { IconButton } from '@mui/material'; // Import MUI IconButton
import './sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle the sidebar open/close state
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`} style={{ transition: 'all 0.3s ease' }}>
            <div className="close-button-container">
                <IconButton 
                    className="close-button"
                    onClick={toggleSidebar}
                >
                    <div className={`icon-wrapper ${isOpen ? 'rotated' : ''}`}>
                        <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="transition-transform ease-in-out duration-300"
                        >
                            <path 
                                d="M6.375 6.625V17.875C6.375 18.5078 5.84766 19 5.25 19C4.61719 19 4.125 18.5078 4.125 17.875V6.625C4.125 6.02734 4.61719 5.5 5.25 5.5C5.84766 5.5 6.375 6.02734 6.375 6.625ZM19.5234 13.0586L15.0234 17.5586C14.6016 18.0156 13.8633 18.0156 13.4414 17.5586C12.9844 17.1367 12.9844 16.3984 13.4414 15.9766L16.0078 13.375H9.75C9.11719 13.375 8.625 12.8828 8.625 12.25C8.625 11.6523 9.11719 11.125 9.75 11.125H16.0078L13.4414 8.55859C12.9844 8.13672 12.9844 7.39844 13.4414 6.97656C13.8633 6.51953 14.6016 6.51953 15.0234 6.97656L19.5234 11.4766C19.9805 11.8984 19.9805 12.6367 19.5234 13.0586Z" 
                                fill="#9AA9B8"
                            />
                        </svg>
                    </div>
                </IconButton>
            </div>
            {/* Placeholder for future content */}
            <div className="sidebar-content">
                {/* Add your content here */}
            </div>
        </div>
    );
};

export default Sidebar;