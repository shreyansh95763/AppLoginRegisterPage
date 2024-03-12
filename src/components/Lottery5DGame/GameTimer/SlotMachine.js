import React, { useState, useEffect } from 'react';

const SlotMachine = () => {
  const [slots, setSlots] = useState([[0,1,6,7,8,9,2,3,4,5],[6,1,3,5,9,2,4,0,7,8], [7,2,5,6,1,0,3,8,4,9],[1,3,5,7,9,2,4,6,8,0],[5,3,8,1,6,0,2,9,4,7]]);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    let interval;
    if (isSpinning) {
      interval = setInterval(() => {
        setSlots(prevSlots =>
          prevSlots.map(column => [
            (column[0] + 1) % 10,
            (column[1] + 1) % 10,
            (column[2] + 1) % 10,
          ])
        );
      }, 100); // Adjust the speed of spinning here
    }
    return () => clearInterval(interval);
  }, [isSpinning]);

//   const handleSpin = () => {
//     setIsSpinning(true);
//     setTimeout(() => {
//       setIsSpinning(false);
//     }, 3000); // Adjust the duration of spinning here
//   };

  return (
    <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',color:"wheat" }}>
    <div className='slot-outer-div'>
      <div  style={{ display: 'flex',border:".7rem solid #d29c3e",borderRadius:".5rem" }}>
          <div key={1} className='slot-machine-container' style={{  overflow: 'hidden' }}>
             <div className='slot-column'>{
                    slots[0].map((val)=>(
                        <div className='slot-number' style={{background:"linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",color: "#8f5206",border:"1px solid #8F5206"}} >{val}</div>
                    ))}
             </div>
             <div className='slot-column'>{
                    slots[1].map((val)=>(
                        <div className='slot-number' >{val}</div>
                    ))}
             </div>
             <div className='slot-column'>{
                    slots[2].map((val)=>(
                        <div className='slot-number'>{val}</div>
                    ))}
             </div>
             <div className='slot-column'>{
                    slots[3].map((val)=>(
                        <div className='slot-number'>{val}</div>
                    ))}
             </div>
             <div className='slot-column'>{
                    slots[4].map((val)=>(
                        <div className='slot-number'>{val}</div>
                    ))}
             </div>
        </div>
      </div>
      </div>
      {/* <button onClick={handleSpin} disabled={isSpinning}>
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button> */}
    </div>
  );
};

export default SlotMachine;
