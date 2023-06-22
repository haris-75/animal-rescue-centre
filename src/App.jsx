import Navbar from './common/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <div className='max-w-[1440px] m-auto font-poppins xl:px-[100px] lg:px-[60px]'>
        <HomePage />
      </div>
    </>
  );
}

export default App;
