import Container from '../../common/Container';
import Button from '../../components/Button';
import Heart from '../../assets/heart.svg';
export default function HelpPage() {
  const helpList = [
    {
      key: 11,
      textPrimary: 'Adopt or Foster',
      textSecondary:
        'Provide a forever or temporary home to a homeless animal.',
      btnText: 'View Adoptables',
    },
    {
      key: 22,
      textPrimary: 'Volunteer',
      textSecondary:
        'Provide a forever or temporary home to a homeless animal.',
      btnText: 'Get Involved',
    },
    {
      key: 33,
      textPrimary: 'Donate Monthly',
      textSecondary:
        'Provide a forever or temporary home to a homeless animal.',
      btnText: 'Give Monthly',
    },
    {
      key: 44,
      textPrimary: 'Start Fundraiser',
      textSecondary:
        'Provide a forever or temporary home to a homeless animal.',
      btnText: 'Learn More',
    },
  ];

  const bgColorForButtons = (key) =>
    key === 11
      ? 'bg-success'
      : key === 22
      ? 'bg-secondary'
      : key === 33
      ? 'bg-primary'
      : key === 44
      ? 'bg-warning'
      : 'bg-white';

  return (
    <Container className='bg-dark py-[80px] '>
      <div className='flex flex-col gap-5 sm:gap-20'>
        <div className='relative'>
          <div className='absolute top-1/2 left-[10%] hidden md:block'>
            <img
              className='md:w-[50px] lg:w-full'
              src={Heart}
              alt='heart-svg-left'
            />
          </div>
          <h1 className='text-white xl:text-6xl sm:text-[50px] sm:leading-[60px] text-2xl font-bold  m-auto text-center max-w-[]'>
            How you can make
          </h1>
          <h1 className='text-white xl:text-6xl sm:text-[50px] sm:leading-[60px] text-2xl font-bold  m-auto text-center max-w-[]'>
            a difference
          </h1>
          <div className='absolute top-0 right-[7%] hidden md:block'>
            <img
              className='md:w-[50px] lg:w-full'
              src={Heart}
              alt='heart-svg-left'
            />
          </div>
        </div>

        <div className='flex md:flex-row flex-col justify-center gap-4 sm:gap-10'>
          <div className='grid lg:grid-cols-4 lg:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-8'>
            {helpList?.map(({ key, textPrimary, textSecondary, btnText }) => (
              <div
                key={key}
                className='flex flex-col gap-6 sm:gap-10 rounded-3xl border-white border-2 p-4 sm:p-5 lg:px-4  lg:py-12 text-center'
              >
                <div>
                  <h1 className='xl:text-2xl sm:text-xl text-lg font-bold text-white mb-4'>
                    {textPrimary}
                  </h1>
                  <p className='xl:text-lg sm:text-base text-[13px] text-white'>
                    {textSecondary}
                  </p>
                </div>
                <Button
                  text={btnText}
                  backgroundColor={bgColorForButtons(key)}
                  textColor={
                    key === 11 || key === 22 ? 'text-dark' : 'text-white'
                  }
                  btn2
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
