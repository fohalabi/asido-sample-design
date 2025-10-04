import React from 'react';

const TimelineHeader: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto mb-16" id='TimelineHeader'>
      <h2
        className="
          m-6 p-4
          md:mt-6 md:p-0 md:pl-12 md:border-0
          text-based md:text-2xl font-bold text-gray-900
          text-center
          leading-relaxed
        "
      >
        Since inception in 2019, Asido Foundation has led bold advocacy for mental
        health reforms. These range from public awareness campaigns to the passing
        of the 2021 Mental Health Act.
      </h2>
    </div>
  );
};


export default TimelineHeader;