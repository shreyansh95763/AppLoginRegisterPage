import MailIcon from '@mui/icons-material/Mail';
export const LoginByEmail = () => {
    return (
        <div className='input-section'>
            <div className='inputName-section display-flex'><MailIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>Email / Account Log in</h3></div>
            <input type='text' placeholder='Please input your email' />
        </div>
    )
}