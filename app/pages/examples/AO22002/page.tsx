import React from 'react';



const GridComponent = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridTemplateRows: 'repeat(5,1fr)',
      width: '100%',
      height: '100vh'
    }}>
        <div style={{ backgroundColor: 'red', gridColumn: '1 / 3', gridRow: '1 / 5' }}>2</div>
        <div style={{ backgroundColor: 'green', gridColumn: '3 / 5', gridRow: '1 / 3' }}>1</div>
        <div style={{ backgroundColor: 'blue', gridColumn: '3 / 5', gridRow: '3 / 5' }}>2</div>
      </div>
  );
};

export default GridComponent;

