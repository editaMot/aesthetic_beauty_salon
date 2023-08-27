import Hero from '../../component/atoms/Hero';
import ServicesSection from './ServicesSection';
import TeamSection from './TeamSection';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';

const Home = () => {
  const handleClick = () => {
    const servicesSection = document.getElementById('services-section');

    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="main">
      <Hero
        heading="STEP IN, SIT, RELAX"
        text="We'll take care of everything and leave you feeling fabulous"
        btn="Learn more"
        action={handleClick}
      />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;
