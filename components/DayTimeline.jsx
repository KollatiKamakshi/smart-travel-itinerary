'use client';
import React from 'react';

export default function DayTimeline({ plan }) {
  if (!plan || plan.length === 0) {
    return <p className="text-gray-500 p-4">No activities planned yet.</p>;
  }

  return (
    <div className="relative border-l-2 border-blue-500 ml-4 pl-6">
      {plan.map((item) => (
        <div key={item.day} className="mb-8 relative">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full shadow"></div>
          <h3 className="font-bold text-lg">{`Day ${item.day}: ${item.place}`}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
