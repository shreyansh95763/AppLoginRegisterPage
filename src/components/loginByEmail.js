import MailIcon from '@mui/icons-material/Mail';
export const LoginByEmail = ({email,handleInput}) => {
    return (
        <div className='input-section'>
            <div className='inputName-section display-flex'><MailIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>Email / Account Log in</h3></div>
            <input type='email'
                name="text"
                value={email}
                onChange={handleInput}
                placeholder='Please input your email'
                autoComplete="off"
                required
            />
        </div>
    )
}