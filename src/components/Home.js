import { HeaderHome } from './componentsHome/headerHome';
import { CarouselHome } from './componentsHome/Carousel';
import { UpSlider } from './componentsHome/upslider';
import { MenuBox1 } from './componentsHome/menuBox1';
import { MenuBox2 } from './componentsHome/menuBox2';
import { MenuBox3 } from './componentsHome/menuBox3';
import { Lottery } from './componentsHome/Lottery';
import { WinningInfo } from './componentsHome/winningInformation/WinningInfo';
import { BottomNavigationBar } from './bottomNavigationBar';
import { EarningChart } from './componentsHome/earningChart/earningChart';
import { MiniGame } from './componentsHome/originalSection/miniGame';
import { Slots } from './componentsHome/slotSection/slots';
import { Sports } from './componentsHome/sports/Sports';
import { Casino } from './componentsHome/casino/Casino';
import { PVC } from './componentsHome/PVR/pvr';
import { Fishing } from './componentsHome/Fishing/Fishing';
import { useState } from 'react';
import { Popular } from './componentsHome/popular/popular';
import { useNavigate } from 'react-router-dom';
export const Home = () => {
    const [getIndex , setIndex] = useState('lottery');
    const navigate = useNavigate();
    const handleEvents=(newPage)=>{
        setIndex(newPage);
        return navigate(`#lottery`)
    }
   
    return (  
        <>
            <div className="home-body">
                <HeaderHome />
                <div className='main-body'>
                <CarouselHome />
                <UpSlider />
                <MenuBox1 handleEvents={handleEvents} />
                <MenuBox2 handleEvents={handleEvents}/>
                <MenuBox3 handleEvents={handleEvents}/>
                <div id="lottery">
                {getIndex==='lottery' &&  <Lottery />}
                {getIndex==='original' &&  <MiniGame />}
                {getIndex==='slots' &&  <Slots />}
                {getIndex==='sports' &&   <Sports />}
                {getIndex==='popular' &&   <Popular />}
                {getIndex==='casino' &&   <Casino />}
                {getIndex==='pvc' &&  <PVC />}
                {getIndex==='fishing' &&  <Fishing />}
                </div>
               

                <WinningInfo />
                <EarningChart />
                </div>
                <BottomNavigationBar />
            </div>
        </>
    );
}