import Link from 'next/link';
const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>FellowshipFavors</h1>
          <p className='py-6 text-lg leading-loose'>
            Neighbors helping neighbors. FellowshipFavors is a community of people who help each other by sharing their time, skills, and resources. We are building a community of people who are willing to help each other out. We believe that by helping each other, we can build a stronger community.
          </p>
          <Link href='/chat' className='btn btn-secondary '>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
