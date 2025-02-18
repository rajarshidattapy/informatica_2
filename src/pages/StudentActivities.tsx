import React from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function StudentActivities() {
  const activities = [
    {
      title: "Hackathon",
      description: "24-hour coding competition",
      image: "https://source.unsplash.com/800x400/?hackathon",
    },
    {
      title: "Tech Club",
      description: "Weekly technology meetups and projects",
      image: "https://source.unsplash.com/800x400/?tech-club",
    },
    {
      title: "Cultural Events",
      description: "Department cultural celebrations",
      image: "https://source.unsplash.com/800x400/?cultural-event",
    },
    {
      title: "Technical Workshop Series",
      description:
        "Three-day intensive workshop on AI, Web Development, UI/UX, Cybersecurity and Cloud Computing conducted by DevSoc club members.",
      image: "https://i.imgur.com/NGi9z0C.png",
    },
    {
      title: "Hackathon Winners",
      description:
        "Our students secured top positions in amBITion hackathon, showcasing innovative solutions to real-world problems.",
      image: "https://i.imgur.com/NGi9z0C.png",
    },
    // Add more items as needed...
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Student Activities</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-video">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-red-600">{activity.title}</h3>
                <p className="text-gray-300">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentActivities;
