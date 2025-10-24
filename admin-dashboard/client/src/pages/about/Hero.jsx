import React from 'react'

const Hero = () => {
  return (
    <>
      <div class="flex-row-bac">
        <div class="section">
          <div class="image">
            <div className="container-fluid">
              <div className="row py-5">
                <div className="col-md-5 px-5 py-5">
                  <p class="learn-to-grow py-5">Who is skillup ?</p>
                  <p class="skillup-dedicated">
                    Skillup is dedicated to unlocking East Africa's digital
                    potential by providing industry-leading technology
                    solutions, comprehensive training programs, and strategic
                    partnerships.
                  </p>

                  <div class="image-4 py-4 my-4 col-sm-12">
                    <img
                      src="../public/assets/images/about/img-one.png"
                      alt=""
                      height="500px"
                    />
                  </div>
                </div>

                <div className="col-md-7 py-5 col-sm-12">
                  <p className="we-help-companies px-5 py-5">
                    We help companies with tailored IT solutions to build their
                    digital presence and drive growth.
                  </p>

                  <div className="image-5 py-4 my-4">
                    <img
                      src="../public/assets/images/about/img-two.png"
                      alt=""
                      className="py-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
