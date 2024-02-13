export const ProgressBar=({ percentage })=>{
    const filledStyle = {
        width: `${percentage}%`,
        backgroundColor: 'green', // Change color as needed
        height: '100%',
        borderRadius: '4px', // Optional: Add border radius for rounded corners
        position: 'relative', // Required for absolute positioning of text
      };
    
      const progressBarStyle = {
        width: '100%',
        height: '20px', // Adjust height as needed
        backgroundColor: '#ccc', // Change color as needed
        borderRadius: '4px', // Optional: Add border radius for rounded corners
        overflow: 'hidden', // Hide overflowing content
        position: 'relative', // Required for absolute positioning of text
      };
    
      const textStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white', // Change text color as needed
      };
    return(<>
    <div style={progressBarStyle}>
      <div style={filledStyle}>
        <div style={textStyle}>{percentage}%</div>
      </div>
    </div>
    </>)
}