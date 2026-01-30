import efaceoil from "../assets/efaceoil.jpg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about3.avif";
import Routetransition from "../components/Routetransition";
import { motion } from "framer-motion";

// Animation config
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <div className="relative bg-white text-black w-full h-screen">
        <img
          src={efaceoil}
          alt="Glowrin Hero"
          className="w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-20 px-4">
          <Routetransition>
            <motion.div
              animate={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-700 font-family-outfit">
                About Glowrin
              </h1>
              <p className="mt-2 text-sm md:text-base font-semibold text-gray-700 max-w-md">
                Welcome to our story!
              </p>
            </motion.div>
          </Routetransition>
        </div>
      </div>

      {/* ================= WELCOME SECTION ================= */}
      <motion.div
        className="bg-black text-white text-center px-6 md:px-20 py-16 md:py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          Welcome to Glowrin – Where Your Skin Glows Naturally
        </h2>
        <p className="mt-6 text-base md:text-lg font-semibold max-w-4xl mx-auto">
          At Glowrin, we believe that skincare is not just about beauty – it's
          about self-love, confidence, and a healthy lifestyle.
        </p>
      </motion.div>

      {/* ================= OUR STORY ================= */}
      <motion.div
        className="bg-white text-black py-16 md:py-20 text-center px-6 md:px-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
        <p className="mt-6 text-base md:text-xl font-semibold max-w-4xl mx-auto">
          Glowrin was born out of a passion for clean beauty and a desire to
          simplify skincare. Like many, we struggled to find products that were
          both kind to the skin and the planet.
        </p>
      </motion.div>

      {/* ================= IMAGE 1 ================= */}
      <motion.img
        src={about1}
        alt="Glowrin Story"
        className="w-full h-[300px] md:h-[600px] object-cover"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      {/* ================= VALUES ================= */}
      <motion.div
        className="bg-black text-white text-center px-6 md:px-20 py-16 md:py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What We Stand For
        </h2>

        <ul className="max-w-4xl mx-auto text-left space-y-4 md:space-y-6 text-base md:text-lg font-medium">
          <li className="flex gap-3">
            <span>🧪</span>
            <span>
              <strong>Clean Ingredients –</strong> No harsh chemicals, only
              plant-powered formulas.
            </span>
          </li>
          <li className="flex gap-3">
            <span>🌿</span>
            <span>
              <strong>Gentle Yet Effective –</strong> Ingredients that soothe and
              hydrate.
            </span>
          </li>
          <li className="flex gap-3">
            <span>🐰</span>
            <span>
              <strong>Cruelty-Free –</strong> We never test on animals.
            </span>
          </li>
          <li className="flex gap-3">
            <span>🤝</span>
            <span>
              <strong>Inclusive Beauty –</strong> Glowrin is for everyone.
            </span>
          </li>
        </ul>
      </motion.div>

      {/* ================= IMAGE 2 ================= */}
      <motion.img
        src={about2}
        alt="Glowrin Values"
        className="w-full h-[300px] md:h-[600px] object-cover"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      {/* ================= PROMISE ================= */}
      <motion.div
        className="bg-white text-black text-center px-6 md:px-20 py-16 md:py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">Our Promise</h2>
        <p className="mt-6 text-base md:text-lg font-semibold max-w-4xl mx-auto">
          Your skin deserves the best. Each Glowrin product is dermatologically
          tested, ethically made, and designed to fit seamlessly into your
          lifestyle.
        </p>
      </motion.div>
    </div>
  );
}
