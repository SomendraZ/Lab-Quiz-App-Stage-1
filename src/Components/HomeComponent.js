import { Link } from 'react-scroll';

export default function(){
    return(
        <div className="color">
            <h1>Quizz App</h1>
            <Link className='green' to="mid" spy={true} smooth={true} duration={450}>Play</Link>
        </div>
    )
}