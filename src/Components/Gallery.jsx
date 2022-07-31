import React, { useState } from 'react'
import {HiOutlineX} from "react-icons/hi"


const Gallery = () => {

    const data = [
        {
            id:1,
            img: "https://images.unsplash.com/photo-1658679684720-12041e151b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:2,
            img: "https://images.unsplash.com/photo-1658816682611-00db7e16ca8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:3,
            img: "https://images.unsplash.com/photo-1582765805106-0ff2380b9596?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:4,
            img: "https://images.unsplash.com/photo-1658518815743-af2e2ff993af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:5,
            img: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:6,
            img: "https://images.unsplash.com/photo-1658901205299-9d1c95b1eb3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:7,
            img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:8,
            img: "https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:9,
            img: "https://images.unsplash.com/photo-1592492159418-39f319320569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:10,
            img: "https://images.unsplash.com/photo-1556139902-7367723b7e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:11,
            img: "https://images.unsplash.com/photo-1592587445145-04498cbba81c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:12,
            img: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:13,
            img: "https://images.unsplash.com/photo-1619963258837-b83f3406cfcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:14,
            img: "https://images.unsplash.com/photo-1658901742266-2b1c9a7f84f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:15,
            img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:16,
            img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:17,
            img: "https://images.unsplash.com/photo-1468234847176-28606331216a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:18,
            img: "https://images.unsplash.com/photo-1658901205299-9d1c95b1eb3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:19,
            img: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvbGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            id:20,
            img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        }

    ];

    const [box,setBox] = useState(false);
    const imageClicked = () =>{
        setBox(!box);
    }

    const crossButton = () =>{
        setBox(!box);
    }

    

  return (
    <>

    <center className={box?"flex justify-center items-center":"hidden"}>
        {/* div on Click */}
        <div className='h-[42vh] sm:h-[50vh] fixed backdrop-blur-[10px] mx-auto mt-[26rem] sm:mt-[31rem] bg-[#46085e]/60 z-[2] w-[95%] md:w-[98%] lg:w-[50%] lg:rounded-xl'>
            <HiOutlineX onClick={crossButton} className="text-white cursor-pointer text-3xl ml-[92%] mt-2"/>
            <p className='text-white font-myFont mt-24 sm:mt-[8.5rem] lg:mt-[7.5rem] text-2xl md:text-3xl tracking-[0.2rem]'>JUST START YOUR JOURNEY WITH A SMILE</p>
        </div>
        {/* div on Click */}
        </center>
   
       <div className='flex flex-col mx-auto justify-center items-center md:flex-row md:flex-wrap md:w-[100%]'>
       {
            data.map((d,index)=>{
                return <>
                    <div key={index} className='mt-12 md:w-[50%] lg:w-[33%]'>
                        <img onClick={imageClicked} className='px-3 sm:w-[90vw] md:w-[200vw] h-[40vh] lg:w-[45vw] sm:h-[50vh]' src={d.img} alt={d.img}/>
                    </div>
                </>
            })
        }
       </div>
    </>
  );
}

export default Gallery