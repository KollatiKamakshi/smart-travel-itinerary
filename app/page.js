'use client';

import DestinationForm from '../components/DestinationForm';

export default function Home() {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Smart Travel Itinerary Generator</h1>
            <DestinationForm />
        </div>
    );
}
