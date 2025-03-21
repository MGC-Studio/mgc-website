import { ArrowRight, Briefcase, Calendar } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ProjectData } from "./types";

export default function ProjectCard({ project }: { project: ProjectData }) {
    return (
        <Card className="overflow-hidden hover-lift glass-effect">
            <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-accent" />
                    <span className="text-white/60 text-sm">{project.client}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex items-center gap-4 my-3 text-sm">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                    </div>
                </div>
                <p className="mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-accent/10 text-accent/90 px-2 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="text-xs bg-accent/10 text-accent/90 px-2 py-1 rounded-full">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>
                <Button variant="outline" className="w-full border-white/20 hover:bg-primary/90 flex items-center justify-center gap-2">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </Card>
    );
};
