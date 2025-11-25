'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-8 flex h-auto justify-between items-center">
      <h1 className="font-bold text-xl">Smart Travel</h1>
      <nav className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/itineraries" className="hover:underline">Itineraries</Link>
        <Link href="/offline" className="hover:underline">Offline</Link>
      </nav>
    </header>
  );
}
