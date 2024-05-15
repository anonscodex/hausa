import { time } from "../../constant";
import { Link } from "react-router-dom";

const Times = () => {
    return ( 
        <div className="p-8">
                <h1 className="text-2xl font-semibold mt-4 px-3">Time</h1>
                <div className="m-1 w-full flex flex-wrap justify-center">
                    {time.map((t, index) => (
                        <div key={index} className=" sm:flex ">
                            <div  className="text-lg  mt-1 p-1 m-1 ">
                            <div  className="text-lg bg-white border border-b rounded-lg p-2">
                                    <div   className="mx-5 text-green-900">{t.english}</div>
                                    <hr/>
                                    <div  className="text-1xl text-black">{t.hausa}</div>
                            </div>
                            </div>
                        </div>
                    ))}
    
                    
                </div>
    
                <div className="flex justify-around">
                    <div className=' p-5  sm:p-5'>
                        <Link to='/months'>
                        <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700'>Previous</button>
                        </Link>
                    </div>
    
                    <div className=' p-5  sm:p-5'>
                        <Link to='/nouns'>
                        <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700'>Proceed</button>
                        </Link>
                    </div>
                </div>
            </div>
     );
}
 
export default Times;