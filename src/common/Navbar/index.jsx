import Logo from '../../assets/logo.png';
import Button from '../../components/Button';
import HeartIcon from '../../assets/heart-img.svg';
import PhoneIcon from '../../assets/phone.svg';
export default function Navbar() {
  return (
    <div className='flex sticky top-0 justify-between py-6 border-b-2 border-dark bg-white-secondary xl:px-[100px] lg:px-[60px]'>
      {/* Nav Left */}
      <div className='flex gap-4'>
        <div className='p-1.5'>
          <img
            width={40}
            src={Logo}
            alt='logo'
          />
        </div>
        <ul className='flex gap-5 text-dark font-medium text-lg items-center'>
          <li>Rescue center</li>
          <li>Apply to adopt</li>
          <li>Volunteer</li>
          <li>Ways to give</li>
          <li>Events</li>
        </ul>
      </div>
      {/* Nav Right */}
      <div className='flex gap-8'>
        <div className='items-center flex gap-3'>
          <div>
            <img
              src={PhoneIcon}
              alt='phone-icon'
            />
          </div>
          <span>631-249-7325</span>
        </div>
        <Button
          icon={HeartIcon}
          text='Donate'
          backgroundColor='bg-primary'
          textColor='text-white'
        />
      </div>
    </div>
  );
}
