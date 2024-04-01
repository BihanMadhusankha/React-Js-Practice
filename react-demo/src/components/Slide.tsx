import headerImg from '../../public/vite.svg';

interface Any{
    title: string;
    children: string; 
}

function Slide(props:Any) {
    return(
        <div>
            <img src={headerImg} alt="" />
            <h1>{props.title}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Slide;