import React, { useState } from 'react';

const schoolImages = {
  'Robotics Project': {
    name: 'Advanced Robotics Project',
    src: '/school_images/C2271.00_00_25_11.Still004.jpg',
    desc: 'Students working on advanced robotics projects'
  },
  'AI Workshop': {
    name: 'Artificial Intelligence Workshop',
    src: '/school_images/C2271.00_00_33_34.Still003.jpg',
    desc: 'Interactive AI learning session with students'
  },
  'Tech Lab': {
    name: 'Technology Integration Lab',
    src: '/school_images/IMG_9899.JPG',
    desc: 'Advanced technology learning environment'
  },
  'Innovation Lab': {
    name: 'Innovation Laboratory',
    src: '/About_us_gallery/Students 400x400/Untitled-10.jpg',
    desc: 'Students collaborating in innovation lab'
  },
  'STEM Workshop': {
    name: 'STEM Learning Workshop',
    src: '/About_us_gallery/Training 400x800/h.jpg',
    desc: 'Hands-on STEM learning experience'
  },
  'Project Development': {
    name: 'Student Project Development',
    src: '/About_us_gallery/Students 400x400/Untitled-7.jpg',
    desc: 'Students developing innovative projects'
  },
  'Research Hub': {
    name: 'Research and Development Hub',
    src: '/About_us_gallery/Events 400x400/fggh.jpg',
    desc: 'Advanced research and development activities'
  }
};

const rand = (max: number, min: number): number => {
  return +(min + (max - min) * Math.random()).toFixed(2);
};

