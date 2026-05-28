import Image from 'next/image';
import * as React from 'react';

import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '100px',
      }}
    >
      <div>
        <Image
          src="/caimanero-logo.png"
          alt="logo caimanero"
          width={60}
          height={50}
        />
      </div>
      <div>
        <h2>Bar & Tapas</h2>
      </div>
      <div>
        <button>
          <DensityMediumRoundedIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
