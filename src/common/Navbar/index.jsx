import Logo from '../../assets/logo.png';
import Button from '../../components/Button';
import HeartIcon from '../../assets/heart-img.svg';
import PhoneIcon from '../../assets/phone.svg';
export default function Navbar() {
  return (
    <div className='flex sticky top-0 justify-between py-6 border-b-2 border-dark bg-white-secondary xl:px-[100px] lg:px-[60px] md:px-6 sm:px-10 px-8'>
      {/* Nav Left */}
      <div className='flex lg:gap-4 md:gap-2'>
        <div className='p-1.5'>
          <img
            width={40}
            src={Logo}
            alt='logo'
          />
        </div>
        <ul className='md:flex xl:gap-5 md-lg:gap-3 md:gap-2 text-dark font-medium xl:text-lg md-lg:text-base md:text-xs items-center hidden'>
          <li>Rescue center</li>
          <li>Apply to adopt</li>
          <li>Volunteer</li>
          <li>Ways to give</li>
          <li>Events</li>
        </ul>
      </div>
      {/* Nav Right */}
      <div className='sm:flex items-center xl:gap-8 lg:gap-5 sm:gap-3 sm:flex-row flex-col-reverse gap-2 hidden'>
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
      {/* Mobile Menu */}
      {/* <ul className='mobile-menu hidden md:flex md:gap-12 md:text-sm lg:text-base'>
        <li className='relative'>
          <div>
            <div className='inline-block cursor-pointer py-9 font-secondary-font text-sm capitalize transition-all  nav_active font-bold'>
              Home
            </div>
          </div>
        </li>
        <li className='relative'>
          <div>
            <div className='inline-block cursor-pointer py-9 font-secondary-font text-sm capitalize transition-all '>
              About
            </div>
          </div>
        </li>
        <li className='relative'>
          <div>
            <div className='inline-block cursor-pointer py-9 font-secondary-font text-sm capitalize transition-all '>
              Reviews
            </div>
          </div>
        </li>
        <li className='relative'>
          <div>
            <div className='inline-block cursor-pointer py-9 font-secondary-font text-sm capitalize transition-all '>
              Contact
            </div>
          </div>
        </li>
        <li className='relative'>
          <div>
            <div className='inline-block cursor-pointer py-9 font-secondary-font text-sm capitalize transition-all '>
              Blog
            </div>
          </div>
        </li>
      </ul> */}
    </div>
  );
}
