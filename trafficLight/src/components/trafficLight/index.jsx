// import React, { useState, useEffect } from 'react';
// import './index.css';

// const TrafficLight = () => {
//   const [currentColor, setCurrentColor] = useState('red');

//   useEffect(() => {
//     const cycleColors = () => {
//       switch (currentColor) {
//         case 'red':
//           setCurrentColor('green');
//           break;
//         case 'green':
//           setCurrentColor('yellow');
//           break;
//         case 'yellow':
//           setCurrentColor('red');
//           break;
//         default:
//           break;
//       }
//     };

//     const timer = setInterval(cycleColors, 2000);

    
//     return () => {
//       clearInterval(timer);
//     };
//   }, [currentColor]);

//   return (
//    <div>
//     <div className='title'>

// <h1 className='T'>T</h1>
// <h1 className='R'>r</h1>
// <h1 className='A'>a</h1>
// <h1 className='F'>f</h1>
// <h1 className='F'>f</h1>
// <h1 className='I'>i</h1>
// <h1 className='C'>c</h1>
// <br></br>
// <h1 className='L'>L</h1>
// <h1>i</h1>
// <h1 className='G'>g</h1>
// <h1 className='H'>h</h1>
// <h1 className='T'>T</h1>

//     </div>
//     <div className='trafficLight'>
//     <button>
//         <div className={currentColor === 'red' ? 'color-red' : 'color-black'}></div>
//       </button>
         
     
//       <button>
//         <div className={currentColor === 'yellow' ? 'color-yellow' : 'color-black'}></div>
//       </button>
//       <button>
//         <div className={currentColor === 'green' ? 'color-green' : 'color-black'}></div>
//       </button>
      
//     </div>
//     </div>
//   );
// };

// export default TrafficLight;



import React, { useState } from 'react'
import './index.css'
const TrafficLight = () => {
    const [color, setColor] = useState("yellow")

    let colors = ["red", "yellow", "green"]
  return (
    <div className='container'>
        {colors.map((colorString) => {
            return (
                <div 
                key={colorString} 
                onClick={() => setColor(colorString)}  
                className={`circle    ${color === colorString ? colorString : "" }      `}>
                </div>
            )
        })}
    </div>
  )
}



import React, { useState } from 'react'
import './index.css'
const TrafficLight = () => {
    const [color, setColor] = useState("yellow")

    let colors = ["red", "yellow", "green"]
  return (
    <div className='container'>
        {colors.map((colorString) => {
            let classesString = "circle "
            if (color === colorString) {
                classesString += colorString;
            }
            return (
                <div 
                key={colorString} 
                onClick={() => setColor(colorString)}  
                className={classesString}>
                </div>
            )
        })}
    </div>
  )
}

export default TrafficLight