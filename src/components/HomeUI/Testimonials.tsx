import React from "react";

type Testimonial = {
  name: string;
  timeAgo: string;
  rating: number;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sophia Carter",
    timeAgo: "2 months ago",
    rating: 5,
    message:
      "I ordered a birthday hamper for my best friend, and she absolutely loved it! The presentation was beautiful, and the items were of high quality. Will definitely be ordering again!",
  },
  {
    name: "Ethan Bennett",
    timeAgo: "3 months ago",
    rating: 4,
    message:
      "The housewarming hamper was a hit! It had everything the new homeowners needed, and they were so grateful. The delivery was prompt and hassle-free.",
  },
  {
    name: "Olivia Hayes",
    timeAgo: "4 months ago",
    rating: 5,
    message:
      "I sent a 'Thinking of You' hamper to my sister, and it brought a huge smile to her face. The selection of items was thoughtful and perfect for the occasion. Highly recommend!",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center space-x-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i}>{i < rating ? "★" : "☆"}</span>
    ))}
  </div>
);

const TestimonialSection: React.FC = () => {
  return (
    <section className="max-w-full px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-10">Testimonials</h2>
      <div className="space-y-8">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="space-y-2">
            <div className="font-medium">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.timeAgo}</div>
            <StarRating rating={testimonial.rating} />
            <p className="text-sm text-gray-700">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
