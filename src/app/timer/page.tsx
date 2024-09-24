'use client'

import React from 'react';
import Timer from '../components/timer/Timer';

const TimerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0F212E] flex items-center justify-center">
      <Timer />
    </div>
  );
};

export default TimerPage;
