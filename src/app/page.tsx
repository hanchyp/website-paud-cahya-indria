import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArtikelSection from "./components/ArtikelSection";
import FormKritikSaran from "./components/KritikSaran";
import AboutSection from "./components/AboutSection";
import PendaftaranSection from "./components/PendaftaranSection";
import HomePageSection from "./components/HomePageSection";

const PAUDWebsite = () => {
  return (
    <div className="font-fredoka min-h-screen bg-gray-500">
      {/* Header */}
      <Navbar></Navbar>

      {/* Hero Section */}
      <HomePageSection/>

      {/* About Section */}
      <AboutSection/>

      {/* Articles Section */}
      <ArtikelSection/>
      
      {/* CTA Section */}
      <PendaftaranSection/>

      <FormKritikSaran></FormKritikSaran>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default PAUDWebsite;
