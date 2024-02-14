import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
export const MainHeaderWinGo = () => {
    const [ silentBtn, setSilentBtn] = useState(true);
    function silentBtnClick(){
        setSilentBtn(!silentBtn);
    }
    function backButton(){
        <Navigate to="/AppLoginRegisterPage/" />
    }
    return (<>
    <div className="main-heading-section wingo-upper-heading">
                <h4 onClick={backButton} style={{cursor:"pointer"}}><NavLink className="btn-links" style={{color:"white",fontSize:".1rem"}} to="/AppLoginRegisterPage/"><ArrowBackIosIcon style={{fontSize:"1.2rem"}}/></NavLink></h4>
                <div className='heading'><img alt="pic Not found" style={{height:"3rem",width:"7rem"}} src='https://ossimg.bdgadminbdg.com/IndiaBDG/other/h5setting_20240110060804ufv8.png' /><div></div></div>
                <div className="wingo-care-section">
                    <div></div>
                    { silentBtn ? 
                    <img onClick={silentBtnClick} alt='silent-on-btn' src='https://www.bdggame.in/assets/png/voice-off-633f5ccc.png' />
                    :<img onClick={silentBtnClick} alt='silent-off-btn' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAI9/vQqATwHGRUoHQYjKwCnzmPwAAAwJJREFUaN7tWd2aqyAMlEDkR1De/2nPsu6WtW0Y0O7F+bZz1yIzgYQE4/TGG2/8IczG8UaUM6XD/4YpZ22TusRufMw36J8DlL+xnGZXi84/QXVoOfyvzhlv8xE6Hfkr4nyJntgFdTBS5QJv5mlNdGqXZv62mtMT67iMrF+PxvJjcAnha++tez6xjKWbMeVhM2S+/6Ivs0SBKs1VrguKdsdVeiCwjQmsn/zaTQ18+7UaZPr5dUdk53sn0yA/g6DIn2DzYb57CFPMjx/Pd6Ax/y7ToEBUvfFZ+bEA3TLI0n3KfOXHAlPg+MFezyJGKvP81CsgADiA5t8T4DJNTb8moIADkIDTIJgsiGcgUOyzzQJTJoXzAmsGGWkDFsAtsm0CBQzAAqYdI9zWNz7qcqq8kaPINoOEWkUjUb6BkiTgStoQLWwMKpsPIPUggGuzL+m9fQGo0OH5QeNGpolijIad0wc1TSpwlXmyk7If51rF76DuKpy6SUgsogui6Pzs7n0p5CK5+jvJBany3ysIse5EHztpAfzIUzBi52Tr2vDp3OMxCwGxiUG09kevFwSUmJC1kEbs8+gNwwJ1AhKumXGo0o1O+H8EGlukhwRIcHKUnWwnIAwEajz6/rS5ihlnK5ZKZWLuLq9GTKc8nCpISmn+RckuDdk5GfEI2ufpmsSMY84VHHV8Q9cKszxqp0bJzLyXTF/0WtU1vqToV34QvSAe63vDAVYJJPXaIgy6zouXgNS8ni/o6mjL1TF6077/M7r8dgOXV3D7BhAINmDAlSUEON/WKD4DgjtgalI4gaXjFZVrDjj3isqoU6HBizhochA0LgAzQJMjXWqGYAf4S+0czE/zpYYU5ldXWmqYX69jTTs/9/egAT9oa+I9FfhBY7Z3m9xuDeAXKhgFmKBjBquFzXH0gQH6C9VImyQbnG1dADBU/UAR5gf2xDrv4A7zcQsksjOr+vxTBcf76uAeYpgtt4DpMRSTxK4XFDvjH+oqojcv/tTobdyPFG3szDy98cYbfwf/ACnpTX1HX6f8AAAAAElFTkSuQmCC' />
                    }
                </div>
            </div>
    </>)
}