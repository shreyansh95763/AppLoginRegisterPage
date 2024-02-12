import MailIcon from '@mui/icons-material/Mail';
export const LoginByPhone=(props)=>{
    return(
        <div className='input-section'>
                    <div className='inputName-section display-flex'><MailIcon style={{ color: "rgb(210, 184, 37)" }} /><h3>Phone Number</h3></div>
                    <input 
                    type="number"
                    name="phone"
                    value={props.phone}
                    onChange={props.handleInput}
                    placeholder='Please input your Phone'
                    autoComplete='off'
                    required
                     />
                </div>
   )
}
console.log("type",LoginByPhone)