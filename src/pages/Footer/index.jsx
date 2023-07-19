import Container from '../../common/Container';
import Logo from '../../assets/rescue-center-logo.png';
import Heart from '../../assets/heart-fill.svg';
import TwitterIcon from '../../assets/twitter-icon.svg';
import InstaIcon from '../../assets/insta-icon.svg';
import WhatsAppIcon from '../../assets/whatsapp-icon.svg';
import MailIcon from '../../assets/mail-icon.svg';
import AddressIcon from '../../assets/address-icon.svg';
import PhoneIcon from '../../assets/phone.svg';
export default function Footer() {
  const footerItems1 = [
    'Adopt a Pet',
    'Adoptable Dogs',
    'Adoptable Dogs',
    'Become a Foster',
    'Rescue Center',
    'Get Involved',
  ];
  const footerItems2 = [
    'Ways to Donate',
    'Upcoming Events',
    'Outreach Programs',
    'Who We Are',
    'Contact Us',
    'Shop With Purpose',
  ];
  return (
    <Container>
      <div className='pt-[50px] pb-[120px] flex flex-col xl:gap-[40px] lg:gap-[18px] justify-center items-center'>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:gap-8 gap-6 pb-6 border-b-2 border-dark justify-start'>
          {/* Footer Part-1 */}
          <div className='flex flex-col md:gap-5 gap-3'>
            <img
              width={100}
              src={Logo}
              alt='rescue-center-logo'
            />
            <div>
              <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold'>
                FOREVER
              </h1>
              <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold flex'>
                HOMES
                <span>
                  <img
                    src={Heart}
                    alt='filled-heart'
                  />
                </span>
              </h1>
            </div>
            <p className='lg:text-xl md:text-lg text-base font-bold'>
              Help Save Lives
            </p>
          </div>
          {/* Footer Part-2 */}
          <div className='flex flex-col md:gap-4 gap-2'>
            {footerItems1?.map((item) => (
              <p
                className='lg:text-xl md:text-lg text-base md:font-bold font-medium'
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
          {/* Footer Part-3 */}
          <div className='flex flex-col md:gap-4 gap-2'>
            {footerItems2?.map((item) => (
              <p
                className='lg:text-xl md:text-lg text-base md:font-bold font-medium'
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
          {/* Footer Part-4 */}
          <div className='grid grid-cols-8 grid-rows-5 md:gap-5 gap-2.5'>
            <img
              className='col-span-1 row-span-2'
              src={AddressIcon}
              alt='location-icon'
            />
            <div className='col-span-7 row-span-2'>
              <p className='lg:text-xl md:text-lg text-base md:font-bold font-medium'>
                PO Box 83644
              </p>
              <p className='lg:text-xl md:text-lg text-base md:font-bold font-medium'>
                Middleton, 2452 Wilson
              </p>
            </div>
            <img
              className='col-span-1'
              src={PhoneIcon}
              alt='phone-icon'
            />
            <div className='col-span-7'>
              <p className='lg:text-xl md:text-lg text-base md:font-bold font-medium'>
                631-249-7325
              </p>
            </div>
            <img
              className='col-span-1'
              src={MailIcon}
              alt='mail-icon'
            />
            <div className='col-span-7'>
              <p className='lg:text-xl md:text-lg text-base md:font-bold font-medium'>
                pet_home@gmail.com
              </p>
            </div>
            <img
              className='col-span-1'
              src={TwitterIcon}
              alt='twitter-icon'
            />
            <div className='col-span-7 flex md:gap-5 gap-2.5'>
              <div>
                <img
                  src={WhatsAppIcon}
                  alt='whatsapp-icon'
                />
              </div>
              <div>
                <img
                  src={InstaIcon}
                  alt='insta-icon'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='pt-6'>
          <h1 className='lg:text-4xl md:text-3xl text-2xl text-center font-bold'>
            We are not just a rescue,
            <span className='text-primary'>we are a refuge</span>
          </h1>
        </div>
      </div>
    </Container>
  );
}
