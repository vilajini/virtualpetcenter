import React from 'react';
import PetList from '../components/PetList';
import AddPetForm from '../components/AddPetForm';
import '../styles/global.css';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-center py-5" style={{ backgroundColor: '#ffe4e1' }}>
        <h1 className="display-4 fw-bold">Welcome to the Virtual Pet Adoption Center 🐾</h1>
        <p className="lead mt-3">Find your perfect furry friend and give them the home they deserve!</p>
      </section>

      {/* About Section */}
      <section className="about text-center py-4 bg-light">
        <div className="container">
          <h2>About Us</h2>
          <p className="mt-2">
            We’re on a mission to help abandoned pets find loving homes. Browse the list, learn about their personality,
            and adopt with a click!
          </p>
        </div>
      </section>

      {/* Add New Pet Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <AddPetForm />
        </div>
      </section>

      {/* Available Pets (Not Adopted) Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="mb-4 text-center">🐶 Available Pets for Adoption 🐱</h3>
          <PetList onlyAvailable />
        </div>
      </section>

      {/* Full Pet List Section */}
      <section id="pet-section" className="py-5">
        <div className="container">
          <h3 className="mb-4 text-center">📋 All Pets Management</h3>
          <PetList />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 mt-5 bg-white text-muted">
        &copy; {new Date().getFullYear()} Virtual Pet Adoption | Built with ❤️
      </footer>
    </div>
  );
};

export default HomePage;
