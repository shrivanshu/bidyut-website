export default function SchoolHeroSection() {
  return (
    <div className="w-full min-h-fit xl:min-h-screen p-2 sm:p-8 pt-24 sm:pt-24 bg-white dark:bg-black">
      <video className="w-full h-full object-cover rounded-xl" autoPlay muted loop playsInline>
        <source src="public/School/SchoolHeader.mp4" type="video/mp4" />
        
      </video>
    </div>
  )
}
