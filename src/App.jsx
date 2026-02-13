import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ExamCategories from './components/ExamCategories';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import StudyMaterials from './components/StudyMaterials';
import WhyJoin from './components/WhyJoin';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#080514]">
      <Header />
      <main>
        <Hero />
        <ExamCategories />
        <About />
        <HowItWorks />
        <Stats />
        <StudyMaterials />
        <WhyJoin />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
