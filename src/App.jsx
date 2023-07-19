import Navbar from './common/Navbar';
import AdoptInfo from './pages/AdoptInfo';
import DonationPage from './pages/DonationPage';
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
    </>
  );
}

export default App;
