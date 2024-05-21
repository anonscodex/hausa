import { verbs } from "../../constant";
import { Link } from "react-router-dom";

const Verbs = ({progress, setProgress}) => {
    
        const handleClick = () => {
            if (!isNaN(progress)) {
                setProgress(progress  + 1);
            } else {
                setProgress(35); 
                
            }
        }
    
        return (
            <div className="p-8">
            <h1 className="text-2xl font-semibold mt-4 px-3">Verbs</h1>
            <div className=" ml-1 w-full flex flex-wrap justify-center">
                {verbs.map((verb, index) => (
                    <div key={index} className=" sm:flex lg:w-1/8 ">
                        <div className="text-lg  mt-1 p-1 m-1 rounded-lg ">
                        <div className="text-lg text-black hover:bg-green-500 hover:text-white bg-white m-3 p-3  border border-b mt-2 rounded-lg ">
                                <div className=" mx-5">{verb.english}</div>
                                <hr/>
                                <div className="text-1xl ">{verb.hausa}</div>
                        </div>
                        </div>
                    </div>
                ))}
    
                
            </div>
    
            <div className="flex justify-around">
                <div className=' p-5  sm:p-5'>
                    <Link to='/nouns'>
                    <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700'>Previous</button>
                    </Link>
                </div>
    
                <div className=' p-5  sm:p-5'>
                    <Link to='/greeting'>
                    <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700' onClick={handleClick}>Proceed</button>
                    </Link>
                </div>
            </div>
        </div>  
     );
}
 
export default Verbs;