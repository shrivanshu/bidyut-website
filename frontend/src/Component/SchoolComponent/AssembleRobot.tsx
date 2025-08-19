export default function AssembleRobot() {
  return (
    <div className="w-full mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-black">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-12">
        <span className="text-[#000000] dark:text-white">Assemble </span>
        <span className="text-[#0ACF83]">Your Robot</span>
      </h1>

      {/* Green Rectangle */}
      <div className="w-full min-fit h-96 xl:min-h-screen bg-[#0ACF83] dark:bg-gray-900 rounded-3xl shadow-lg">
        {/* Empty green rectangle as shown in the image */}
      </div>
    </div>
  )
}