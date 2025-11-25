export default function OfflinePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">You are offline!</h1>
      <p className="text-lg text-gray-700">Your last saved itinerary is still available in your browser.</p>
    </div>
  );
}
