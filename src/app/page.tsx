import Image from "next/image";
import ProjectCard from "@/components/ProjectCard"; // Import ProjectCard
import { FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const projects = [
  {
    title: "Project Alpha",
    description: "A groundbreaking AI-driven platform for advanced data analytics and visualization, designed to provide actionable insights from complex datasets.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "AI", "Prisma"],
    githubLink: "#"
  },
  {
    title: "Personal Portfolio Website",
    description: "This very website! A responsive and accessible portfolio built with Next.js, Tailwind CSS, and TypeScript to showcase my work and skills.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    githubLink: "https://github.com/your-repo/portfolio" // Replace with actual link later
  },
  {
    title: "Research Collaboration Tool",
    description: "A web application to facilitate collaboration among researchers, featuring real-time document editing, version control, and discussion forums.",
    tags: ["React", "Node.js", "GraphQL", "MongoDB", "WebSockets"],
    // githubLink: "#" // Optional: Omit if no link
  }
];

export default function Home() {
  return (
    <>
      <section id="home" className="min-h-screen bg-white flex flex-col items-center justify-center text-center py-16 px-8">
        <Image
          src="https://via.placeholder.com/150"
          alt="Gautham Kishore - Headshot"
          width={150}
          height={150}
          className="rounded-full mb-4"
        />
        <h1 className="text-5xl font-bold text-ucsd-navy mb-2">
          Gautham Kishore
        </h1>
        <h2 className="text-2xl text-gray-700">
          Aspiring researcher and innovator.
        </h2>
      </section>
      <section id="about" className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-ucsd-navy">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Dedicated and results-oriented Computer Science graduate with a passion for research and development. Currently seeking opportunities to contribute to innovative projects and advance the frontiers of technology. Strong background in software development, machine learning, and data analysis.
        </p>
        <a
          href="/Gautham_Kishore_Resume_Apr2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ucsd-navy text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors mt-8 inline-block shadow-md"
        >
          Download CV
        </a>
      </section>
      <section id="projects" className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-8">
        <h2 className="text-3xl font-bold mb-12 text-ucsd-navy text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </section>
      <section id="research" className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-ucsd-navy">
          Featured Research
        </h2>
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold mb-4 text-ucsd-navy">WM-ABench</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            WM-ABench is a novel benchmark for evaluating the performance of .... Further details about its impact and findings will be updated here.
          </p>
          <p className="mt-6 text-lg text-ucsd-navy hover:text-opacity-80 font-medium">
            Learn more (coming soon)
          </p>
        </div>
      </section>
      <section id="interests" className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-ucsd-navy">
          Personal Interests
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
          I’m a huge Warriors, 49ers, and Federer fan. I love discovering new music playlists.
        </p>
      </section>
      <section id="contact" className="min-h-[30vh] bg-ucsd-navy flex flex-col items-center justify-center py-12 px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Contact & Connect
        </h2>
        <a
          href="mailto:gauthk6@gmail.com"
          className="text-lg text-gray-300 hover:text-white transition-colors mb-6 inline-block"
        >
          gauthk6@gmail.com
        </a>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/gauthk6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-4xl text-gray-300 hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://scholar.google.com/citations?user=H1P1W_cAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar Profile"
            className="text-4xl text-gray-300 hover:text-white transition-colors"
          >
            <SiGooglescholar />
          </a>
        </div>
      </section>
    </>
  );
}
