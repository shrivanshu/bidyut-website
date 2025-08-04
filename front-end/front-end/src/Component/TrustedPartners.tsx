"use client"

// import Image from "next/image"
import { useState } from "react"

const TrustedPartners = [
  [
    {
      src: "https://th.bing.com/th/id/R.c3ac08076933e815ef39557f89b47f9b?rik=YNSsRadQZQdQQQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-mPh7lr-L5kw%2fURx8FtZsRYI%2fAAAAAAAAAU8%2f1Rl4GwVdyhM%2fs1600%2fmicrosoft-logo%2b(1).jpg&ehk=r%2bxBCHuV9agjuFR%2b2LkIJJT0rYEqC%2fUFrlQHeoKN7Uk%3d&risl=&pid=ImgRaw&r=0",
      alt: "ACG Logo",
    },
    {
      src: "https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0",
      alt: "Edutech Logo",
    },
    {
      src: "https://image.pngaaa.com/590/95590-middle.png",
      alt: "Medicaps University Logo",
    },
    {
      src: "https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Free-Image.png",
      alt: "UMS Logo",
    },
    {
      src: "https://i.pinimg.com/originals/6a/39/8e/6a398e2bffd61024b7fa8c6eaf6a4e62.png",
      alt: "ACG Logo",
    },
  ],
  [
    {
      src: "https://th.bing.com/th/id/R.c3ac08076933e815ef39557f89b47f9b?rik=YNSsRadQZQdQQQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-mPh7lr-L5kw%2fURx8FtZsRYI%2fAAAAAAAAAU8%2f1Rl4GwVdyhM%2fs1600%2fmicrosoft-logo%2b(1).jpg&ehk=r%2bxBCHuV9agjuFR%2b2LkIJJT0rYEqC%2fUFrlQHeoKN7Uk%3d&risl=&pid=ImgRaw&r=0",
      alt: "ACG Logo",
    },
    {
      src: "https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0",
      alt: "Edutech Logo",
    },
    {
      src: "https://image.pngaaa.com/590/95590-middle.png",
      alt: "Medicaps University Logo",
    },
    {
      src: "https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Free-Image.png",
      alt: "UMS Logo",
    },
    {
      src: "https://i.pinimg.com/originals/6a/39/8e/6a398e2bffd61024b7fa8c6eaf6a4e62.png",
      alt: "ACG Logo",
    },
  ],
  [
    {
      src: "https://th.bing.com/th/id/R.c3ac08076933e815ef39557f89b47f9b?rik=YNSsRadQZQdQQQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-mPh7lr-L5kw%2fURx8FtZsRYI%2fAAAAAAAAAU8%2f1Rl4GwVdyhM%2fs1600%2fmicrosoft-logo%2b(1).jpg&ehk=r%2bxBCHuV9agjuFR%2b2LkIJJT0rYEqC%2fUFrlQHeoKN7Uk%3d&risl=&pid=ImgRaw&r=0",
      alt: "ACG Logo",
    },
    {
      src: "https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0",
      alt: "Edutech Logo",
    },
    {
      src: "https://image.pngaaa.com/590/95590-middle.png",
      alt: "Medicaps University Logo",
    },
    {
      src: "https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Free-Image.png",
      alt: "UMS Logo",
    },
    {
      src: "https://i.pinimg.com/originals/6a/39/8e/6a398e2bffd61024b7fa8c6eaf6a4e62.png",
      alt: "ACG Logo",
    },
  ],
  [
    {
      src: "https://th.bing.com/th/id/R.c3ac08076933e815ef39557f89b47f9b?rik=YNSsRadQZQdQQQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-mPh7lr-L5kw%2fURx8FtZsRYI%2fAAAAAAAAAU8%2f1Rl4GwVdyhM%2fs1600%2fmicrosoft-logo%2b(1).jpg&ehk=r%2bxBCHuV9agjuFR%2b2LkIJJT0rYEqC%2fUFrlQHeoKN7Uk%3d&risl=&pid=ImgRaw&r=0",
      alt: "ACG Logo",
    },
    {
      src: "https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0",
      alt: "Edutech Logo",
    },
    {
      src: "https://image.pngaaa.com/590/95590-middle.png",
      alt: "Medicaps University Logo",
    },
    {
      src: "https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Free-Image.png",
      alt: "UMS Logo",
    },
    {
      src: "https://i.pinimg.com/originals/6a/39/8e/6a398e2bffd61024b7fa8c6eaf6a4e62.png",
      alt: "ACG Logo",
    },
  ],
  [
    {
      src: "https://th.bing.com/th/id/R.c3ac08076933e815ef39557f89b47f9b?rik=YNSsRadQZQdQQQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-mPh7lr-L5kw%2fURx8FtZsRYI%2fAAAAAAAAAU8%2f1Rl4GwVdyhM%2fs1600%2fmicrosoft-logo%2b(1).jpg&ehk=r%2bxBCHuV9agjuFR%2b2LkIJJT0rYEqC%2fUFrlQHeoKN7Uk%3d&risl=&pid=ImgRaw&r=0",
      alt: "ACG Logo",
    },
    {
      src: "https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0",
      alt: "Edutech Logo",
    },
    {
      src: "https://image.pngaaa.com/590/95590-middle.png",
      alt: "Medicaps University Logo",
    },
    {
      src: "https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Free-Image.png",
      alt: "UMS Logo",
    },
    {
      src: "https://i.pinimg.com/originals/6a/39/8e/6a398e2bffd61024b7fa8c6eaf6a4e62.png",
      alt: "ACG Logo",
    },
  ],
  [
    {
      src: "https://th.bing.com/th/id/R.c3ac08076933e815ef39557f89b47f9b?rik=YNSsRadQZQdQQQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-mPh7lr-L5kw%2fURx8FtZsRYI%2fAAAAAAAAAU8%2f1Rl4GwVdyhM%2fs1600%2fmicrosoft-logo%2b(1).jpg&ehk=r%2bxBCHuV9agjuFR%2b2LkIJJT0rYEqC%2fUFrlQHeoKN7Uk%3d&risl=&pid=ImgRaw&r=0",
      alt: "ACG Logo",
    },
    {
      src: "https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0",
      alt: "Edutech Logo",
    },
    {
      src: "https://image.pngaaa.com/590/95590-middle.png",
      alt: "Medicaps University Logo",
    },
    {
      src: "https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Free-Image.png",
      alt: "UMS Logo",
    },
    {
      src: "https://i.pinimg.com/originals/6a/39/8e/6a398e2bffd61024b7fa8c6eaf6a4e62.png",
      alt: "ACG Logo",
    },
  ],
  [
    {
      src: "https://th.bing.com/th/id/R.c3ac08076933e815ef39557f89b47f9b?rik=YNSsRadQZQdQQQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-mPh7lr-L5kw%2fURx8FtZsRYI%2fAAAAAAAAAU8%2f1Rl4GwVdyhM%2fs1600%2fmicrosoft-logo%2b(1).jpg&ehk=r%2bxBCHuV9agjuFR%2b2LkIJJT0rYEqC%2fUFrlQHeoKN7Uk%3d&risl=&pid=ImgRaw&r=0",
      alt: "ACG Logo",
    },
    {
      src: "https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0",
      alt: "Edutech Logo",
    },
    {
      src: "https://image.pngaaa.com/590/95590-middle.png",
      alt: "Medicaps University Logo",
    },
    {
      src: "https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Free-Image.png",
      alt: "UMS Logo",
    },
    {
      src: "https://i.pinimg.com/originals/6a/39/8e/6a398e2bffd61024b7fa8c6eaf6a4e62.png",
      alt: "ACG Logo",
    },
  ],
  
  
]

