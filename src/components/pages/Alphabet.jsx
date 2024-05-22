
import { Link } from "react-router-dom";


function Alphabet({setProgress, progress}) {
    const handleClick = () => {
        if (!isNaN(progress)) {
            setProgress(progress + 5);
        } else {
            setProgress(10); 
            
        }
    }

    const Alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    return (
        <>

<       h1 className="text-2xl font-semibold mt-6 px-3">Alphabet</h1>
        <div className="flex flex-wrap justify-center mt-16">
            {Alphabet.map((letter, index) => (
                <div key={index} className="bg-white text-black hover:bg-green-500 hover:text-white m-2 p-4 border border-gray-300 rounded-md text-center ">
                    <span className="text-3xl ">{letter}</span>
                </div>
            ))}

            
        </div>

        <div className="flex justify-between">
        <div className=' p-5  sm:p-5'>
            <Link to='/'>
            <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700'>Previous</button>
            </Link>
        </div>

        <div className=' p-5  sm:p-5'>
            <Link to='/number'>
            <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700' onClick={handleClick}>Proceed</button>
            </Link>
        </div>
        </div>
        </>
    );
}

export default Alphabet;
