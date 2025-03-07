
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  center = false,
  light = false
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-white/80' : 'text-gray-600'} max-w-3xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
