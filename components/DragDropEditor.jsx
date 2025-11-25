'use client';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useState, useEffect } from 'react';
import ItineraryCard from './ItineraryCard';

export default function DragDropEditor({ itineraryId }) {
  // Initialize items with stable unique ids
  const [items, setItems] = useState(() => {
    const stored = JSON.parse(localStorage.getItem(itineraryId) || '{}');
    if (stored.plan && stored.plan.length > 0) {
      // Make sure each item has a unique id
      return stored.plan.map((item, idx) => ({
        ...item,
        id: item.id || `${itineraryId}-day-${idx + 1}`,
      }));
    }
    return [];
  });

  // Generate plan if missing
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(itineraryId) || '{}');
    if (!stored.plan || stored.plan.length === 0) {
      const generated = generatePlan(stored);
      // Ensure each item has a unique id
      const planWithIds = generated.map((item, idx) => ({
        ...item,
        id: item.id || `${itineraryId}-day-${idx + 1}`,
      }));
      stored.plan = planWithIds;
      localStorage.setItem(itineraryId, JSON.stringify(stored));
      setItems(planWithIds);
    }
  }, [itineraryId]);

  const onDragEnd = (result) => {
  if (!result.destination) return;

  const reordered = Array.from(items);
  const [removed] = reordered.splice(result.source.index, 1);
  reordered.splice(result.destination.index, 0, removed);

  const updatedDays = reordered.map((item, index) => ({
    ...item,
    day: index + 1, 
  }));

  setItems(updatedDays);

  const stored = JSON.parse(localStorage.getItem(itineraryId));
  stored.plan = updatedDays;
  localStorage.setItem(itineraryId, JSON.stringify(stored));
};


  if (items.length === 0) return <p className="p-4">Loading itinerary...</p>;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="plan" key={itineraryId}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-6 p-4 bg-gray-50 rounded min-h-[100px]"
          >
            {items.map((item, index) => {
              // Safety check for draggableId
              if (!item.id) return null;

              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`transition-shadow ${
                        snapshot.isDragging ? 'shadow-xl bg-blue-50' : ''
                      }`}
                    >
                      <div className="relative border-l-2 border-blue-500 ml-4 pl-6">
                        <div className="absolute -left-3 top-2 w-6 h-6 bg-blue-500 rounded-full shadow" />
                        <ItineraryCard
                          day={item.day}
                          place={item.place}
                          description={item.description}
                          className="block w-full"
                        />
                      </div>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

// Generate a default plan if missing
function generatePlan(itinerary) {
  const { days = 3, destination = 'Unknown', theme = 'nature' } = itinerary;

  const activities = {
    nature: ['National Park', 'Lake', 'Sunrise Point', 'Hiking Trail'],
    food: ['Local Market', 'Famous Café', 'Food Tour', 'Street Food Lane'],
    adventure: ['Mountain Trek', 'Kayaking', 'Zipline', 'Safari'],
  }[theme || 'nature'];

  const plan = [];
  for (let i = 1; i <= days; i++) {
    plan.push({
      id: `${destination}-${theme}-${i}`, // always ensure id
      day: i,
      place: `${activities[(i - 1) % activities.length]} in ${destination}`,
      description: `Enjoy ${activities[(i - 1) % activities.length]} during day ${i}.`,
    });
  }
  return plan;
}
