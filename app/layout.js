import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Smart Travel Itinerary Generator',
  description: 'Generate day-wise travel plans with ease!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="bg-gradient-to-b from-teal-50 to-green-100 flex items-center justify-center text-center flex-1 overflow-y-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
