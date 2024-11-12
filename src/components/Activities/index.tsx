import React from 'react';
import ActivityCard from './ActivityCard';
import { activities } from './data';

const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="block text-gray-800">ACTIVITIES</span>
          <span className="block text-sm text-gray-600 mt-2">地域と共に創る、亀川の多彩な挑戦</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;