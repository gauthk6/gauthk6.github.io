import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, githubLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col h-full border border-gray-200">
      <h3 className="text-xl font-semibold mb-2 text-ucsd-navy">{title}</h3>
      <p className="text-gray-700 mb-4 flex-grow">{description}</p>
      <div className="mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-100 text-gray-600 text-xs font-medium mr-2 mb-2 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      {githubLink && (
        <Link href={githubLink} legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-ucsd-navy hover:text-opacity-80 font-semibold transition-colors self-start"
          >
            View on GitHub
          </a>
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;
