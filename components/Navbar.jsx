export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-8 flex h-auto justify-between items-center">
      <h1 className="font-bold text-xl">Smart Travel</h1>
      <nav className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/itineraries" className="hover:underline">Itineraries</a>
        <a href="/offline" className="hover:underline">Offline</a>
      </nav>
    </header>
  );
}
