
const images = [
  { src: "/School/1.png",  text: "Robotics Lab" },
  { src: "/School/2.png",  text: "STREAM Innovation" },
  { src: "/School/33.png", text: "AI & Coding Club" },
  { src: "/School/4.png",  text: "Tech & Engineering" },
  { src: "/School/5.png",  text: "Science Projects" },
  { src: "/School/6.png",  text: "Math Excellence" },
  { src: "/School/7.png",  text: "Arts & Design" },
  { src: "/School/8.png",  text: "Growth Mindset" },
  { src: "/School/9.png",  text: "Student Leadership" },
  { src: "/School/10.png", text: "Community Service" },
  { src: "/School/111.png",text: "Sports & Wellness" },
  { src: "/School/12.png", text: "Future Careers" },
];


export default function Scroller() {
  return (
    <div className="overflow-hidden w-full dark:bg-black  py-14 md:py-24">
      {/* The moving track */}
      <div className="flex animate-scroll space-x-6">
        {/* Duplicate list for infinite loop */}
        {[...images, ...images].map((item, i) => (
          <div
            key={i}
            className="relative min-w-[250px] flex-shrink-0 rounded-lg overflow-hidden "
          >
            <img
              src={item.src}
              alt={item.text}
              className=" w-[300px] h-[60px] md:w-[400px]  md:h-28 object-fill"
            />
            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center ">
              <p className="text-white font-semibold text-lg text-center px-2">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
