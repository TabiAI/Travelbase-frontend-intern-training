export default function Home() {
    return (
        <div className="relative min-h-screen flex items-center justify-center px-6">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#675DFF]/10 via-white to-[#675DFF]/5" />

            {/* Content */}
            <div className="relative max-w-3xl text-center space-y-8">

                {/* Badge */}
                <div className="inline-block px-4 py-1 rounded-full border border-[#675DFF]/30 text-[#675DFF] text-sm font-medium">
                    Travelbase Engineering
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                    Build systems,
                    <br />
                    not just interfaces.
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed">
                    Frontend engineering at Travelbase focuses on building reliable,
                    scalable interfaces that integrate seamlessly with backend systems.
                    This training program emphasizes correctness, performance, and real-world system behavior.
                </p>

                {/* CTA */}
                <div className="flex items-center justify-center gap-4">
                    <button className="px-6 py-3 bg-[#675DFF] text-white rounded-lg font-medium hover:opacity-90 transition">
                        Get Started
                    </button>

                    <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition">
                        View Docs
                    </button>
                </div>

            </div>
        </div>
    );
}