import HomePageImage from '../../assets/home-page-img.svg';
import Button from '../../components/Button';
import DogIcon from '../../assets/dog-icon.svg';
import HeartIcon from '../../assets/heart-img.svg';
import Container from '../../common/Container';
export default function HomePage() {
  return (
    <Container>
      <div className='pt-[50px] pb-[120px] flex xl:gap-[40px] lg:gap-[18px] justify-center sm:flex-row flex-col '>
        <div className='flex flex-col justify-between pb-8'>
          <div className='lg:max-w-[600px] md:max-w-[500px] mb-[48px] sm:max-w-[290px]'>
            <h1 className='lg:text-6xl md-lg:text-5xl md:text-[40px] text-4xl md:leading-[2.85rem] font-poppins font-bold text-dark mb-6'>
              Forever Homes Shelter
            </h1>
            <p className='lg:text-2xl md-lg:text-xl md:text-lg font-poppins font-light text-dark-secondary'>
              Our mission is to rescue and provide rehabilitation to dogs and
              cats that are critically injured or neglected. We have already
              saved the lives of 10,000 animals. We are not just a rescue, we
              are a refuge.
            </p>
          </div>
          <div>
            <h4 className='lg:text-3xl md-lg:text-2xl md:text-xl font-poppins font-bold text-dark mb-6'>
              Your Gift Helps Save Lives
            </h4>
            <div className='flex md:gap-8 gap-4 '>
              <Button
                icon={HeartIcon}
                text='Donate'
                backgroundColor='bg-primary'
                textColor='text-white'
              />
              <Button
                icon={DogIcon}
                text='Apply to Adopt'
                backgroundColor='bg-white-secondary'
                textColor='text-dark'
                borderWidth='border-2'
                borderColor='border-dark'
              />
            </div>
          </div>
        </div>
        <div className='my-auto ml-auto lg:w-[440px] md:w-[380px] sm:w-[250px]'>
          <img
            src={HomePageImage}
            alt='home-page-img'
          />
        </div>
      </div>
    </Container>
  );
}
