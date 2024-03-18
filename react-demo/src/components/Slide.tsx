import headerImg from '../../public/vite.svg';

interface Props{
    title: string;
    children: string; 
}

function Slide(props:Props) {
    return(
        <div>
            <img src={headerImg} alt="" />
            <h1>{props.title}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Slide;