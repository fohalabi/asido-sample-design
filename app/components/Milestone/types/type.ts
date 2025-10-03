
// Represents a single milestone with text and image

export interface Milestone {
  title: string;
  text: string;
  image?: string; 
  imageAlt?: string;
}

 // Represents a single year entry in the timeline
 // Contains the year and associated milestones

export interface TimelineDataItem {
  year: string;
  milestones: Milestone[]; 
}


export interface ProgressLineProps {
  scrollProgress: number;
}


export interface TimelineItemProps {
  item: TimelineDataItem;
  index: number;
  totalItems: number;
  scrollProgress: number;
}

export interface TimelineProps {
  data: TimelineDataItem[];
}