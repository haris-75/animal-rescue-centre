import Container from '../../common/Container';
import Button from '../../components/Button/index';

export default function SubscribeForm() {
  return (
    <Container className='bg-warning'>
      <div className='pt-[60px] pb-[60px] flex flex-col xl:gap-[40px] lg:gap-[18px] justify-center items-center'>
        <div className='text-center text-white'>
          <h1 className='lg:text-6xl md-lg:text-5xl md:text-[40px] text-4xl md:leading-[2.85rem] font-poppins font-bold mb-6'>
            Subscribe to our newsletter
          </h1>
          <p className='lg:w-[60%] md:w-1/2 m-auto'>
            for updates on shelter events, fundraising parties, and heartwarming
            stories of animals finding their forever homes.
          </p>
        </div>
        <div className='flex mt-12 gap-4'>
          <input
            className='sm:w-[300px] w-[200px] pl-4 border-white border-[1px] bg-warning rounded-3xl text-white'
            type='text'
            placeholder='Enter your email'
          />
          <Button
            text='Subscribe'
            backgroundColor='bg-white'
            borderWidth='rounded-3xl'
          />
        </div>
      </div>
    </Container>
  );
}
