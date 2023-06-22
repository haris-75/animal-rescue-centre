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
         text-lg py-2.5 px-5`}
    >
      <img
        width={25}
        src={icon}
        alt={`${text}-btn`}
      />
      {text}
    </button>
  );
}
