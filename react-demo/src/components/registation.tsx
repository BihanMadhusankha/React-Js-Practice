import { useEffect, useState } from 'react';
import reactIcon from '../assets/react.svg';


export default function Registaion(){

    const [count , setCount] = useState(3);

    const [catfact, setCatfact] = useState({});
    
    useEffect(() =>{

        fetch("https://catfact.ninja/breeds?limit=1")
    .then(response => response.json())
    .then(data => {console.log(data);
        setCatfact(data) ;}
    )
    },[count]);



    return(
        <div>
            <div className="container">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6" data-aos="fade-right ">
                        <img src={reactIcon} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        <p>{JSON.stringify(catfact).length}</p>

                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() =>{setCount(4)}}>Primary</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}