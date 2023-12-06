import './welcome.css'
import choose from '../assets/icons/choose.png';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
      return(
            <>
                  <h1 className="welcome-container mt-20 font-sans font-black text-center text-4xl text-bold text-cyan-500">
                       QuizLand with React 17
                  </h1>
                  <div className='mt-10'>
                        <img className='img-choose' src={choose} alt='Choose Quiz'/>
                  </div>
                  <Link to="/questions">
                        <button className='btn p-4 mt-6 bg-cyan-500 text-2xl'>
                              Go to Quiz...
                        </button>
                  </Link>
            </>
      )
}

export default WelcomePage;