import React from "react";
import welcomeImage from "../Images/welcomepageimage.png"
const homePage=()=>{

    return(
        <><div className="">
        <div className="grid grid-cols-2 grid-rows-6  md:grid-cols-3 md:grid-rows-3   gap-3 pt-4">

            {/* Welcome the user with users own name */}
                <div
                    style={{ 
                            backgroundImage: `url(${welcomeImage})`,
                            backgroundSize: 'contain',
                            backgroundPosition:'right',
                            backgroundRepeat: 'no-repeat',
                            color: '#013567', // Text color
                            height:'200px',
                            // width:'300px',
                            textAlign: 'left', // Center align text
                            padding: '20px',
                            borderRadius: '20px'
                        }} 
                    className="bg-[#f2c6bd] border border-[#dda49c] col-span-2 md:col-span-2 p-20  rounded-3xl " >
                    <div className="text-2xl font-sans">Welcome</div>
                    <div className="text-5xl font-sans font-bold ">Manas Charchi</div>
                    <div className="rounded-3xl text-[rgb(245,227,227)] bg-[#f5a998] w-28 mt-8 ml-4 text-center p-2.5 text-sm">Odisha, IN</div>
                </div>

            {/* Inbox data */}

                <div className="bg-[#fcf0e3] rounded-3xl pt-2 text-center md:row-start-1 md:col-start-3 row-start-8 col-span-2  ">
                    <div className="text-2xl font-sans text-[#013567]">Notifications</div>
                </div>
            
            {/* Expance variation graph */}

                <div className="bg-[#eff6ff] md:row-span-2 md:col-span-1 row-span-2 rounded-3xl pt-44 col-span-2 text-center">
                    EXPANCE VARIATIONS
                </div>

            {/* Net Income Bar graph */}

                <div className="bg-pink-400 md:row-span-2 md:col-span-1 row-span-2 rounded-3xl pt-44 col-span-2 text-center">
                    NET INCOME
                </div>
            
            {/* Expences Total */}

                <div className="bg-[#94c998]  rounded-3xl md:row-start-2 md:col-start-3 row-start-2 p-20 text-center ">
                    EXPANCES
                </div>
            
            {/* Incomes Total */}

                <div className="bg-red-400 rounded-3xl md:row-start-3 md:col-start-3 col-start-2 row-start-2 p-20 text-center">
                    INCOMES
                </div>
            
        </div>
        </div>
        </>
    )
}
export default homePage