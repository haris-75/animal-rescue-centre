import Container from '../../common/Container';
export default function StatsPage() {
  const stats = [
    {
      textPrimary: '1400',
      textSecondary: 'Animals Rescued',
    },
    {
      textPrimary: '$1.4 Million',
      textSecondary: 'Raised',
    },
    {
      textPrimary: '940',
      textSecondary: 'Tails Found a Home',
    },
  ];
  return (
    <Container className='bg-dark py-[80px] '>
      <div className='flex flex-col gap-20'>
        <h1 className='text-white text-6xl font-bold w-[70%] m-auto text-center'>
          With your help, we accomplished these goals
        </h1>
        <div className='flex justify-center gap-10'>
          {stats?.map(({ textPrimary, textSecondary }) => (
            <div
              className='text-center flex flex-col gap-3.5'
              key={textPrimary + textSecondary}
            >
              <h2 className='text-6xl font-bold text-secondary'>
                {textPrimary}
              </h2>
              <p className='text-4xl font-bold text-white'>{textSecondary}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
