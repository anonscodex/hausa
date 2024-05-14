import hand from '../assets/waving-hand-joypixels.gif';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Hero = () => {
    return ( 
        <>
        <div className="p-15 text-center m-15 ">
            <div className='flex flex-col items-center justify-between m-20'>
                <h2 className="text-5xl ">SANNU</h2>
                <img src={hand} alt='waving hand' className='h-32 w-32 ml-5 ' / >
            </div>

            
        </div>

        <div className=' p-20  sm:p-5'>
                <Link to='/alphabet'>
                 <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700'>Proceed</button>
                </Link>
            </div>
        </>
     );
}
 
export default Hero;