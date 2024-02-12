import {NavLink} from 'react-router-dom';
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
export const Home = () => {
    // const styles=()=>{
    //     const navLink = document.getElementById('navlink');
    //     navLink.style.textDecoration="none";
    //     navLink.style.backgroundColor="red";
    // }
    return (
        <>
            <div className="home-body">
                <HeaderHome />
                <div className='main-body'>
                <CarouselHome />
                <UpSlider />
                <MenuBox1 />
                <MenuBox2 />
                <MenuBox3 />
                <Lottery />
                <WinningInfo />
                <EarningChart />
                </div>
                <BottomNavigationBar />
            </div>
        </>
    );
}