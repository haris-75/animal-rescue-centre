import Navbar from './common/Navbar';
import AdoptInfo from './pages/AdoptInfo';
import BrowsePage from './pages/BrowsePage';
import DonationPage from './pages/DonationPage';
import Footer from './pages/Footer';
import HelpPage from './pages/HelpPage';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage';

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <StatsPage />
      <DonationPage />
      <AdoptInfo />
      <HelpPage />
      <BrowsePage />
      <Footer />
    </>
  );
}

export default App;
