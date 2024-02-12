import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
export const UpSlider = () => {
    return (
        <>
            <div className='up-slider'>
                <VolumeUpIcon style={{ color: "#D2A753"}} />
                <div className="text-carousel-container">
                    <div className="text-carousel">
                        <p>Please Remember The Upi Id Of Your Paymenteach animation.</p>
                    </div>
                    <div className="text-carousel">
                        <p>This is the second line of text each animation state is represented.</p>
                    </div>
                    <div className="text-carousel">
                        <p>This is the third line of text each animation state is represented.</p>
                        {/* Add more paragraphs for additional lines of text */}
                    </div>
                </div>
                <button className='display-flex' type='button'><EnergySavingsLeafIcon style={{fontSize:"1rem",color: "#313131"}} />Detail</button>
            </div>
        </>
    );
}