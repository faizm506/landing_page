import { motion } from "framer-motion";
import logo from "./assets/logo.png"; 
import mainBg from "./assets/main.png";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-yellow-50 to-orange-100 font-sans">

      {/* SEO & Metadata */}
      <head>
        <title>Sameer Trading Company | Premium Bakery & Cake Raw Materials</title>
        <meta name="description" content="Sameer Trading Company — Distributor of premium bakery & cake raw materials in Ahmedabad. High-quality flour, chocolates, dairy, premixes & decorations for bakeries & cafes." />
        <meta name="keywords" content="Sameer Trading Company, Bakery Ingredients, Cake Raw Materials, Flour Distributor, Chocolates, Dairy Products, Cake Premixes, Ahmedabad Bakery Supplier" />
        <meta name="author" content="Sameer Trading Company" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sameertradingcompany.com/" />
        <meta property="og:title" content="Sameer Trading Company | Premium Bakery & Cake Raw Materials" />
        <meta property="og:description" content="Distributor of premium bakery & cake raw materials — Flour, chocolates, dairy, premixes & decorations. Trusted by bakeries & cafes across India." />
        <meta property="og:image" content="https://yourdomain.com/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sameertradingcompany.com/" />
        <meta name="twitter:title" content="Sameer Trading Company | Premium Bakery & Cake Raw Materials" />
        <meta name="twitter:description" content="Distributor of premium bakery & cake raw materials — Flour, chocolates, dairy, premixes & decorations. Trusted by bakeries & cafes across India." />
        <meta name="twitter:image" content="https://yourdomain.com/assets/logo.png" />
      </head>

      {/* Header */}
      <header className="relative py-6 px-4 sm:px-6 md:px-12 flex items-center justify-between bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg rounded-b-3xl">

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-700/80 to-orange-600/80 rounded-b-3xl"></div>

        {/* Logo and title */}
        <div className="relative flex items-center gap-4">
          <motion.img
            src={logo}
            alt="Sameer Trading Company Logo"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: [1, 1.05, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-20 w-20 md:h-24 md:w-24 rounded-full border-2 border-white shadow-md bg-white object-contain"
          />
          <div className="text-left max-w-lg">
            <motion.h1
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="whitespace-nowrap text-2xl md:text-5xl font-bold drop-shadow-md leading-snug"
            >
              Sameer Trading Company
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-1 text-sm md:text-lg font-medium"
            >
              Distributor of Premium Bakery & Cake Raw Materials
            </motion.p>
          </div>
        </div>

        {/* Call-to-Action button */}
        <motion.a
          href="https://wa.me/919898864651"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative z-10 inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-400 hover:from-yellow-600 hover:via-orange-600 hover:to-yellow-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
        >
          <span className="block sm:hidden text-xl">📞</span>
          <span className="hidden sm:block">Contact Us / Call Now</span>
        </motion.a>
      </header>

      {/* Main */}
      <main
        className="relative flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-12 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80"></div>

        <div className="relative z-10 w-full flex flex-col items-center gap-12">

          {/* About Section */}
          <section className="w-full max-w-5xl mx-auto mt-8">
            <div className="relative bg-gradient-to-r from-yellow-50/80 via-orange-50/70 to-yellow-50/80 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-inner">
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-700 mb-6 text-center"
              >
                About Us
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-center"
              >
                We are a trusted supplier of <span className="font-semibold">premium bakery raw materials</span>, offering everything you need for cakes, pastries, breads, and confectionery delights. From <span className="font-semibold text-yellow-800">cake premixes, flavored glazes, chocolates, creams, and toppings</span> to <span className="font-semibold text-yellow-800">bread improvers, custard powders, and other essentials</span>, we provide it all under one roof. Our products are carefully sourced for consistency, taste, and professional-grade results, catering to both home bakers and large-scale bakeries. With us, baking becomes simpler, more innovative, and irresistibly delicious.
              </motion.p>
            </div>
          </section>

          {/* Product Highlights */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-700 text-center mb-8">
              Our Product Range
            </h2>
            <div className="relative bg-gradient-to-r from-yellow-50/80 via-orange-50/70 to-yellow-50/80 rounded-3xl p-6 sm:p-8 shadow-inner">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
                {[
                  { icon: "🎂", label: "Premixes" },
                  { icon: "🍦", label: "Whipped Cream" },
                  { icon: "🍫", label: "Chocolates" },
                  { icon: "✨", label: "Decorations" },
                  { icon: "🥣", label: "Improver Powders" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                  >
                    <span className="text-4xl sm:text-5xl mb-3">{item.icon}</span>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-center">
                      {item.label}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Testimonials */}
          <section className="w-full max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-700 text-center mb-8">
              What Our Customers Say
            </h2>
            <div className="bg-gradient-to-r from-yellow-50/80 via-orange-50/70 to-yellow-50/80 rounded-3xl p-6 sm:p-8 shadow-inner">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { icon: "🎂", quote: "We only trust Sameer Trading Company for our raw materials. Quality is always top-notch.", author: "Superfine Bakery Owner" },
                  { icon: "🍫", quote: "Reliable supplier with excellent service. Our cakes never miss the mark!", author: "TGB" },
                  { icon: "🧁", quote: "From premixes to decorations, everything is consistent and professional-grade.", author: "Home Baker & Entrepreneur" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center p-6 bg-white/90 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    <span className="text-4xl mb-3">{item.icon}</span>
                    <p className="text-gray-800 text-base sm:text-lg italic mb-4 text-center">“{item.quote}”</p>
                    <h4 className="text-gray-900 font-semibold text-sm sm:text-base text-center">– {item.author}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Tagline */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="italic text-xl sm:text-2xl md:text-3xl font-semibold text-orange-700 my-10 px-4 sm:px-6"
          >
            “Great bakes begin with the finest ingredients.” 🥖🍰
          </motion.blockquote>

          {/* Address */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-xl bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-800 mb-3">Visit Us</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Sameer Trading Company <br />
              Shop No-11, Akhtarwala Chambers, Opp Kalupur Tower <br />
              Kalupur, Ahmedabad-1 <br />
              📞 +91 98988 64651
            </p>
            <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden shadow-md mb-4">
              <iframe
                title="Sameer Trading Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d630.27453335767!2d72.59442409142959!3d23.02947212254343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85fa8eb1d6bb%3A0x7a65e7dd5c4ae459!2sSameer%20Trading%20Company!5e0!3m2!1sen!2sin!4v1755684675418!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <a
              href="https://www.google.com/maps/place/Sameer+Trading+Company/@23.024488,72.5314403,14z/data=!4m21!1m14!4m13!1m4!2m2!1d72.5090304!2d23.0227968!4e1!1m6!1m2!1s0x395e85fa8eb1d6bb:0x7a65e7dd5c4ae459!2sShop+no+-11,+Sameer+Trading+Company,+Akhtarwala+Chambers,+1,+Kalupur+Tower+Rd,+opp.+Kalupur+Tower,+Old+City,+Kalupur,+Ahmedabad,+Gujarat+380001!2m2!1d72.5951352!2d23.0295119!3e0!3m5!1s0x395e85fa8eb1d6bb:0x7a65e7dd5c4ae459!8m2!3d23.0295119!4d72.5951352!16s%2Fg%2F11yj37w7vj?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-yellow-600 text-white font-semibold rounded-xl shadow-md hover:bg-yellow-700 hover:scale-105 transition-transform duration-200"
            >
              🚗 Get Directions
            </a>
          </motion.section>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-yellow-700 text-white text-center shadow-inner">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          © 2025 Sameer Trading Company. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}
