
import React from 'react';

interface SectionWrapperProps {
  id: string;
  subtitle: string;
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, subtitle, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-24 bg-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <p className="font-semibold text-accent mb-2 uppercase">{subtitle}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text">
                {title}
            </h2>
            <div className="mt-4 w-20 h-1 bg-accent mx-auto"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
