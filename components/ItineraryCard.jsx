'use client';

export default function ItineraryCard({ day, place, description }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h3 className="font-bold">Day {day}: {place}</h3>
      <p>{description}</p>
    </div>
  );
}
