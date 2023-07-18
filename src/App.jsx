import Navbar from './common/Navbar';
import AdoptInfo from './pages/AdoptInfo';
import DonationPage from './pages/DonationPage';
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
    </>
  );
}

export default App;
