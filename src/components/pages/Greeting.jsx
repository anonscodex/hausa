import { Link } from "react-router-dom";
import { greeting } from "../../constant";

const Greeting = ({setProgress, progress}) => {

    const handleClick = () => {
        if (!isNaN(progress)) {
            setProgress(progress + 5);
        } else {
            setProgress(40); 
            
        }
    }

    return ( 
        <div className="p-8">
            <h1 className="text-2xl font-semibold mt-4 px-3">Greetings</h1>
            <div className="ml-1 w-full flex flex-wrap justify-center">
                {greeting.map((greet, index) => (
                    <div key={index} className=" sm:flex lg:w-1/8">
                        <div  className="text-lg   mt-1 p-1 m-1 rounded-lg ">
                        <div  className="text-lg text-black hover:bg-green-500 hover:text-white bg-white m-3 p-3 mt-2 border border-b rounded-lg ">
                                <div   className="mx-5 ">{greet.meaning}</div>
                                <hr/>
                                <div  className="text-1xl ">{greet.hausa}</div>
                        </div>
                        </div>
                    </div>
                ))}

                
            </div>

            <div className="flex justify-around">
                <div className=' p-5  sm:p-5'>
                    <Link to='/verbs'>
                    <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700'>Previous</button>
                    </Link>
                </div>

                <div className=' p-5  sm:p-5'>
                    <Link to='/expression'>
                    <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700' onClick={handleClick}>Proceed</button>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Greeting;