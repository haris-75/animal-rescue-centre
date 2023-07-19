import Container from '../../common/Container';
import Button from '../../components/Button';
import Bone from '../../assets/bone.svg';
import Fish from '../../assets/fish.svg';
import CatFriend from '../../assets/cat-friend.png';
import DogFriend from '../../assets/dog-friend.png';
export default function BrowsePage() {
  return (
    <Container className='bg-dark py-[80px] '>
      <div className='flex flex-col gap-5 sm:gap-20'>
        <div className='relative'>
          <div className='absolute lg:top-1/2 lg:left-[-2%] left-0 -top-12 hidden md:block'>
            <img
              className='md:w-[70px] lg:w-full'
              src={Fish}
              alt='fish-svg-illustration'
            />
          </div>
          <h1 className='text-white xl:text-6xl sm:text-[50px] sm:leading-[60px] text-2xl font-bold  m-auto text-center max-w-[]'>
            Find your <span className='text-secondary'>best friend</span> today!
          </h1>
          <div className='absolute lg:top-0 lg:right-[-4%] right-0 top-16 hidden md:block'>
            <img
              className='md:w-[70px] lg:w-full'
              src={Bone}
              alt='bone-svg-illusstration'
            />
          </div>
        </div>
        <div className='flex md:justify-between justify-center md:-mb-[5rem]'>
          <img
            className='xl:w-[300px] lg:w-[250px] md:w-[200px] md:block hidden'
            src={CatFriend}
            alt='cat-friend-img'
          />
          <div className='flex flex-col justify-center gap-10'>
            <h1 className='text-white xl:text-3xl sm:text-2xl text-xl font-bold  m-auto text-center'>
              Browse our adorable adoptables
            </h1>
            <div className='flex flex-col sm:flex-row md:flex-col md-lg:flex-row  justify-center gap-6 w-fit m-auto text-center'>
              <Button
                text='View Adoptables'
                backgroundColor='bg-secondary'
                textColor='text-dark'
              />
              <Button
                text='Apply to Adopt'
                backgroundColor='bg-dark'
                textColor='text-white'
                borderWidth='border-2'
                borderColor='border-white'
              />
            </div>
          </div>
          <img
            className='xl:w-[300px] lg:w-[250px] md:w-[200px] md:block hidden'
            src={DogFriend}
            alt='dog-friend-img'
          />
        </div>
      </div>
    </Container>
  );
}
