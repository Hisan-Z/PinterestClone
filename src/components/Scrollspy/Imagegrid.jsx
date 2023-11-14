import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./Imagegrid.css"

const ImageGrid = () => {

    return (
        <>
            <Row>
                <Col className='mt-5'>
                <div className='left'>
                    <a href="/search/food">
                    <div className='image-grid'>
                        <img src='https://s.pinimg.com/webapp/left-511a9304.png' className='img-1' ></img>
                        <img src='https://s.pinimg.com/webapp/topRight-d0230035.png' className='img-2'></img>
                        <img src='https://s.pinimg.com/webapp/right-88044782.png' className='img-4'></img>
                        <img src='https://s.pinimg.com/webapp/center-77497603.png' className='img-3'></img>
                    </div>
                    </a>
                </div>
                </Col>
                <Col>
                <div className='right'>

                    <div className="side-text" >
                        <div className='heading' >Your Ideas Await</div><div className='desc' >Unlock a world tailored to your interests. Whether you're searching 'easy chicken dinner' or home decor, you'll find what you love.</div>
                        <a href='/search/food'>

                        <div className='explore' style={{background: "rgb(195, 25, 82)",color:"rgb(255, 253, 158)"}}>Explore</div>
                        </a>
                        </div>
                </div>
                </Col>
            </Row>
            

        </>
    )
}

export default ImageGrid