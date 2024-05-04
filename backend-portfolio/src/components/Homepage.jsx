import React from "react";
import Header from "./Header";
import LabTestCard from "./LabTestCard";
import BookAppointment from "./BookAppointment";
import Footer from "./Footer";
import ScientistGallery from "./ScientistGallery";
import Reviews from "./Reviews";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h2>Our Laboratory Tests</h2>
        <LabTestCard />
        <h2>Meet Our Scientists</h2>
        <ScientistGallery />
        <h2>Book Your Appointment</h2>
        <BookAppointment />
        <h2>Client Reviews</h2>
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
