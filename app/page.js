// app/page.js
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import MarqueeBanner from '../components/MarqueeBanner/MarqueeBanner';
import About from '../components/About/About'; // <-- Importe o About
import Services from '../components/Services/Services';
import Location from '../components/Location/Location';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MarqueeBanner />
      <About />
      <Services />
      <Location />
      <Footer />
    </main>
  );
}