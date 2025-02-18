import React from 'react';
<<<<<<< HEAD
import Navbar from '../components/Navbar';
import Row from '../components/Row';
=======
>>>>>>> 66fa78a (Art gallery -> More)

function StudentActivities() {
  const activities = [
    {
<<<<<<< HEAD
      title: "Hackathon",
      description: "24-hour coding competition",
      image: "https://source.unsplash.com/800x400/?hackathon"
    },
    {
      title: "Tech Club",
      description: "Weekly technology meetups and projects",
      image: "https://source.unsplash.com/800x400/?tech-club"
    },
    {
      title: "Cultural Events",
      description: "Department cultural celebrations",
      image: "https://source.unsplash.com/800x400/?cultural-event"
=======
      title: "Technical Workshop Series",
      description: "Three-day intensive workshop on AI, Web Development, UI/UX, Cybersecurity and Cloud Computing conducted by DevSoc club members.",
      image: "https://i.imgur.com/NGi9z0C.png"
    },
    {
      title: "Hackathon Winners",
      description: "Our students secured top positions in amBITion hackathon, showcasing innovative solutions to real-world problems.",
      image: "https://i.imgur.com/NGi9z0C.png"
    },
    {
      title: "Industry Expert Talk",
      description: "Interactive session with industry professionals sharing insights about current technology trends and career opportunities.",
      image: "https://i.imgur.com/NGi9z0C.png"
    },
    {
      title: "Code Sprint Challenge",
      description: "24-hour coding competition where students demonstrated their programming skills and problem-solving abilities.",
      image: "https://i.imgur.com/NGi9z0C.png"
    },
    {
      title: "Project Exhibition",
      description: "Annual showcase of innovative student projects spanning various domains of Information Science.",
      image: "https://i.imgur.com/NGi9z0C.png"
    },
    {
      title: "Cultural Fest Performance",
      description: "Students participating in cultural activities, fostering creativity and team spirit.",
      image: "https://i.imgur.com/NGi9z0C.png"
    },
    {
      title: "Research Paper Presentation",
      description: "Students presenting their research work at national level technical symposium.",
      image: "https://i.imgur.com/NGi9z0C.png"
    },
    {
      title: "Sports Tournament",
      description: "Inter-department sports competition promoting physical fitness and sportsmanship.",
      image: "https://i.imgur.com/NGi9z0C.png"
    },
    {
      title: "Community Service Initiative",
      description: "Students engaging in social responsibility activities through NSS program.",
      image: "https://i.imgur.com/NGi9z0C.png"
    },
    {
      title: "Technical Quiz Competition",
      description: "Department-level quiz competition testing students' technical knowledge and awareness.",
      image: "https://i.imgur.com/NGi9z0C.png"
    },
    {
      title: "Alumni Interaction Session",
      description: "Interactive session with successful alumni sharing their industry experiences and career guidance.",
      image: "https://i.imgur.com/NGi9z0C.png"
    },
    {
      title: "Coding Boot Camp",
      description: "Intensive training program on advanced programming concepts and competitive coding.",
      image: "https://i.imgur.com/NGi9z0C.png"
    },
    {
      title: "Leadership Workshop",
      description: "Soft skills development workshop focusing on leadership and communication skills.",
      image: "https://i.imgur.com/NGi9z0C.png"
    },
    {
      title: "Tech Fest Organization",
      description: "Students actively participating in organizing and managing department technical fest.",
      image: "https://i.imgur.com/NGi9z0C.png"
    },
    {
      title: "Innovation Lab Projects",
      description: "Students working on cutting-edge projects in the department's innovation lab.",
      image: "https://i.imgur.com/NGi9z0C.png"
>>>>>>> 66fa78a (Art gallery -> More)
    }
  ];

  return (
<<<<<<< HEAD
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="page-title">Student Activities</h1>
        <Row title="Recent Activities" items={activities} />
=======
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
>>>>>>> 66fa78a (Art gallery -> More)
      </div>
    </div>
  );
}

export default StudentActivities;