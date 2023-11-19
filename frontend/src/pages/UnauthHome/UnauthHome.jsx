import React,{useEffect} from 'react';
import ImageGrid from '../../components/Scrollspy/Imagegrid';
import NavbarComponent from '../../components/Navbar/Navbar';
import Save from '../../components/Scrollspy/Save';
import SlideShow from '../../components/Scrollspy/Slideshow';
import SignForm from '../../components/Scrollspy/SignForm';
import './UnauthHome.css'


const UAHome = () => {
    return (
        <>
        <div id="scroll-spy">

            <div className='outer-wrapper' id="owrapper" >
                <div className='wrapper' id='home' >
                    <NavbarComponent />
                    <SlideShow />
                </div>
                <div className='wrapper' id='search' >
                    <ImageGrid />
                </div>
                <div className='wrapper' style={{ background: "" }} id='save'>
                    <Save />
                </div>
                <div className='wrapper' style={{ background: "" }} id='form'>
                    <SignForm />
                </div>
            </div>
        </div>
        </>
    )
}

export default UAHome