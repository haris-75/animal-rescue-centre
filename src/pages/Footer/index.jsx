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
        <div className='grid md-lg:grid-cols-4 sm:grid-cols-2 md:gap-8 gap-4 pb-6 border-b-2 border-dark justify-start'>
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
                className='lg:text-xl md:text-lg text-base md:font-medium font-normal'
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
                className='lg:text-xl md:text-lg text-base md:font-medium font-normal'
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
          {/* Footer Part-4 */}
          <div className='flex flex-col lg:gap-6 gap-3'>
            <div className='grid grid-cols-6 grid-rows-1 '>
              <img
                className='lg:col-span-1 col-span-1 mt-[3px] -mb-[5px]'
                src={AddressIcon}
                alt='location-icon'
              />
              <div className='lg:col-span-5 col-span-5'>
                <p className='lg:text-xl md:text-lg text-base md:font-medium font-normal'>
                  PO Box 83644
                </p>
                <p className='lg:text-xl md:text-lg text-base md:font-medium font-normal'>
                  Middleton, 2452 Wilson
                </p>
              </div>
            </div>
            <div className='grid grid-cols-6 grid-rows-2 lg:gap-y-6 gap-y-3 items-center'>
              <img
                className='lg:col-span-1 col-span-1'
                src={PhoneIcon}
                alt='phone-icon'
              />
              <div className='lg:col-span-5 col-span-5'>
                <p className='lg:text-xl md:text-lg text-base md:font-medium font-normal'>
                  631-249-7325
                </p>
              </div>
              <img
                className='lg:col-span-1 col-span-1'
                src={MailIcon}
                alt='mail-icon'
              />
              <div className='lg:col-span-5 col-span-5'>
                <p className='lg:text-xl md:text-lg text-base md:font-medium font-normal'>
                  rsc@gmail.com
                </p>
              </div>
            </div>
            <div className=' flex md:gap-4 xl:gap-6 gap-2.5'>
              <img
                className='lg:col-span-1 col-span-1'
                src={TwitterIcon}
                alt='twitter-icon'
              />
              <img
                src={WhatsAppIcon}
                alt='whatsapp-icon'
              />
              <img
                src={InstaIcon}
                alt='insta-icon'
              />
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
