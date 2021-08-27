import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons";

const Logo =  () => {
    return (
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href={`/`}>
            <div className="sidebar-brand-icon">
                <FontAwesomeIcon icon={faBookOpen}/>
            </div>
            <div className="sidebar-brand-text mx-3">Web Shop</div>
        </a>
    );
}


export default Logo;
