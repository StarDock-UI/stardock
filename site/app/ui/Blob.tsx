import React from 'react';

type BlobProps = {
  top?: string;
  left?: string;
  right?: string;
  color?: string;
  opacity?: number;
  size?: string;
};

const Blob: React.FC<BlobProps> = ({
  top = '100px',
  left,
  right,
  color = '#7f52c7',
  opacity = 0.4,
  size = '400px',
}) => {
  const style: React.CSSProperties = {
    height: size,
    width: size,
    borderRadius: '50%',
    backgroundColor: color,
    position: 'absolute',
    top,
    zIndex: -1,
    opacity,
    filter: 'blur(80px)',
    ...(left !== undefined ? { left } : {}),
    ...(right !== undefined ? { right } : {}),
  };

  return <div style={style} />;
};

export default Blob;
