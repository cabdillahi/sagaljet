const AboutClient = () => {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8 mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4">
        <StatCard label="trusted brands" number="65" />
        <StatCard label="Happy customers" number="180" />
        <StatCard label="Projects" number="246" />
        <StatCard label="Years of Experience" number="3" />
      </div>
    </div>
  </div>
)
}

function StatCard({ label, number }) {
return (
  <div className="bg-white px-6 py-7 rounded-lg shadow-md flex items-center justify-between min-w-[200px]">
    <span className="text-gray-600 text-sm font-bold ">{label}</span>
    <span className="text-gray-900 font-bold text-xl">
      {number} <span className="text-red-500">+</span>
    </span>
  </div>
  )
}

export default AboutClient
