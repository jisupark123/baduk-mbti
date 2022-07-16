import React from 'react';

interface Props {
  children: React.ReactNode;
}

const CenterFixed: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {children}
    </div>
  );
};

export default CenterFixed;
