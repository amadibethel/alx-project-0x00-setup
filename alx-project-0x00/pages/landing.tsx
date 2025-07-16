import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Airbnb Clone</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <Button title="Small Rounded-sm" styles="text-sm rounded-sm bg-blue-500" />
        <Button title="Medium Rounded-md" styles="text-base rounded-md bg-green-500" />
        <Button title="Large Rounded-full" styles="text-lg rounded-full bg-purple-500 px-6 py-3" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Landing;
