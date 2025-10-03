import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import "./TeamMember.css";

export default function TeamMember() {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/team/team.json')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading team data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div className="team-member-not-found">Failed to load team data.</div>;

  const member = data.members.find((m: any) => m.id === id);
  if (!member) return <div className="team-member-not-found">Team member not found.</div>;

  return (
    <div className="team-member-container">
      <div className="team-member-profile">
        <img
          className="team-member-image"
          src={`/team/${member.image}`}
          alt={member.name}
        />
        <div className="team-member-details">
          <h1 className="team-member-name">{member.name}</h1>
          {member.role && <div className="team-member-role">{member.role}</div>}
          {member.description && (
            <div className="team-member-description">{member.description}</div>
          )}
        </div>
      </div>
      <div className="team-member-buttons">
        {Array.isArray(member.buttons) &&
          member.buttons.map((btn: any, i: number) => {
            if (!btn.buttonText || !btn.buttonLink) return null;
            const Icon = btn.buttonIcon ? (LucideIcons as any)[btn.buttonIcon] : null;

            return (
              <a
                key={i}
                href={btn.buttonLink}
                className="team-member-button"
                style={btn.buttonColor || btn.textColor ? {
                  background: btn.buttonColor,
                  color: btn.textColor
                } : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Icon && <Icon size={18} />}
                {btn.buttonText}
              </a>
            );
          })}
      </div>
    </div>
  );
}
