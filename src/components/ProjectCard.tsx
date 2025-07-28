import React from "react";

type ProjectCardProps = {
    title: string;
    description: string;
    tools: string[];
    websiteLink?: string;
    sourceCodeLink?: string;
    imageUrl?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    tools,
    websiteLink,
    sourceCodeLink,
    imageUrl,
}) => {
    return (
        <div className="rounded-xl overflow-hidden shadow-md border bg-white dark:bg-zinc-900 max-w-sm">
            {imageUrl && (
                <div className="w-full h-48 bg-zinc-200 dark:bg-zinc-800">
                    <img
                        src={imageUrl}
                        alt={`${title} Screenshot`}
                        className="object-cover w-full h-full"
                    />
                </div>
            )}

            <div className="p-4">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    {title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 my-2">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 my-4">
                    {tools.map((tool) => (
                        <span
                            key={tool}
                            className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 px-2 py-1 rounded-md"
                        >
                            {tool}
                        </span>
                    ))}
                </div>

                <div className="flex gap-2">
                    {websiteLink && (
                        <a
                            href={websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1 text-sm border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 rounded-md w-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                        >
                            <i className="ri-external-link-line text-base" />
                            Website
                        </a>
                    )}

                    {sourceCodeLink && (
                        <a
                            href={sourceCodeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1 text-sm border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 rounded-md w-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                        >
                            <i className="ri-github-line text-base" />
                            Source
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
