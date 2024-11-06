// SliderContainer.jsx
import React, { useState, useEffect } from 'react';
import DesktopSlider from './DesktopSlider';
import MobileSlider from './MobileSlider';

const SliderContainer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMobile ? <MobileSlider /> : <DesktopSlider />}
    </div>
  );
};

export default SliderContainer;
