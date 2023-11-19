import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./Save.css"
const Save = () => {

    return (
        <>
            <Row>
                <Col className='mt-5'>
                    <div className='right '>

                        <div className="side-text" >
                            <div className='heading' >Save ideas you like</div><div className='desc' >Collect your favourites so you can get back to them later</div>
                            <a href='/search/home decor'><div className='explore' style={{ color: "rgb(218, 255, 246)", background: "rgb(0, 107, 108)" }}>Explore</div></a>
                        </div>
                    </div>
                </Col>
                <Col className='mt-5'>
                    <div className='left'>
                        <a href='/search/decor'>

                        <div className='image-grid' style={{
                            width: "687px"
                            , height: "695px"
                        }} >
                            <div className='image-1' >
                                <img src='https://s.pinimg.com/webapp/future-home-vibes-55a673b9.png' style={{ width: "400px", height: "420px" }}></img>
                                <div className='text-over fs-2'>
                                    Fern Future home vibes
                                </div>
                            </div>

                            <div className='image-2'>
                                <img src='https://s.pinimg.com/webapp/scandinavian-bedroom-917ad89c.png' className='fit' ></img>
                                <div className='text-over'>
                                    My scandivian bedroom
                                </div>
                            </div>
                            <div className='image-3'>

                                <img src='https://s.pinimg.com/webapp/deck-of-dreams-fb527bf1.png' className='fit ' ></img>
                                <div className='text-over fs-1'>
                                    The deck of my dreams
                                </div>
                            </div>
                            <div className='image-4'>

                                <img src='https://s.pinimg.com/webapp/bathroom-upgrade-48ebb8fc.png' className='fit' ></img>
                                <div className='text-over'>
                                    Our bathroom upgrade
                                </div>
                            </div>
                            <div className='image-5 '>

                                <img src='https://s.pinimg.com/webapp/serve-my-drinks-263547ea.png' className='fit' ></img>
                                <div className='text-over'>
                                    Serve my drink in style
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                </Col>

            </Row>


        </>
    )
}

export default Save