export default function PartnerLogos() {
  const [hoveredColumnIndex, setHoveredColumnIndex] = useState<number | null>(null)

  // Function to calculate the scale of each column based on its distance from the hovered column
  const getScaleForColumn = (currentIndex: number) => {
    if (hoveredColumnIndex === null) {
      return 0.9 // Default scale when no column is hovered
    }

    const distance = Math.abs(hoveredColumnIndex - currentIndex)

    // Define scale based on distance for the ripple effect across columns
    if (distance === 0) {
      return 1.2 // The hovered column is slightly larger
    } else if (distance === 1) {
      return 1 // Immediate neighbors are slightly smaller than default
    } else if (distance === 2) {
      return 0.8 // Second-tier neighbors are even smaller
    } else if (distance === 3) {
      return 0.65 // Third-tier neighbors are also slightly smaller
    }else if (distance === 4) {
      return 0.5 // Third-tier neighbors are also slightly smaller
    }else if (distance === 5) {
      return 0.45 // Third-tier neighbors are also slightly smaller
    }else if (distance === 6) {
      return 0.4 // Third-tier neighbors are also slightly smaller
    }else {
      return 0.35 // Columns further away maintain the default smaller size
    }
  }

  return (
    <section className="bg-white text-black py-16 px-4 md:py-24 md:px-6 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          Our <span className="text-[#4CAF50]">Trusted</span> Partners
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg md:text-xl mb-12">
          We are proud to collaborate with industry-leading organizations that share our vision and values. Their
          continued trust and support help us deliver excellence every step of the way.
        </p>
        <div className="flex gap-8 justify-evenly items-center overflow-y-visible overflow-x-scroll md:overflow-x-visible drop-shadow-md">
          {TrustedPartners.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col gap-6 justify-center items-center transition-transform duration-300 ease-out rounded-md"
              onMouseEnter={() => setHoveredColumnIndex(columnIndex)}
              onMouseLeave={() => setHoveredColumnIndex(null)}
              style={{ transform: `scale(${getScaleForColumn(columnIndex)})` }}
            >
              {column.map((logo, logoIndex) => (
                <div
                  key={logoIndex}
                  className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-[1px] overflow-hidden border-gray-300 border-solid shadow-md drop-shadow-2xl"
                >
                  <img
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={64} // Corresponds to w-16 (16 * 4 = 64px)
                    height={64} // Corresponds to h-16
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
