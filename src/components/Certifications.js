// // src/components/Certifications.js
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { SiLeetcode } from 'react-icons/si';
import { certifications } from '../data/certifications';

const Certifications = () => {
  const [isFlipped, setIsFlipped] = useState({
    awsDev: false,
    awsCloud: false,
    github: false,
  });

  const handleFlip = (key) => {
    setIsFlipped((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]">
      <div className="container text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Certifications</h2>
          <p className="mt-2 text-muted-foreground">Recognized achievements in the field of technology.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">  
          <ReactCardFlip isFlipped={isFlipped.datastructures} flipDirection="horizontal">
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer" onClick={() => handleFlip('datastructures')}>
              <SiLeetcode size={40} className="mx-auto mb-3 text-primary" />
              <h3 className="text-lg font-semibold">Data Structures and Algorithms</h3>
              <p className="text-sm text-muted-foreground">Issued By: Udemy</p>
              <p className="text-sm text-muted-foreground">Nov 26, 2020</p>
              <a href="https://drive.google.com/file/d/10YS8SsV2Q32WIq1mGNFAHo04bonLsIx1/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="rounded-md border border-border bg-foreground p-4 text-white cursor-pointer" onClick={() => handleFlip('datastructures')}>
              <img src={certifications[0].image} alt="DSA Certificate" className="w-full h-auto rounded-md" loading="lazy" />
            </div>
          </ReactCardFlip>

          <ReactCardFlip isFlipped={isFlipped.fullstack} flipDirection="horizontal">
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer" onClick={() => handleFlip('fullstack')}>
              <SiLeetcode size={40} className="mx-auto mb-3 text-primary" />
              <h3 className="text-lg font-semibold">Full Stack Web Development</h3>
              <p className="text-sm text-muted-foreground">Issued By: Udemy</p>
              <p className="text-sm text-muted-foreground">Jan 2, 2022</p>
              <a href="https://drive.google.com/file/d/1FyafxpmfsgYc8GdPuBo8GvKzgKFWj9wl/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="rounded-md border border-border bg-foreground p-4 text-white cursor-pointer" onClick={() => handleFlip('fullstack')}>
              <img src={certifications[1].image} alt="Full Stack Development Certificate" className="w-full h-auto rounded-md" loading="lazy" />
            </div>
          </ReactCardFlip>

          <ReactCardFlip isFlipped={isFlipped.aide} flipDirection="horizontal">
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer" onClick={() => handleFlip('aide')}>
              <SiLeetcode size={40} className="mx-auto mb-3 text-primary" />
              <h3 className="text-lg font-semibold">Aide Agent Certification</h3>
              <p className="text-sm text-muted-foreground">Issued By: Valuelabs</p>
              <p className="text-sm text-muted-foreground">March 31, 2025</p>
              <a href="https://drive.google.com/file/d/1nLr-p1m8sPx0nhhBxWM6CK-UncXw7eBQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="rounded-md border border-border bg-foreground p-4 text-white cursor-pointer" onClick={() => handleFlip('aide')}>
              <img src={certifications[2].image} alt="Aide Certificate" className="w-full h-auto rounded-md" loading="lazy" />
            </div>
          </ReactCardFlip>
          
          <ReactCardFlip isFlipped={isFlipped.mckinsey} flipDirection="horizontal">
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer" onClick={() => handleFlip('mckinsey')}>
              <SiLeetcode size={40} className="mx-auto mb-3 text-primary" />
              <h3 className="text-lg font-semibold">McKinsey Forward Program</h3>
              <p className="text-sm text-muted-foreground">Issued By: McKinsey & Company</p>
              <p className="text-sm text-muted-foreground">July 7, 2025</p>
              <a href="https://drive.google.com/file/d/1GFsxioG8qDmXH0L4NRI80t6uUvVTWP_I/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="rounded-md border border-border bg-foreground p-4 text-white cursor-pointer" onClick={() => handleFlip('mckinsey')}>
              <img src={certifications[3].image} alt="Aide Certificate" className="w-full h-auto rounded-md" loading="lazy" />
            </div>
          </ReactCardFlip>
          
        </div>
      </div>
    </section>
  );
};

export default Certifications;
