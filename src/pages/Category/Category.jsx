import React from 'react';
import NavbarComponent from '../../components/Navbar/Navbar';
import { SERVER_PIN_URL } from '../../constants/urls';
import { useLocation } from 'react-router-dom';
import "../../App.css"
import useFetch from '../../hooks/useFetch';
import Icon from "react-icons-kit";
import { ic_keyboard_backspace_twotone } from "react-icons-kit/md/ic_keyboard_backspace_twotone";
import Pin from '../../components/Pin/Pin';
import StackGrid from 'react-stack-grid';

const Category = () => {

    const location = useLocation()
    const pid = location.pathname.split('/')[2]
    const curr = useFetch(`${SERVER_PIN_URL}/${pid}`).data
    const { data } = useFetch(`${SERVER_PIN_URL}/category/${pid}`)
    const src_link = []
    data.map((objects, index) => {
        src_link.push([objects.img_source, objects._id])
    })

    return (
        <>
            <NavbarComponent />
            <button className="back-button left-top" onClick={() => { window.history.back() }}>
                <Icon icon={ic_keyboard_backspace_twotone} size={30} />
            </button>
            <center className='image mt-3' >
                <img src={curr.img_source} style={{ maxHeight: "35vh", minWidth: "40%" }} id={curr._id} ></img>
                <span className="text mx-auto" style={{ bottom: "40%", fontSize: "3rem", width: "40%", left: "30%" }}>{curr.title}</span>
                <button className='share'>Share</button>

            </center>
            <center className='mx-auto pt-3 px-5 w-50'>
                <span >{curr.description}</span>
            </center>
            <div className='mt-5'>

            <StackGrid
                columnWidth={
                    window.innerWidth > 768
                        ? (window.innerWidth - 40) / 5
                        : (window.innerWidth - 20) / 2
                }
                monitorImagesLoaded={true}
                itemComponent="div"
                gutterWidth={20}
                gutterHeight={20}
                style={{ zIndex: 1 }}
            // horizontal={true}
            >

                {src_link.map((link, index) => (
                    <a role="button" href={"/pins/" + link[1]}>
                        <Pin
                            source={link[0]}
                            key={"Div-" + index}
                            id={"Div-" + index}
                            style={{ row_no: 100 }}
                        />
                    </a>
                ))}
                
            </StackGrid>
            </div>

        </>
    )

}

export default Category