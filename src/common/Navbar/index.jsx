import Logo from '../../assets/rescue-center-logo.png';
import Button from '../../components/Button';
import HeartIcon from '../../assets/heart-img.svg';
import PhoneIcon from '../../assets/phone.svg';
import { useState } from 'react';
export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <div className='relative'>
      <div className='z-[50] flex sticky top-0 justify-between py-6 border-b-2 border-dark bg-white xl:px-[100px] lg:px-[60px] md:px-6 sm:px-10 px-8'>
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
          className='md:hidden block my-auto'
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <div
            className={`hamburger ${showMobileNav ? 'show-mobile-nav' : ''}`}
          ></div>
        </div>
      </div>
      {/* Mobile Menu */}
      <ul
        className={`w-full pb-9 px-9 absolute transition-all duration-1000 z-[20] ${
          showMobileNav ? 'top-[102px]' : '-top-[400%]'
        } md:hidden bg-white-secondary left-0`}
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
      {/* Mobile Nav Bottom */}
      <div className='w-full justify-evenly p-6 flex fixed items-center gap-3 md:hidden bottom-0 bg-white'>
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
