import MailIcon from '@mui/icons-material/Mail';
export const LoginByEmail = ({emails,handleInput}) => {
    return (
        <div className='input-section'>
            <div className='inputName-section display-flex'><MailIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>Email / Account Log in</h3></div>
            <input 
                type='email'
                name="email"
                value={emails}
                onChange={handleInput}
                placeholder='Please input your email'
                autoComplete="off"
                inputMode="email"
                required
            />
        </div>
    )
}