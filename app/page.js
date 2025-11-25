'use client';

import Link from 'next/link';

export default function OfflinePage() {
    // load last saved itinerary
    let last = null;

    if (typeof window !== 'undefined') {
        try {
            last = JSON.parse(localStorage.getItem('last_itinerary'));
        } catch { }
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-red-600 mb-4">You are offline!</h1>

            <p className="mb-4">Your last saved itinerary is still available:</p>

            {last ? (
                <div className="bg-white p-4 shadow rounded mb-4">
                    <h2 className="font-bold text-xl">{last.destination}</h2>
                    <p>{last.days} days, Theme: {last.theme}</p>

                    <Link
                        href={`/itinerary/edit/${last.id}`}
                        className="underline text-blue-600"
                    >
                        Open Itinerary
                    </Link>
                </div>
            ) : (
                <p>No saved itineraries found.</p>
            )}

            <Link href="/" className="inline-block mt-4 text-blue-600 underline">
                Go Back Home
            </Link>
        </div>
    );
}
