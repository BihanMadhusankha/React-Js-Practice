import{ ReactNode } from "react";



export default function Card({languageName, description, children,buyCourseClickEvent}:{
    languageName: string;
    description: string;
    children: ReactNode;
    buyCourseClickEvent: () => void;
   
}){

   
    return(
        <div className="card  ">
            <div className="card-body">
                <h5 className="card-title">{languageName}</h5>
                <p className="card-text">{description}</p>
                <pre>
                    <code>
                        {children}
                    </code>
                </pre>
                <button className="btn btn-primary " onClick={buyCourseClickEvent}> Buy Course</button>
            </div>
        </div>
    )
}