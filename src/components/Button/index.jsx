export default function Button({
  icon,
  text,
  borderWidth,
  backgroundColor,
  textColor,
  borderColor,
  btn2,
}) {
  return (
    <button
      className={`flex gap-2 items-center ${backgroundColor} ${textColor} ${borderWidth} ${borderColor} ${
        btn2 ? 'rounded-xl lg:px-1' : 'rounded-full lg:px-5'
      } font-poppins font-semibold 
      lg:text-lg md:text-base lg:py-2.5  sm:py-1.5 sm:px-3 py-1 px-3 justify-center
      transition ease-in-out duration-700 hover:-translate-y-1 hover:shadow-xl
      `}
    >
      {icon ? (
        <div className='sm:w-[20px] lg:w-[25px] w-[18px]'>
          <img
            src={icon}
            alt={`${text}-btn`}
          />
        </div>
      ) : null}

      {text}
    </button>
  );
}
