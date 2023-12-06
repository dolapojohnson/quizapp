const Answers = ({ featuredAnswer }) => {
      return(
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 m-28 mb-14 mt-12 text-white">
                  <button>
                        <div className="bg-cyan-600 h-16 rounded p-4">
                              <h4 className="">
                                    {featuredAnswer.A}
                              </h4>
                        </div>
                  </button>
                  <button>
                        <div className="bg-cyan-600 h-16 rounded p-4">
                              <h4 className="">
                                    {featuredAnswer.B}
                              </h4>
                        </div>
                  </button>
                  <button>
                        <div className="bg-cyan-600 h-16 rounded p-4">
                              <h4 className="">
                                    {featuredAnswer.C}
                              </h4>
                        </div>
                  </button>
                  <button>
                        <div className="bg-cyan-600 h-16 rounded p-4">
                              <h4 className="">
                                    {featuredAnswer.D}
                              </h4>
                        </div>
                  </button>
            </div>
      )
}

export default Answers;