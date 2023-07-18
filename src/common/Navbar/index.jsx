import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import HeartIcon from '../../assets/heart-img.svg';
import PhoneIcon from '../../assets/phone.svg';
import MobileToggler from '../../assets/mobile-nav-toggle.svg';
import Cross from '../../assets/cross.svg';
import { useState } from 'react';
export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <>
      <div className='flex sticky top-0 justify-between py-6 border-b-2 border-dark backdrop-blur-lg xl:px-[100px] lg:px-[60px] md:px-6 sm:px-10 px-8'>
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
        <div className='md:flex items-center xl:gap-8 lg:gap-5 md:gap-3 md:flex-row flex-col-reverse gap-2 hidden'>
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
        {/* Mobile Nav Icon */}
        <div
          className='md:hidden block w-[40px] my-auto'
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <img
            className={`${showMobileNav ? 'hidden' : ''}`}
            src={MobileToggler}
            alt='mobile-nav-toggler'
          />
          <img
            className={`m-auto ${showMobileNav ? '' : 'hidden'}`}
            src={Cross}
            width={30}
            alt='mobile-nav-toggler'
          />
        </div>
        {/* Mobile Menu */}
        <ul
          className={`w-full pb-9 px-9 absolute ${
            showMobileNav ? 'block' : 'hidden'
          } md:hidden bg-white-secondary top-[102px] left-0`}
        >
          {['Home', 'About', 'Contact', 'FAQs', 'Testimonials']?.map((ele) => (
            <li key={ele}>
              <div>
                <div className='inline-block cursor-pointer pt-9 font-secondary-font text-md capitalize transition-all '>
                  {ele}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Nav Bottom */}
      <div className='w-full justify-evenly p-6 flex fixed items-center gap-3 md:hidden bottom-0 backdrop-blur-lg'>
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
    </>
  );
}
