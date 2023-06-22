export default function Button({
  icon,
  text,
  borderWidth,
  backgroundColor,
  textColor,
  borderColor,
}) {
  return (
    <button
      className={`flex gap-2 items-center ${backgroundColor} ${textColor} ${borderWidth} ${borderColor} rounded-full font-poppins font-semibold 
      lg:text-lg md:text-base lg:py-2.5 lg:px-5 md:py-1.5 md:px-3`}
    >
      <div className='md:w-[20px] lg:w-[25px]'>
        <img
          src={icon}
          alt={`${text}-btn`}
        />
      </div>

      {text}
    </button>
  );
}
