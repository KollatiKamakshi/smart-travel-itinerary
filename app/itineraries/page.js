'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ItinerariesPage() {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        loadItineraries();
    }, []);

    const loadItineraries = () => {
        const list = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            try {
                const val = JSON.parse(localStorage.getItem(key));
                if (val?.id && val?.destination) {
                    list.push(val);
                }
            } catch { }
        }

        setSaved(list.reverse());
    };

    const deleteItinerary = (id) => {
        localStorage.removeItem(id);
        setSaved(saved.filter((item) => item.id !== id));
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Saved Itineraries</h1>

            {saved.length === 0 ? (
                <p>No saved itineraries found.</p>
            ) : (
                <div className="space-y-4">
                    {saved.map((it) => (
                        <div
                            key={it.id}
                            className="bg-white p-4 rounded shadow flex items-center justify-between"
                        >
                            <div>
                                <div className="font-bold">{it.destination}</div>
                                <div className="text-sm text-gray-600">
                                    {it.days} days — Theme: {it.theme}
                                </div>
                            </div>

                            <div className="flex gap-4 items-center">
                                <Link
                                    href={`/itinerary/edit/${it.id}`}
                                    className="text-blue-600 underline"
                                >
                                    Open
                                </Link>

                                <button
                                    onClick={() => deleteItinerary(it.id)}
                                    className="text-red-600 underline"
                                >
                                    Delete
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
