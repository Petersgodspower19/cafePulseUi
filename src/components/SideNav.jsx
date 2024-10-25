import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import HeaderLink from "./Link";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";


function SideBar({ onClose }) {
    const [isClosing, setIsClosing] = useState(false); 

    const handleClose = () => {
        setIsClosing(true); 
        setTimeout(() => {
            onClose(); 
        }, 100); 
    };

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div
            className={`fixed inset-0 sideBar ${isClosing ? 'fade-out' : ''} bg-footer`}
            data-aos="fade-right"
            data-aos-duration="600"
        >
            <IoMdClose size={32} onClick={handleClose} className='mb-7' />
            <ul className='nav-list flex flex-col gap-3 mb-3'>
                <HeaderLink to="home">About</HeaderLink>
                <HeaderLink>Membership</HeaderLink>
                <HeaderLink>Event</HeaderLink>
                <HeaderLink>Contact</HeaderLink>
            </ul>
            <Button>Sign In</Button>
        </div>
    );
}

export default SideBar;
