export function CTASection() {
  return (
    <section className="bg-white dark:bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-7xl font-heading font-bold dark:text-white  text-black mb-6">Shape the Future with Us</h2>
        <p className="text-lg md:text-xl font-body text-black dark:text-white mb-20 max-w-3xl mx-auto leading-relaxed">
          Empower your students to think, build, and innovate through robotics, AI, and hands-on learning experiences.
        </p>
        <a
  href="/contact"
  className="bg-black dark:bg-white dark:text-black text-white w-[300px] h-[45px] md:w-[633px]  md:h-[55px] rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-200 inline-flex items-center justify-center"
>
  Contact Us
</a>
      </div>
    </section>
  )
}
