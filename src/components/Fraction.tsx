import React from 'react';

interface FractionProps {
  numerator: React.ReactNode;
  denominator: React.ReactNode;
  className?: string;
}

export const Fraction: React.FC<FractionProps> = ({ numerator, denominator, className = "" }) => {
  return (
    <span className={`inline-flex flex-col items-center align-middle leading-none mx-0.5 ${className}`}>
      <span className="border-b border-current pb-0.5 mb-0.5">{numerator}</span>
      <span>{denominator}</span>
    </span>
  );
};
