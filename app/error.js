'use client';

export default function Error({ error, reset }) {
    return (
        <div className="text-center p-10">
            <h1 className="text-3xl font-bold text-red-600">Something went wrong!</h1>

            <p className="mt-4">{error?.message ?? "Unexpected error occurred."}</p>

            <button
                onClick={() => reset()}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
                Try Again
            </button>
        </div>
    );
}
