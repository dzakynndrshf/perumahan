const Contact = () => {
  return (
    <section id="kontak" className="py-20 bg-blue-700 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in touch with us</h2>
          <p className="text-xl mb-8">
            to discover more about Nagara Property!<br />
            Ask anything, we will answer it immediately.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
              Contact Us
            </button>
            <a href="https://www.instagram.com/nagara.properti?utm_source=ig_web_button_share_sheet&igsh=bDdnb2xlbmpsZmNn" target="_blank" rel="noopener noreferrer">
            <button className="bg-transparent border-2 border-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-800 transition duration-300">
              See our Instagram →
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;