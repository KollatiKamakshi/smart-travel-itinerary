'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import DragDropEditor from 'components/DragDropEditor';

export default function EditItineraryPage() {
  const { id } = useParams();
  const [itinerary, setItinerary] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(id) || '{}');
    if (!stored.destination) {
      setItinerary(null);
    } else {
      setItinerary(stored);
    }
  }, [id]);

  if (!itinerary) {
    return <p className="p-4">No itinerary found. Please generate one first!</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Itinerary for {itinerary.destination}</h1>
      <DragDropEditor itineraryId={id} />
    </div>
  );
}
