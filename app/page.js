'use client';

import DestinationForm from '../components/DestinationForm';

export default function HomePage() {
    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6">Smart Travel</h1>

            <section className="mb-8">
                <DestinationForm />
            </section>
        </div>
    );
}
