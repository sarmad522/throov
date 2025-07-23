'use client';

import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="     text-white   py-8 md:py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-6 text-start">
            Ready to discuss <br />
            your project with us?
          </h2>
          <a
            href="mailto:contact@throov.com"
            className="text-[#A890CD] text-xl  md:text-4xl font-medium underline hover:text-blue-300 transition text-start block"
          >
            contact@throov.com
          </a>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="relative group">
            <input
              type="text"
              placeholder="Your name*"
              className="w-full bg-transparent border-b border-gray-500 py-3 px-1 text-white placeholder-#6C54A0 focus:outline-none"
            />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-focus-within:w-full group-focus-within:h-0.5" />
          </div>

          <div className="relative group">
            <input
              type="email"
              placeholder="Your email*"
              className="w-full bg-transparent border-b border-gray-500 py-3 px-1 text-white placeholder-#6C54A0  focus:outline-none"
            />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-focus-within:w-full group-focus-within:h-0.5" />
          </div>

          <div className="relative group">
            <textarea
              rows={4}
              placeholder="About project*"
              className="w-full bg-transparent border-b border-gray-500 py-3 px-1 text-white placeholder-#6C54A0  focus:outline-none resize-none"
            ></textarea>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-focus-within:w-full group-focus-within:h-0.5" />
          </div>
        <div   className='flex justify-between  items-center'>
          <p className="  text-[10px] md:text-xs text-gray-400   w-[50%]   text-start">
            By sending this form I confirm that I have read and accept the{' '}
            <span className="underline cursor-pointer hover:text-white">Privacy Policy</span>.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden   px-4 py-2  md:px-6 md:py-3 rounded font-semibold text-white shadow-md bg-gradient-to-b from-[#4E3682] to-[#A890CD] transition-all duration-500 hover:scale-105 group"
          >
  <span className="relative z-10">Send Message</span>
  <span className="absolute inset-0 bg-gradient-to-b from-[#A890CD] to-[#4E3682] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </motion.button>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
