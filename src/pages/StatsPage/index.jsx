import Container from '../../common/Container';
import StatImg1 from '../../assets/stats/1.png';
import StatImg2 from '../../assets/stats/2.png';
import StatImg3 from '../../assets/stats/3.png';
import StatImg4 from '../../assets/stats/4.png';
export default function StatsPage() {
  const stats = [
    {
      textPrimary: '1400',
      textSecondary: 'Animals Rescued',
    },
    {
      textPrimary: '$1.4 Million',
      textSecondary: 'Raised',
    },
    {
      textPrimary: '940',
      textSecondary: 'Tails Found a Home',
    },
  ];
  return (
    <Container className='bg-dark py-[80px] '>
      <div className='flex flex-col gap-5 sm:gap-20'>
        <h1 className='text-white xl:text-6xl sm:text-[50px] sm:leading-[60px] text-2xl font-bold w-[70%] m-auto text-center'>
          With your help, we accomplished these goals
        </h1>
        <div className='flex md:flex-row flex-col justify-center gap-4 sm:gap-10'>
          {stats?.map(({ textPrimary, textSecondary }) => (
            <div
              className='text-center flex flex-col gap-1.5 sm:gap-3.5'
              key={textPrimary + textSecondary}
            >
              <h2 className='xl:text-6xl sm:text-5xl text-xl font-bold text-secondary'>
                {textPrimary}
              </h2>
              <p className='xl:text-4xl sm:text-3xl text-lg font-bold text-white'>
                {textSecondary}
              </p>
            </div>
          ))}
        </div>
        <div className='grid lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:gap-10 gap-8'>
          <div className='m-auto'>
            <img
              className='sm:w-[70%] lg:w-[100%] m-auto'
              src={StatImg1}
              alt='stat-img-1'
              width={175}
            />
          </div>
          <div className='m-auto'>
            <img
              className='sm:w-[70%] lg:w-[100%] m-auto'
              src={StatImg2}
              alt='stat-img-2'
              width={175}
            />
          </div>
          <div className='m-auto'>
            <img
              className='sm:w-[70%] lg:w-[100%] m-auto'
              src={StatImg3}
              alt='stat-img-3'
              width={175}
            />
          </div>
          <div className='m-auto'>
            <img
              className='sm:w-[70%] lg:w-[100%] m-auto'
              src={StatImg4}
              alt='stat-img-4'
              width={175}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
