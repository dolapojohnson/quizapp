import Answers from "./Answers.component";

const Question = ({ featuredQuestion }) => {
      return(
            <div className="mt-20 text-2xl">
                  {/* What is the name of the invisible line that crosses the center of the earth? */}
                  {featuredQuestion.question}
                  <Answers featuredAnswer={featuredQuestion}/>
            </div>
      )
}

export default Question;