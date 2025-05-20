import Review from '../components/home/Review';
import SlidingHeroSection from '../components/home/SlidingHeroSection';
import RecentSection from '../components/home/RecentSection';

const HomePage = () => {
  
  return (
    <div className="flex flex-col">
      <SlidingHeroSection />
      <RecentSection />
      <Review />
    </div>
  );
};

export default HomePage;