"use client";

import { useState, useEffect } from 'react';
import { DraggableEvent, DraggableData } from 'react-draggable';
import Sidebar from './components/sidebar'; // Ensure the path is correct and the file exists
import Header from './components/Header'; // Import the Header component
import styles from './page.module.css'; // Assicurati di creare questo file CSS
import Draggable from 'react-draggable';

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLiveActive, setIsLiveActive] = useState(false);
  const [isIframeVisible, setIsIframeVisible] = useState(true);

  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        const response = await fetch('https://kick.com/api/v1/channels/classybeef');
        const data = await response.json();
        setIsLiveActive(data.livestream !== null);
      } catch (error) {
        console.error('Errore nel controllo dello stato della live:', error);
        setIsLiveActive(false);
      }
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
  };

  const closeIframe = () => {
    setIsIframeVisible(false);
  };

  return (
    <div className="min-h-screen bg-[#0F212E] flex">
      <Sidebar /> {/* Add the Sidebar component */}
      <div className="flex flex-col flex-1"> {/* Flex column for Header and main content */}
        <Header /> {/* Add the Header component */}
        <div className="flex-1 p-4 bg-[#1A2C38] relative"> {/* Updated background color here */}
          {isLiveActive && isIframeVisible && (
            <Draggable
              position={position}
              onDrag={handleDrag}
              handle={`.${styles.moveIframeButton}`}
            >
              <div className={styles.iframeWrapper}>
                <button 
                  className={styles.moveIframeButton}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9AA9B8" width="16" height="16">
                    <path d="M10 9h4V6h3l-5-5-5 5v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"/>
                  </svg>
                </button>
                <button 
                  onClick={closeIframe} 
                  className={styles.closeIframeButton}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#9AA9B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className={styles.iframeContainer}>
                  <iframe 
                    src="https://player.kick.com/classybeef?autoplay=true"
                    height="720" 
                    width="1280"
                    frameBorder="0" 
                    scrolling="no" 
                    allowFullScreen={true}
                    className={styles.iframe}
                    style={{ borderRadius: '0px' }}
                  /> 
                </div>
              </div>
            </Draggable>
          )}
        </div>
      </div>
    </div>
  );
}
