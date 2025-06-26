export default function About() {
  return (
    <div className="bg-white text-gray-800 px-6 py-16">
      {/* Section 1: Intro */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">About Glowrin</h1>
        <p className="text-lg leading-relaxed">
          At Glowrin, we believe that skincare should be clean, simple, and empowering. Our mission is to help you glow—naturally and confidently—by offering skincare products made with love, care, and science-backed botanicals.
        </p>
      </div>

      {/* Section 2: Brand Story */}
      <div className="max-w-5xl mx-auto mt-20 flex flex-col md:flex-row items-center gap-10">
        <img
          src="/images/founder.jpg" // Replace with your image
          alt="Glowrin Founder"
          className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Our Story</h2>
          <p className="text-base leading-relaxed">
            Glowrin was born from a passion for holistic beauty and sustainability. What started as a kitchen experiment soon turned into a movement—helping thousands rediscover their skin's natural radiance. We're proud to be cruelty-free, vegan, and environmentally conscious every step of the way.
          </p>
        </div>
      </div>

      {/* Section 3: Core Values */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold text-pink-500 mb-8">Our Values</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <div className="bg-pink-50 p-6 rounded-xl shadow-md flex-1">
            <h3 className="text-lg font-bold text-pink-600 mb-2">Clean Ingredients</h3>
            <p className="text-sm">We use only safe, gentle, and effective plant-based ingredients.</p>
          </div>
          <div className="bg-pink-50 p-6 rounded-xl shadow-md flex-1">
            <h3 className="text-lg font-bold text-pink-600 mb-2">Cruelty-Free</h3>
            <p className="text-sm">Our products are never tested on animals—because beauty shouldn't hurt.</p>
          </div>
          <div className="bg-pink-50 p-6 rounded-xl shadow-md flex-1">
            <h3 className="text-lg font-bold text-pink-600 mb-2">Sustainability</h3>
            <p className="text-sm">Eco-friendly packaging and mindful sourcing are at our core.</p>
          </div>
        </div>
      </div>

      {/* Section 4: CTA */}
      <div className="mt-24 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join the Glow Movement ✨</h2>
        <p className="text-base text-gray-600 mb-6">
          Whether you’re just starting your skincare journey or are a seasoned glow-getter, Glowrin is here for you.
        </p>
        <a href="/shop" className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
          Explore Our Products
        </a>
      </div>
    </div>
  );
}
