import congrats from '../assets/icons/congratulation.png'
import comic from '../assets/icons/comic.png'
import './welcome.css'
import { Link } from 'react-router-dom';

const Score = () => {
      const score = 4;
      return(
            <>
                  <div className="m-28 text-center font-sans">
                        {
                              score >= 5? 
                              <div className='img-choose'> <img src={congrats} alt='Congratulations' width='120px' /></div> 
                              : <div className='img-choose'> <img src={comic} alt='comic image' width='120px' /></div>
                        }
                        <h1 className='mt-8 text-3xl text-cyan-700 font-black'>
                              You scored {score}/10
                        </h1>
                        <div className='flex flex-row gap-4 text-white justify-around justify-items-center mt-16'>
                              <div className='bg-cyan-400 font-black p-3 rounded'>
                                    <button>
                                          Take Again ?
                                    </button>
                              </div>
                              <Link to='/'>
                                    <div className='bg-cyan-800 font-black p-4 rounded'>
                                          <button>
                                                Back Home
                                          </button>
                                    </div>
                              </Link>
                        </div>
                  </div>
            </>
      )
}

export default Score;