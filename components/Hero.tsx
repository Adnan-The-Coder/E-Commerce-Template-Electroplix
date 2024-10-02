"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-8 pt-16 md:pt-8 bg-background">
      {/* Left Section */}
      <motion.div
        className="flex-1 flex flex-col items-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--primary-foreground)' }}>
          Think, Build, Repeat!
        </h1>
        <p className="text-lg mb-4 text-muted-foreground">
          Shop the latest tech solutions with just a click and elevate your productivity.Revolutionize Your Work with Our Cutting-Edge Tech Solutions
        </p>
        <div className="flex gap-4 mb-2"> {/* Reduced margin-bottom */}
          <button className="bg-primary text-primary-foreground py-3 px-5 rounded-lg shadow hover:shadow-lg transition duration-300 text-lg">
            Shop Now
          </button>
          <button className="border border-primary text-primary py-3 px-5 rounded-lg shadow hover:shadow-lg transition duration-300 text-lg">
            Explore
          </button>
        </div>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        className="flex-1 flex justify-center mt-4 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative overflow-hidden rounded-[2rem] shadow-lg">
          <Image
            src="/assets/Hero_Im.jpg"
            alt="Hero Image"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
