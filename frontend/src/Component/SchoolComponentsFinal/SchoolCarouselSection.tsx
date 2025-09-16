import React, { useState } from 'react';

const cats = {
  'Tiger': {
    name: 'Panthera tigris',
    code: '1501705388883-4ed8a543392c',
    desc: 'tiger in the water'
  },
  'Lion': {
    name: 'Panthera leo',
    code: '1519066629447-267fffa62d4b',
    desc: 'lion and lioness resting on a rock in the sun'
  },
  'Leopard': {
    name: 'Panthera pardus',
    code: '1566489564594-f2163930c034',
    desc: 'blue-eyed leopard resting high up with its head on its front paws'
  },
  'Jaguar': {
    name: 'Panthera onca',
    code: '1601544359642-c76c4f7c3221',
    desc: 'jaguar closeup'
  },
  'Snow leopard': {
    name: 'Panthera uncia',
    code: '1689847190291-f8e0823f13ab',
    desc: 'snow leopard lying low on some rocks, its fur blending in perfectly'
  },
  'Cheetah': {
    name: 'Acinonyx jubatus',
    code: '1693702366986-cbfbd1cf0450',
    desc: 'cheetah in the grass at dusk'
  },
  'Cougar': {
    name: 'Puma concolor',
    code: '1661004527094-07d861089aed',
    desc: 'cougar walking through the snow'
  }
};

const rand = (max: number, min: number): number => {
  return +(min + (max - min) * Math.random()).toFixed(2);
};

export default function SchoolCarousel() {
  const entries = Object.entries(cats);
  const n = entries.length;
  const [k, setK] = useState(0);

  const handleNavigation = (direction: number) => {
    setK((prev) => ((prev + direction + n) % n));
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative" 
      style={{ 
        backgroundColor: '#FFE3BF', 
        // paddingTop: '80px',
        width: '1441px',
        // height: '750px',
        opacity: 1,
        left: '-1px',
        borderTopLeftRadius: '60px',
        borderTopRightRadius: '60px',
        position: 'relative',
        margin: '0 auto'
      }}>
      {/* Top left text */}
      <div
        className="absolute text-black"
        style={{
          top: '30px',
          left: '40px',
          maxWidth: '190px',
          width: '35%',
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
       <a> <button> →</button> </a>
      </div>
      {/* Title text */}
      <div
        className="absolute"
        style={{
          top: '100px',
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: 'clamp(32px, 4vw, 48px)',
          lineHeight: '1.2',
          letterSpacing: '0%',
          textAlign: 'center',
          background: 'linear-gradient(180deg, #000000 10%, rgba(6, 6, 6, 0.14) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          width: 'fit-content',
          padding: '10px'
        }}
      >
        Robotics Lab
      </div>
      {/* Bottom right text */}
      <div
        className="absolute text-black"
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
          color: #f1f5f9;
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
          color: rgb(241 245 249 / 0.6);
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
          color: rgb(241 245 249 / 0.6);
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
          border-radius: 0.75rem;
          translate: calc(-150% * var(--mov) * sqrt(var(--sin)));
          rotate: calc((1 - var(--sin)) * var(--a));
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
      `}</style>

      <section 
        className="carousel-section"
        style={{
          '--n': n,
          '--k': k,
          position: 'absolute',
          left: '52%',
          top: '60%',
          textAlign: 'center',

          transform: 'translate(-50%, -50%)',
          marginTop: '-10px'
        } as React.CSSProperties}
      >
        {entries.map(([name, cat], i) => (
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
                src={`https://images.unsplash.com/photo-${cat.code}?w=400`}
                alt={cat.desc}
                onClick={() => handleNavigation(1)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}