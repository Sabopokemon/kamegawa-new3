import React from 'react';
import { Activity } from './types';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <div
        className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${activity.image})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute bottom-0 p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{activity.title}</h3>
        <p className="text-sm text-gray-200">{activity.titleEn}</p>
      </div>
    </div>
  );
};

export default ActivityCard;