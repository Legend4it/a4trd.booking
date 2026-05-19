

export default function Home() {

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          A4trd Booking
        </h1>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
        <p className="text-foreground text-lg md:text-xl">
          A smarter way to manage bookings. Launching soon.
        </p>

        <div className="border-t border-white/10 pt-6 mt-10">
          <p className="text-foreground text-sm">
            © {new Date().getFullYear()} Bookly. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}