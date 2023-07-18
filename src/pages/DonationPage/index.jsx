import Container from '../../common/Container';
import DonateImg1 from '../../assets/donation/1.svg';
import DonateImg2 from '../../assets/donation/2.svg';
import DonateImg3 from '../../assets/donation/3.svg';
import DonateImg4 from '../../assets/donation/4.svg';
import DonateImg5 from '../../assets/donation/5.svg';
import DonateImg6 from '../../assets/donation/6.svg';
export default function DonationPage() {
  const services = [
    {
      textPrimary: 'Shelter',
      textSecondary:
        'We provide shelter for many of our cats and dogs. In addition to aroof over their heads, we pay for heat, food, water, andelectricity, and general maintenance.',
    },
    {
      textPrimary: 'Vetting',
      textSecondary:
        'We provide shelter for many of our cats and dogs. In addition to aroof over their heads, we pay for heat, food, water, andelectricity, and general maintenance.',
    },
    {
      textPrimary: 'Facilities',
      textSecondary:
        'We provide shelter for many of our cats and dogs. In addition to aroof over their heads, we pay for heat, food, water, andelectricity, and general maintenance.',
    },
    {
      textPrimary: 'Transport',
      textSecondary:
        'We provide shelter for many of our cats and dogs. In addition to aroof over their heads, we pay for heat, food, water, andelectricity, and general maintenance.',
    },
    {
      textPrimary: 'Fosters',
      textSecondary:
        'We provide shelter for many of our cats and dogs. In addition to aroof over their heads, we pay for heat, food, water, andelectricity, and general maintenance.',
    },
    {
      textPrimary: 'Food',
      textSecondary:
        'We provide shelter for many of our cats and dogs. In addition to aroof over their heads, we pay for heat, food, water, andelectricity, and general maintenance.',
    },
  ];
  const imgSrcHandler = (imgName) =>
    imgName === 'Shelter'
      ? DonateImg1
      : imgName === 'Vetting'
      ? DonateImg2
      : imgName === 'Facilities'
      ? DonateImg3
      : imgName === 'Transport'
      ? DonateImg4
      : imgName === 'Fosters'
      ? DonateImg5
      : imgName === 'Food'
      ? DonateImg6
      : DonateImg1;
  return (
    <Container className='bg-dark py-[80px] '>
      <div className='flex flex-col gap-5 sm:gap-20'>
        <h1 className='text-white xl:text-6xl sm:text-[50px] sm:leading-[60px] text-2xl font-bold  m-auto text-center'>
          With your donations we provide
        </h1>
        <div className='flex md:flex-row flex-col justify-center gap-4 sm:gap-10'>
          <div className='grid lg:grid-cols-3 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3 gap-10'>
            {services?.map(({ textPrimary, textSecondary }) => (
              <div
                key={textPrimary}
                className='flex flex-col gap-2 rounded-3xl border-white border-2 p-4 sm:p-6 lg:p-8'
              >
                <div className='flex justify-between items-center'>
                  <h1 className='xl:text-4xl sm:text-3xl text-lg font-bold text-white'>
                    {textPrimary}
                  </h1>
                  <img
                    className='w-[35px] md:w-[45px] lg:w-[55px] '
                    src={imgSrcHandler(textPrimary)}
                    alt=''
                  />
                </div>
                <p className='xl:text-[20px] xl:leading-[24px] sm:text-lg text-[13px] text-white'>
                  {textSecondary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
