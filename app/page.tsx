import React from 'react';
import Navbar from '@/components/navbar';

interface RootPageProps {}

const RootPage: React.FC<RootPageProps> = () => {
  return (
    <div>
      <Navbar />
      <h1>Root Page</h1>
    </div>
  );
};

export default RootPage;
