import './ContentRightImg.css'
import imgright from '../imgs/img.png'
// importing image by name from folder by relative path


export default function ContentRightImg(){
    return(
        // <img src="https://cdn.pixabay.com/photo/2023/05/03/22/43/tennis-7968714_640.png" alt=""  className="mt-4 ContentRightImg"/>~
        <img src={imgright} alt=""  className="mt-4 ContentRightImg"/>
    )   
};