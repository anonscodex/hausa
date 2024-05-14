import { useState } from "react"

const Header = () => {

    const[mobileOpen, setMobileOpen] = useState(false)

    

const toggleNavbar = () => {
    setMobileOpen(!mobileOpen)
}



return(
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-center items-center">

                
                <div className="flex items-center  flex-shrink-0">
                    
                    <span className="text-2xl tracking-tight text-center">Learn<span className="text-green-500">Hausa</span></span>
                </div>
              

               

                
            </div>
                
        </div>
    </nav>
        
    );
}
 
export default Header;

//<ul className="hidden lg:flex ml-14 space-x-12">
                    
//{navItems.map((items, index ) => (
//<li key={index}>
 //   <a href={items.href}>{items.label}</a>
//</li>
//)) }

//</ul>


//<div className="lg:hidden md:flex flex-col justify-end">
   //                 <button onClick={toggleNavbar}>
   //                     {mobileOpen? <X /> : <Menu />}
       //             </button>
     //           </div>


    // {mobileOpen && (
     //   <div className="fixed w-full lg:hidden bg-neutral-900 flex flex-col p-12 justify-center items-center right-0 z-20 ">
      //      <ul>
      //          {navItems.map((items, index) => (
      //              <li key={index} className="py-4">
       //                 <a href={items.href}>{items.label}</a>
       //             </li>
       //         )
        //    )}
                
         //   </ul>
       // </div>
   // )

  //  }