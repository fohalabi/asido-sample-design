import React from 'react';

import ProgressLine from './ProgressLine';
import TimelineItem from './TimelineItem';
import { timelineData } from './data/timelineData';

const Timeline = () => {
  const scrollProgress = 0;
  const totalItems = timelineData.length;
  const item = timelineData[0];
  const index = 0;
  return (
    <div>
      <ProgressLine scrollProgress={scrollProgress} />
      <TimelineItem
        item={item}
        index={index}
        totalItems={totalItems}
        scrollProgress={scrollProgress}
      />
    </div>
  );
}

export default Timeline
