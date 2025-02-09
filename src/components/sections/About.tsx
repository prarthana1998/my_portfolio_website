import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-mono text-center text-gray-800 mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto gap-6 flex flex-col">
          <p>
            I’m a software engineer with a bachelor's in information technology and a master’s in advanced software engineering from King’s College London. My journey in tech began with my bachelor's degree, where I first discovered my passion for coding, and it grew during my time at Hewlett-Packard Enterprise. There, I gained hands-on experience in automation, CI/CD, and working across the full software lifecycle, collaborating with cross-functional teams in an Agile environment.
          </p>
          <p>
          Post my master's, I experimented with gaining hands-on experience in web development. I decided to dive deeper and make a project I am passionate about. After experiencing the impact of mental health challenges during university and moving countries, I wanted to create something that will help others. That's how my journaling app project came to life. Using Next.js, Tailwind, Shadcn, and PostgreSQL, I’m building a space where people can track and reflect on their emotions in a secure, accessible way
          </p>
          <p>
          When I'm not coding, I enjoy journaling, reading, cooking, dancing, working out, and perfecting my latte art. I’m really excited about the opportunity to combine my technical background with my passion for mental health and work on projects that can genuinely make a positive impact
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;