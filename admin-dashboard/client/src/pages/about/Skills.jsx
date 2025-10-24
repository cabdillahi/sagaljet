import AboutClient from './AboutClient'

export default function Skills() {
  return (
    <div className="bg-[#222631] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative top-10 lg:top-[10rem]">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* First Column */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Who is Skillup?
            </h2>
            <p className="text-gray-300 mb-3 w-[400px]">
              Skillup is dedicated to unlocking East Africa's digital potential
              by providing industry-leading technology solutions, comprehensive
              training programs, and strategic partnerships.
            </p>
            <img
              src="/homepage/kow.jpg"
              alt="Team collaborating in office"
              className="rounded-lg shadow-lg mx-auto ml-0   h-[300px] md:h-[550px] lg:h-[550px] object-cover w-[400px]"
            />
          </div>

          {/* Second Column */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-[3.5rem]">
              We help companies with tailored IT solutions to build their
              digital presence and drive growth.
            </h2>
            <img
              src="/homepage/laba.jpg"
              alt="Team in a meeting"
              className="rounded-lg   shadow-lg  h-[300px] md:h-[520px] w-[700px] lg:h-[550px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
