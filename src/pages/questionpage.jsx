import React, { useEffect, useState,  } from 'react'
import { Link } from "react-router-dom";
import Question from "../components/Question.component";
// import questions from '../api/questions'
// import axios from 'axios';

// const api_key = "fb679d69e3mshf50bb4bf6026e51p19fd77jsn6ae38062b706"


// const options = {
//       method: 'GET',
//       url: 'https://quiz26.p.rapidapi.com/questions',
//       headers: {
//         'X-RapidAPI-Key': `${api_key}`,
//         'X-RapidAPI-Host': 'quiz26.p.rapidapi.com',
//         'Content-Type': 'application/json'
//       }
// };

const QuestionPage = () => {

      const [allQuestions, setAllQuestions] = useState([]);

      useEffect(() => {
            const fetchQuestions = async (count = 10) => {
                  let countQuestions = [];
                  // const response = await fetch('https://swapi.dev/api/films');
                  const response = await fetch("/questions.json");
                  const questions = await response.json();
                  countQuestions = questions;
                  count = Math.min(count, countQuestions.length);
                  const shuffledQuestions = countQuestions.sort(() => Math.random() - 0.5);
                  const randomSubset = shuffledQuestions.slice(0, count)
                  setAllQuestions(randomSubset);
                  console.log(randomSubset)
            };
            fetchQuestions();
      },[])

      let featuredQuestion = {};

      if (allQuestions.length) {
            const randomIndex = Math.floor(Math.random() *  allQuestions.length);
            console.log(randomIndex)
            featuredQuestion = allQuestions[randomIndex];
      }

      // console.log(featuredQuestion)

      return(
            <div className="mt-10 text-center text-cyan-500 font-black">
                  <div className="flex flex-row m-4 justify-between justify-items-center items-center">
                        <div className="ml-20 p-4 bg-cyan-500 text-white">
                              Question 1 of 10
                        </div>
                        <div className="mr-20">
                              <button className="bg-red-500 p-3 w-28 text-white" >
                                    Quit
                              </button>
                        </div>
                  </div>
                        <Question featuredQuestion={featuredQuestion} />
                  <div className="flex flex-row justify-end justify-itesm-center items-center">
                        <Link to='/quizscore'>
                              <button>
                                    <div className="mr-20 p-3 bg-green-500 w-40 text-white">
                                          Next Question
                                    </div>
                              </button>
                        </Link>
                  </div>
            </div>
      )
}

export default QuestionPage;