export default function SchoolCarousel() {
  const entries = Object.entries(schoolImages);
  const n = entries.length;
  const [k, setK] = useState(0);

  const handleNavigation = (direction: number) => {
    setK((prev) => ((prev + direction + n) % n));
  };

  return (
    <div 
      className="min-h-screen flex items-center w-full max-w-screen justify-center bg-[#FFE3BF]" 
      style={{ 
        opacity: 1,
        left: '-1px',
        borderTopLeftRadius: '60px',
        borderTopRightRadius: '60px',
        position: 'relative',
        margin: '0 auto'
      }}>
      {/* Top left text */}
      <div
        className="absolute text-gray-900 w-[50%] md:w-[35%] md:max-w-[190px]"
        style={{
          top: '30px',
          left: '40px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          textAlign: 'left',
          fontSize: 'clamp(14px, 1.5vw, 16px)',
          lineHeight: '1.5',
          letterSpacing: '0%',
          cursor: 'pointer'
        }}
      >
        Discover how we make learning fun
       <a> <button className="text-gray-900"> →</button> </a>
      </div>
      {/* Title text */}
      <div
        className="absolute text-gray-900"
        style={{
          top: '100px',
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: 'clamp(32px, 4vw, 48px)',
          lineHeight: '1.2',
          letterSpacing: '0%',
          textAlign: 'center',
          width: 'fit-content',
          padding: '10px'
        } as React.CSSProperties}
      >
        Robotics Lab
      </div>
      {/* Bottom right text */}
      <div
        className="absolute text-gray-900"
        style={{
          bottom: '10px',
          right: '40px',
          maxWidth: '170px',
          width: '35%',
          fontFamily: 'Poppins',
          fontWeight: 500,
          lineHeight: '1.5',
          letterSpacing: '0%',
       
        }}
      >
        <div>Empowering Schools with Future-Ready Labs</div>
      </div>
      <style>{`
        @property --p {
          syntax: '<number>';
          initial-value: 0;
          inherits: true;
        }
        @property --v {
          syntax: '<number>';
          initial-value: 0;
          inherits: true;
        }

        .carousel-section {
          --p: var(--k);
          --abs-p: max(calc(var(--k) - var(--p)), calc(var(--p) - var(--k)));
          --end: clamp(0, calc(var(--abs-p) - 1), 1);
          --dir: calc((1 - 2 * var(--end)) * clamp(-1, calc((var(--k) - var(--p)) * 100000), 1));
          --fwd: calc(0.5 * (1 + var(--dir)));
          --v: var(--k);
          --abs-v: max(calc(var(--v) - var(--p)), calc(var(--p) - var(--v)));
          --prg: calc(var(--abs-v) / (1 - var(--end) + var(--end) * (var(--n) - 1)));
          
          display: grid;
          grid-gap: 0.25em 0.5em;
          grid-template: repeat(2, max-content) auto max-content / max-content 1fr;
          place-self: center;
          scale: 1.2;
          color: #374151;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          counter-reset: k calc(1 + var(--k)) n var(--n);
          transition: --p 0s 0.8s, --v 0.8s;
          padding: 20px 0;
        }

        .carousel-section::before {
          grid-area: 1 / 2;
          width: 3ch;
          text-align: right;
          content: counter(k) '/' counter(n);
          color: rgb(55 65 81 / 0.6);
        }

        .carousel-article {
          --abs-top: max(calc(var(--k) - var(--i)), calc(var(--i) - var(--k)));
          --not-top: min(1, var(--abs-top));
          --top: calc(1 - var(--not-top));
          --val-mov: calc((1 - var(--fwd)) * var(--p) + var(--fwd) * var(--k) - var(--i));
          --abs-mov: max(var(--val-mov), calc(-1 * var(--val-mov)));
          --not-mov: min(1, var(--abs-mov));
          --mov: calc(1 - var(--not-mov));
          
          grid-area: 1 / 1 / -1 / -1;
          display: grid;
          grid-template: subgrid / subgrid;
          transition: z-index 0.8s cubic-bezier(1, -0.9, 0, 1.9);
        }

        .carousel-title, .carousel-subtitle {
          translate: 0 calc(var(--not-top) * 1lh);
          opacity: var(--top);
          transition: 0.4s calc(var(--top) * 0.4s);
          transition-property: translate, opacity;
        }

        .carousel-title {
          grid-area: 2 / 2;
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        }

        .carousel-subtitle {
          grid-area: 3 / 2;
          font-style: italic;
          color: rgb(55 65 81 / 0.6);
          margin: 0;
        }

        .carousel-image-container {
          position: relative;
          display: inline-block;
        }

        .carousel-image {
          --sin: calc(sin(var(--prg) * 0.5turn));
          grid-area: 1 / 1 / -1;
          border: solid 2px rgba(82, 82, 122, 0.5);
          height: 15em;
          width: 20em;
          object-fit: cover;
          object-position: center;
          border-radius: 0.75rem;
          translate: calc(-150% * var(--mov) * sqrt(var(--sin)));
          rotate: calc((1 - var(--sin)) * var(--a));
          background-color: #FFE3BF;
        }

        .pin {
          position: absolute;
          width: 30px;
          height: 30px;
          background: #FF0000;
          border-radius: 50%;
          top: 2%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 1;
          z-index: 10;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .carousel-image:hover {
        
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }

        @media (max-width: 768px) {
          .carousel-image {
            height: 12em;
            width: 16em;
          }
        }

        /* ↓ Extra small screens ≤480 px */
        @media (max-width: 480px) {
          .carousel-image {
            height: 10em;
            width: 13em;
            object-fit: cover;
            object-position: center;
          }
        }
      `}</style>

      <section 
        className="carousel-section"
        style={{
          '--n': n,
          '--k': k,
          position: 'absolute',
          left: window.innerWidth <= 768 ? '62%' : '52%',
          top: '60%',
          textAlign: 'center',

          transform: 'translate(-50%, -50%)',
          marginTop: '-10px'
        } as React.CSSProperties}
      >
        {entries.map(([name, schoolImage], i) => (
          <article
            key={name}
            className="carousel-article"
            style={{
              '--i': i,
              '--a': `${rand(15, -15)}deg`,
              zIndex: ((n - 1 + i - k) % n)
            } as React.CSSProperties}
          >
            <div className="carousel-image-container">
              {/* <div className="pin"></div> */}
              <img
                className="carousel-image cursor-pointer"
                src={schoolImage.src}
                alt={schoolImage.desc}
                onClick={() => handleNavigation(1)}
                style={{ cursor: 'pointer',  objectFit: 'cover', }}
              />
         
             
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}