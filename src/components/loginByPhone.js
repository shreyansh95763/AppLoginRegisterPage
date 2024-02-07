import MailIcon from '@mui/icons-material/Mail';
export const LoginByPhone=()=>{
    return(
        <div className='input-section'>
                    <div className='inputName-section display-flex'><MailIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>Phone Number</h3></div>
                    <input type='phone' placeholder='Please input your Phone' />
                </div>
   )
}