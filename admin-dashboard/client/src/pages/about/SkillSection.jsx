import React from 'react'

const SkillSection = () => {
  return (
    <div className="grid md:grid-cols-2    gap-8 mb-12">
      <div>
        <h2 className="text-3xl font-bold mb-4">Who is skillup ?</h2>
        <p className="text-gray-300 mb-6">
          Skillup is dedicated to unlocking East Africa's digital potential by
          providing industry-leading technology solutions, comprehensive
          training programs, and strategic partnerships.
        </p>
        <img
          src="/homepage/img-one.png"
          alt="Team collaborating in office"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">
          We help companies with tailored IT solutions to build their digital
          presence and drive growth.
        </h2>
        <img
          src="/homepage/img-two.png"
          alt="Team in a meeting"
          className="rounded-lg shadow-lg mt-6"
        />
      </div>
    </div>
  )
}

export default SkillSection
