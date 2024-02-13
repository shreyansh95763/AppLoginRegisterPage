export const ProgressBar=({percentage,text})=>{
    const filledStyle = {
        width: `${percentage}`,
        // backgroundColor: 'gold', // Change color as needed
        background: 'linear-gradient(180deg, #F6E3A3 0%, #D2A753 100%)',
        height: '100%',
        borderRadius: '4px', // Optional: Add border radius for rounded corners
        position: 'relative', // Required for absolute positioning of text
      };
    
      const progressBarStyle = {
        width: '96%',
        height: '19px', // Adjust height as needed
        backgroundColor: '#ccc', // Change color as needed
        borderRadius: '7px', // Optional: Add border radius for rounded corners
        overflow: 'hidden', // Hide overflowing content
        position: 'relative', // Required for absolute positioning of text
        marginTop:'.25rem'
      };
    
      const textStyle = {
        position: 'absolute',
        top: '50%',
        width:"100%",
        left: '50%',
        
        transform: 'translate(-50%, -50%)',
        color: 'black', // Change text color as needed
      };
    return(<>
    <div style={progressBarStyle}>
      <div style={filledStyle}>
        <div style={textStyle} className="percentage-container"><div>{text}</div><div>{percentage}</div></div>
      </div>
    </div>
    </>)
}