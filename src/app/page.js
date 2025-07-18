import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Projects from '../components/Projects';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './globals.css'; 

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Nagara Property - Developer Perumahan di Bandung</title>
        <meta name="description" content="Perumahan modern dengan fasilitas lengkap di Bandung dan Jatinangor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Location />
      <Gallery />
      <Footer />
    </div>
  );
}