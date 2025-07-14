import React from "react";

const PageNotFound = () => (
    <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{
            backgroundImage:
                "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
        }}
    >
        <div className="bg-black bg-opacity-30 w-full h-full absolute top-0 left-0 z-0"></div>
        <div className="relative z-10 flex flex-col items-center">
            <div className="text-white text-center mt-20">
                <div className="text-sm mb-2 font-semibold opacity-80">404</div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Page not found</h1>
                <p className="mb-8 text-lg opacity-90">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <a
                    href="/"
                    className="text-white font-semibold underline hover:text-gray-200 transition"
                >
                    &larr; Back to home
                </a>
            </div>
        </div>
    </div>
);

export default PageNotFound;