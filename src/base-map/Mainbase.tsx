import React, { useState, useEffect } from 'react';
import NetworkGraph from './componentbase/NetworkGraph';
import DeviceMovements from './componentbase/DeviceMovements';
import AppHeader from './componentbase/AppHeader';
import sampleData from './componentbase/data';
import NetworkBandwidthDashboard from './componentbase/BandwidthCHarting';
import Footer from '@/components/Footer';

// Define the proper data type
interface TopologyData {
  nodes: Array<{
    id: string;
    group?: number;
  }>;
  links: Array<{
    source: string;
    target: string;
    localPort?: string;
    remotePort?: string;
  }>;
}

const Mainbase: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerWidth > 768 ? 600 : 400);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      
      if (screenWidth >= 1200) {
        setWidth(800);
        setHeight(600);
      } else if (screenWidth > 768) {
        setWidth(800);
        setHeight(600);
      } else {
        setWidth(screenWidth - 40);
        setHeight(400);
      }
    };

    handleResize(); // Initialize with correct size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <AppHeader />

      <div className="flex-1 p-4 md:p-8 flex justify-center items-center overflow-scroll">
        <div className="w-full max-w-5xl flex justify-center items-center  "
         style={{
          boxShadow: 'rgba(0, 128, 0, 0.6) 0px 10px 36px 0px, rgba(0, 128, 0, 0.06) 0px 0px 0px 1px'

        }}> {/* Slightly larger container */}
          <NetworkGraph width={width} height={height} data={sampleData as TopologyData} />
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Mainbase;
