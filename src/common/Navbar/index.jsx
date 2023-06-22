import Logo from '../../assets/logo.png';
import Button from '../../components/Button';
import HeartIcon from '../../assets/heart-img.svg';
import PhoneIcon from '../../assets/phone.svg';
export default function Navbar() {
  return (
    <div className='flex sticky top-0 justify-between py-6 border-b-2 border-dark bg-white-secondary xl:px-[100px] lg:px-[60px] md:px-6'>
      {/* Nav Left */}
      <div className='flex lg:gap-4 md:gap-2'>
        <div className='p-1.5'>
          <img
            width={40}
            src={Logo}
            alt='logo'
          />
        </div>
        <ul className='flex xl:gap-5 md-lg:gap-3 md:gap-2 text-dark font-medium xl:text-lg md-lg:text-base md:text-xs items-center'>
          <li>Rescue center</li>
          <li>Apply to adopt</li>
          <li>Volunteer</li>
          <li>Ways to give</li>
          <li>Events</li>
        </ul>
      </div>
      {/* Nav Right */}
      <div className='flex items-center xl:gap-8 lg:gap-5 md:gap-3'>
        <div className='items-center flex gap-3'>
          <div className='md:w-[12px]'>
            <img
              src={PhoneIcon}
              alt='phone-icon'
            />
          </div>
          <span className='md:text-sm'>631-249-7325</span>
        </div>
        <div>
          <Button
            icon={HeartIcon}
            text='Donate'
            backgroundColor='bg-primary'
            textColor='text-white'
          />
        </div>
      </div>
    </div>
  );
}
