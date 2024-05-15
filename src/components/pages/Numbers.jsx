import { numbers } from "../../constant";
import { Link } from "react-router-dom";

const Numbers = ({setProgress, progress}) => {

    const handleClick = () => {
        if (!isNaN(progress)) {
            setProgress(progress + 5);
        } else {
            setProgress(10); 
            
        }
    }

    return ( 
        <div className="p-8">
            <h1 className="text-2xl font-semibold mt-4 px-3">Numbers</h1>
            <div className=" ml-1 w-full flex flex-wrap justify-center">
                {numbers.map((number, index) => (
                    <div key={index} className=" sm:flex lg:w-1/8 ">
                        <div className="text-lg  mt-1 p-1 m-1 rounded-lg ">
                        <div className="text-lg bg-white m-3 p-3  border border-b mt-2 rounded-lg ">
                                <div className="text-green-900 mx-5">{number.number}</div>
                                <hr/>
                                <div className="text-1xl text-black">{number.hausa}</div>
                        </div>
                        </div>
                    </div>
                ))}

                
            </div>

            <div className="flex justify-around">
                <div className=' p-5  sm:p-5'>
                    <Link to='/alphabet'>
                    <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700'>Previous</button>
                    </Link>
                </div>

                <div className=' p-5  sm:p-5'>
                    <Link to='/days'>
                    <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700' onClick={handleClick}>Proceed</button>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Numbers;