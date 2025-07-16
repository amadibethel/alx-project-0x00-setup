import React from "react";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Airbnb Clone</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <Card />
        <Card />
        <Card />
        {/* Add more cards if you like */}
      </div>
    </main>
  );
};

export default Landing;
