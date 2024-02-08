import {NavLink} from 'react-router-dom';
export const Home = () => {
    // const styles=()=>{
    //     const navLink = document.getElementById('navlink');
    //     navLink.style.textDecoration="none";
    //     navLink.style.backgroundColor="red";
    // }
    return (
        <>
            <div className="header-home">
                <div style={{ paddingLeft: '13rem', paddingTop: '2rem' }}>
                    <img alt="logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" height="65" width="200" />
                </div>
                <div className="navbar-button">
                    <div className="language navbar-lang">
                        <select className="lang-section ">
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                    </div>
                    <NavLink to="/login" id="nav"  style={{textDecoration:"none"}}><button className="btn" type="submit" >Sign In</button></NavLink>
                </div>
            </div>
        </>
    );
}