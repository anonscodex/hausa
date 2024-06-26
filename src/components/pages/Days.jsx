import { days } from "../../constant";
import { Link } from "react-router-dom";


const Days = ({setProgress, progress}) => {
    const handleClick = () => {
        if (!isNaN(progress)) {
            setProgress(progress + 5);
        } else {
            setProgress(30); 
            
        }
    }
    return ( 
            <div className="p-8">
                <h1 className="text-2xl font-semibold mt-4 px-3">Days of the Week</h1>
                <div className="m-1 w-full flex flex-wrap justify-center">
                    {days.map((day, index) => (
                        <div key={index} className=" sm:flex ">
                            <div  className="text-lg  mt-1 p-1 m-1 rounded-lg ">
                            <div  className="text-lg  text-black hover:bg-green-500 hover:text-white bg-white border border-b rounded-lg p-2">
                                    <div   className="mx-5 ">{day.english}</div>
                                    <hr/>
                                    <div  className="text-1xl">{day.hausa}</div>
                            </div>
                            </div>
                        </div>
                    ))}
    
                    
                </div>
    
                <div className="flex justify-around">
                    <div className=' p-5  sm:p-5'>
                        <Link to='/number'>
                        <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700'>Previous</button>
                        </Link>
                    </div>
    
                    <div className=' p-5  sm:p-5'>
                        <Link to='/months'>
                        <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700' onClick={handleClick}>Proceed</button>
                        </Link>
                    </div>
                </div>
            </div>
     );
}
 
export default Days;