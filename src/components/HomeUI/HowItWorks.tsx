import React from 'react';
import { Search, Package, Pencil, Truck } from 'lucide-react';

interface Step {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Search className="w-5 h-5 text-black" />,
    title: "Choose Category",
    description: "Browse our wide range of categories to find the perfect gift.",
  },
  {
    icon: <Package className="w-5 h-5 text-black" />,
    title: "View Package",
    description: "Explore our curated gift packages and hampers.",
  },
  {
    icon: <Pencil className="w-5 h-5 text-black" />,
    title: "Customize (Optional)",
    description: "Add a personal touch with custom messages or additional items.",
  },
  {
    icon: <Truck className="w-5 h-5 text-black" />,
    title: "Delivery",
    description: "We’ll deliver your gift directly to the recipient’s doorstep.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="max-w-full mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-10">How It Works</h2>
      <div className="flex flex-col space-y-6 relative">
        {/* Vertical Line */}
        <div className="absolute left-[10px] top-4 bottom-0 w-px bg-gray-200" />
        
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4 relative z-10">
            <div className="bg-white p-1 z-10">
              {step.icon}
            </div>
            <div>
              <h3 className="text-sm font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
