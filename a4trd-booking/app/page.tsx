

export default function Home() {

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          A4trd Booking
        </h1>

        <p className="text-white/70 text-lg md:text-xl">
          A smarter way to manage bookings. Launching soon.
        </p>

        <div className="border-t border-white/10 pt-6 mt-10">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Bookly. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}