
import { NavLink } from "react-router-dom";

export const AviatorNavbar = () => {
    return (<>
        <div className="nav-container">
            <div className="logo-section">
                <div className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wKIZSLLVMvyjKRDAYs_JdwKN6rDlhsrG0A&usqp=CAU" />
                </div>
                <div className="main-heading"> <h1>Aviator </h1></div>
            </div>
            <div className="link-section">
                <ul>
                    <li>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/">Course</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/">Events</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/">Topics</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link logIn-link" to="/">Log In</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link join-link" to="/">Sing Up</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </>
    )
}