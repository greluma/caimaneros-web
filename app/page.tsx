import React from 'react';
import Navbar from '@/components/Navbar';

interface RootPageProps {}

const RootPage: React.FC<RootPageProps> = () => {
  return (
    <div>
      <Navbar />
      {/*       <h1 className="test c1">Hello world</h1>
      <h2 className="test c3">Hello world</h2>
      <h3 className="test c2">Hello world</h3>
      <h4 className="test c5">Hello world</h4>
      <h5 className="test c4">Hello world</h5>
      <h6 className="test c4">Hello world</h6>
      <p className="test c4">Hello world</p> */}
      <div style={{ display: 'grid', textAlign: 'center', gap: '2rem' }}>
        <h2>Hola Puro!!! . Nuevo proyecto running</h2>
        <h3>Tu chama saludando desde España</h3>
        <h1>Love U!!!</h1>
      </div>
    </div>
  );
};

export default RootPage;
