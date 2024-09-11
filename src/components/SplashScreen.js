import React, { useEffect } from 'react';

function SplashScreen({ setSplashScreenVisible }) {
  useEffect(() => {
    // Simulate a delay of 2 seconds (2000 ms)
    const timer = setTimeout(() => {
      setSplashScreenVisible(false); // Hide splash screen after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, [setSplashScreenVisible]);

  return (
    <div className="splash-screen">
      <img src="/path/to/your/logo.png" alt="Logo" className="splash-logo" />
    </div>
  );
}

export default SplashScreen;
