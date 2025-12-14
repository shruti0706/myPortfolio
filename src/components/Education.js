import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Education</h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Bachelor of Technology in Computer Science and Engineering</h3>
            <h4 className="text-sm text-muted-foreground">MediCaps University, Indore</h4>
            <p className="text-xs text-muted-foreground mt-1">August 2019 - May 2023</p>
            <p className="mt-2"><strong>CGPA:</strong> 8.9</p>
          </div>
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Intermediate</h3>
            <h4 className="text-sm text-muted-foreground">Vidya Sagar School, Indore</h4>
            <p className="text-xs text-muted-foreground mt-1">April 2017 - June 2018</p>
            <p className="mt-2"><strong>Percentage:</strong> 86%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;