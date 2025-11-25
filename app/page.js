'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function OfflinePage() {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        const items = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            try {
                const val = JSON.parse(localStorage.getItem(key));
                if (val?.destination) items.push(val);
            } catch { }
        }
        setSaved(items);
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">You are offline!</h1>
            <p className="mb-4">Your last saved itinerary is still available in your browser.</p>

            {saved.length === 0 ? (
                <p>No saved itineraries found.</p>
            ) : (
                <div className="space-y-4">
                    {saved.map((item) => (
                        <Link
                            key={item.id}
                            href={`/itinerary/edit/${item.id}`}
                            className="block bg-white p-4 rounded shadow hover:bg-blue-50 transition"
                        >
                            {item.destination} ({item.days} days) - {item.theme}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
