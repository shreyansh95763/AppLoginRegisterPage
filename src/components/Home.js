import {NavLink} from 'react-router-dom';
import { HeaderHome } from './componentsHome/headerHome';
import { CarouselHome } from './componentsHome/Carousel';
import { UpSlider } from './componentsHome/upslider';
import { MenuBox1 } from './componentsHome/menuBox1';
import { MenuBox2 } from './componentsHome/menuBox2';
import { MenuBox3 } from './componentsHome/menuBox3';
import { Lottery } from './componentsHome/Lottery';
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
                <NavLink className="btn-links btn-submits" to="/AppLoginRegisterPage/login/" id="nav"  style={{textDecoration:"none"}}><button className="btn-submit" type="submit" >Sign In</button></NavLink>
                </div>
            </div>
        </>
    );
}