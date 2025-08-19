export function BuildTogetherSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-[#0ACF83]">{"Let's Build"}</span>{" "}
            <span className="text-slate-800 dark:text-slate-100">Together</span>
          </h1>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }, (_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card() {
  return (
    <div className="aspect-[4/3] border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] hover:shadow-md">
      {/* Empty placeholder card */}
    </div>
  )
}