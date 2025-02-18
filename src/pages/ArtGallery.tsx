<<<<<<< HEAD
import React from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function ArtGallery() {
=======
import React, { useState } from 'react';

function ArtGallery() {
  const [activeTab, setActiveTab] = useState('gallery');

>>>>>>> 66fa78a (Art gallery -> More)
  const artworks = [
    {
      title: "Digital Art Exhibition",
      description: "Student artwork showcase",
      image: "https://source.unsplash.com/800x400/?digital-art"
    },
    {
      title: "Tech Installation",
      description: "Interactive technology art display",
      image: "https://source.unsplash.com/800x400/?installation"
    },
    {
      title: "Creative Computing",
      description: "Computational art projects",
      image: "https://source.unsplash.com/800x400/?creative-tech"
    }
  ];

<<<<<<< HEAD
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="page-title">Art Gallery</h1>
        <Row title="Featured Artworks" items={artworks} />
=======
  const faculty = [
    { name: "Dr. Prakash J", designation: "Professor and Vice Principal" },
    { name: "Dr. Asha.T", designation: "Professor and HOD" },
    { name: "Dr. Roopa H", designation: "Associate Professor" },
    { name: "Dr. Hema Jagadish", designation: "Associate Professor" },
    { name: "Dr. M. Shilpa", designation: "Associate Professor" },
    { name: "Dr. S. Mercy", designation: "Associate Professor" },
    { name: "M. Chethana", designation: "Assistant Professor" },
    { name: "Dr. Vani. V", designation: "Assistant Professor" },
    { name: "Dr. Jayasheela C. S.", designation: "Assistant Professor" },
    { name: "J. Padmanabha", designation: "Assistant Professor" },
    { name: "R. Prameela", designation: "Assistant Professor" },
    { name: "T. K. Vedasree", designation: "Assistant Professor" },
    { name: "T. Shilpa", designation: "Assistant Professor" },
    { name: "Deeksha. C", designation: "Assistant Professor" },
    { name: "Priya. N. V", designation: "Assistant Professor" },
    { name: "Pavithra. N", designation: "Assistant Professor" },
    { name: "Aishwarya. S", designation: "Assistant Professor" },
    { name: "Chikka Krishnappa. T. K", designation: "Assistant Professor" }
  ];

  const resultAnalysis = {
    overall: {
      year: "2023-24",
      passPercentage: 95,
      totalStudents: 120,
      distinctions: 45,
      firstClass: 55,
      secondClass: 15
    },
    semesterWise: [
      { semester: "8th Semester", passPercentage: 98 },
      { semester: "7th Semester", passPercentage: 96 },
      { semester: "6th Semester", passPercentage: 94 },
      { semester: "5th Semester", passPercentage: 92 },
      { semester: "4th Semester", passPercentage: 95 },
      { semester: "3rd Semester", passPercentage: 93 },
      { semester: "2nd Semester", passPercentage: 97 },
      { semester: "1st Semester", passPercentage: 91 }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Department Info</h1>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-6 py-2 rounded-l-lg ${
              activeTab === 'gallery' ? 'bg-red-600' : 'bg-zinc-800'
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => setActiveTab('faculty')}
            className={`px-6 py-2 ${
              activeTab === 'faculty' ? 'bg-red-600' : 'bg-zinc-800'
            }`}
          >
            Faculty
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`px-6 py-2 rounded-r-lg ${
              activeTab === 'results' ? 'bg-red-600' : 'bg-zinc-800'
            }`}
          >
            Results
          </button>
        </div>

        {/* Gallery Section */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <div 
                key={index}
                className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
                  <p className="text-gray-400">{artwork.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Faculty Section */}
        {activeTab === 'faculty' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((member, index) => (
              <div 
                key={index}
                className="bg-zinc-900 p-6 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.imgur.com/NGi9z0C.png"
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-red-600 text-sm">{member.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results Section */}
        {activeTab === 'results' && (
          <div className="space-y-12">
            {/* Overall Analysis */}
            <div className="bg-zinc-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Overall Analysis {resultAnalysis.overall.year}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {resultAnalysis.overall.passPercentage}%
                  </div>
                  <p className="text-gray-400">Pass Percentage</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {resultAnalysis.overall.totalStudents}
                  </div>
                  <p className="text-gray-400">Total Students</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {resultAnalysis.overall.distinctions}
                  </div>
                  <p className="text-gray-400">Distinctions</p>
                </div>
              </div>
            </div>

            {/* Semester-wise Analysis */}
            <div className="bg-zinc-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Semester-wise Analysis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resultAnalysis.semesterWise.map((sem, index) => (
                  <div 
                    key={index}
                    className="bg-zinc-800 p-4 rounded-lg text-center"
                  >
                    <h3 className="font-semibold mb-2">{sem.semester}</h3>
                    <div className="text-3xl font-bold text-red-600">
                      {sem.passPercentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
>>>>>>> 66fa78a (Art gallery -> More)
      </div>
    </div>
  );
}

export default ArtGallery;