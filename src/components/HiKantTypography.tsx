import React from 'react';

interface HiKantTextProps {
  className?: string;
}

export const HiKantText: React.FC<HiKantTextProps> = ({ className = '' }) => {
  return <span className={className}>hiKant</span>;
};
