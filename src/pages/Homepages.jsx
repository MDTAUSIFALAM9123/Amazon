import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div>
      <h1 className='text-center'>Welcome to Amazon Clone</h1>
     <div className='flex justify-center gap-4 mt-4'>
       <Link to={"/sales"}>Sales</Link>
      <Link to={"/today-sales"}>Today's Sales</Link>
      <Link to={"/support"}>Customer Support</Link>
     </div>
    </div>
    </>

  );
}
