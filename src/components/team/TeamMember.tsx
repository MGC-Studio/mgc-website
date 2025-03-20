import { Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { TeamMemberData } from "./types";

export default function TeamMember({ teamMemberData }: { teamMemberData: TeamMemberData }) {
    return (
        <Card className="overflow-hidden hover-lift glass-effect">
            <div className="h-80 md:h-100 overflow-hidden">
                <img
                    src={teamMemberData.image}
                    alt={teamMemberData.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold">{teamMemberData.name}</h3>
                <p className="text-accent mb-3">{teamMemberData.role}</p>
                <p className="text-sm mb-4">{teamMemberData.bio}</p>
                <div className="flex gap-2">
                    {teamMemberData.social.linkedin && (
                        <Button variant="ghost" size="icon" className="hover:bg-white/10 h-8 w-8">
                            <Linkedin className="w-4 h-4" />
                        </Button>
                    )}
                    {teamMemberData.social.email && (
                        <Button variant="ghost" size="icon" className="hover:bg-white/10 h-8 w-8">
                            <Mail className="w-4 h-4" />
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    )
};
