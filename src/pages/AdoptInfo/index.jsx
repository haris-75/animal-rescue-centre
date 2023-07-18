import AdoptPageImage from '../../assets/adopt-page-img.png';
import Container from '../../common/Container';
import Button from '../../components/Button';
export default function AdoptInfo() {
  const listItems = [
    'Live within a 90 mile radius of our shelter',
    'Accept the financial responsibility of vet care and pet care',
    'Donate $400 to adopt their dog/puppy; $125 for a cat; $150 for a kitten',
    'Be over 23 years of age to adopt a dog and 21 years of age to adopt a cat',
    'Be ready to adopt within 7-10 days',
  ];
  return (
    <Container>
      <div className='pt-[50px] pb-[120px] flex flex-col xl:gap-[40px] lg:gap-[18px] justify-center items-center'>
        <h1 className='lg:text-6xl md-lg:text-5xl md:text-[40px] text-4xl md:leading-[2.85rem] font-poppins font-bold text-dark mb-6'>
          Adopt Information
        </h1>
        <div className='flex md:flex-row flex-col justify-between items-center pb-8 gap-6'>
          <div className='m-auto lg:w-[440px] md:w-[380px] w-[300px]'>
            <img
              src={AdoptPageImage}
              alt='home-page-img'
            />
          </div>
          <div className='flex flex-col gap-6 ml-4'>
            <h1 className='lg:text-3xl md-lg:text-2xl md:text-xl text-lg font-poppins font-bold text-dark'>
              Applicants must:
            </h1>
            <ul className='list-disc max-w-[550px] text-neutral-700 font-normal lg:text-2xl sm:text-xl text-base lg:leading-[38px] sm:leading-[30px] leading-[24px]'>
              {listItems?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div>
              <Button
                text='Apply to Adopt'
                backgroundColor='bg-dark'
                textColor='text-white'
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
