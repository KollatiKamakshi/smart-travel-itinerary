'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ThemeSelector from './ThemeSelector';

export default function DestinationForm() {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(1);
  const [theme, setTheme] = useState('nature');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2, 9);
    const itinerary = { id, destination, days, theme, plan: [] };
    localStorage.setItem(id, JSON.stringify(itinerary));
    router.push(`/itinerary/edit/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className=" max-w-lg mx-auto space-y-4 bg-white p-6 rounded-lg shadow">
      <input
        type="text"
        placeholder="Destination (e.g., Paris)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
        required
      />
      <input
        type="number"
        placeholder="Number of days"
        value={days}
        min={1}
        onChange={(e) => setDays(Number(e.target.value))}
        className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
        required
      />
      <ThemeSelector selected={theme} setSelected={setTheme} />
      <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Generate Itinerary
      </button>
    </form>
  );
}
