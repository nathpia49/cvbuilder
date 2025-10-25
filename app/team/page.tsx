import Image from "next/image";

const team = [
  {
    name: "Aria Chen",
    role: "Founder & Product",
    bio: "Designing the future of career storytelling. Previously led product at Dribbble and Notion.",
    image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=400&q=80",
    socials: {
      linkedin: "https://www.linkedin.com/in/aria",
      dribbble: "https://dribbble.com/aria",
    },
  },
  {
    name: "Mateo Rivera",
    role: "Head of Engineering",
    bio: "Full-stack leader bringing realtime collaboration, AI pipelines, and craft to every release.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    socials: {
      linkedin: "https://www.linkedin.com/in/mateo",
      github: "https://github.com/mateo",
    },
  },
  {
    name: "Leah Patel",
    role: "Design Director",
    bio: "Shapes the visual system, templates, and storytelling frameworks for top-tier candidates.",
    image: "https://images.unsplash.com/photo-1544723795-43253782ef81?auto=format&fit=crop&w=400&q=80",
    socials: {
      linkedin: "https://www.linkedin.com/in/leah",
      behance: "https://behance.net/leah",
    },
  },
  {
    name: "Noah Williams",
    role: "AI Research Lead",
    bio: "Builds the AI stack that powers portrait generation, narrative assistance, and career analytics.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    socials: {
      linkedin: "https://www.linkedin.com/in/noah",
      twitter: "https://twitter.com/noah",
    },
  },
];

const principles = [
  {
    title: "Craft and clarity",
    description: "We sweat the typography, spacing, and copy details so every CV feels tailored and trustworthy.",
  },
  {
    title: "AI with accountability",
    description: "Lovable Cloud unlocks AI helpers that respect privacy, deliver context, and stay human-centered.",
  },
  {
    title: "Teams win together",
    description: "From career coaches to recruiting squads, we help teams ship aligned, consistent candidate experiences.",
  },
];

export default function TeamPage() {
  return (
    <div className="space-y-20">
      <section className="rounded-3xl border border-primary/40 bg-gradient-to-r from-[#101a31] via-[#0d1425] to-[#121f38] p-10 shadow-glow">
        <div className="flex flex-col gap-6 text-center">
          <span className="self-center rounded-full border border-primary/50 bg-primary/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Team
          </span>
          <h1 className="text-4xl font-semibold text-white">The studio behind Elevate</h1>
          <p className="mx-auto max-w-2xl text-sm text-slate-300">
            We are designers, engineers, and storytellers building tools that empower people to showcase their
            experience with pride. Every feature is crafted to feel personal and professional.
          </p>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        {team.map((member) => (
          <article key={member.name} className="card-surface flex flex-col gap-4 overflow-hidden p-6">
            <div className="flex items-center gap-4">
              <Image
                src={member.image}
                alt={member.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-2xl object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </div>
            </div>
            <p className="text-sm text-slate-300">{member.bio}</p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-400">
              {member.socials.linkedin ? (
                <a href={member.socials.linkedin} className="transition hover:text-primary">
                  LinkedIn
                </a>
              ) : null}
              {member.socials.github ? (
                <a href={member.socials.github} className="transition hover:text-primary">
                  GitHub
                </a>
              ) : null}
              {member.socials.dribbble ? (
                <a href={member.socials.dribbble} className="transition hover:text-primary">
                  Dribbble
                </a>
              ) : null}
              {member.socials.behance ? (
                <a href={member.socials.behance} className="transition hover:text-primary">
                  Behance
                </a>
              ) : null}
              {member.socials.twitter ? (
                <a href={member.socials.twitter} className="transition hover:text-primary">
                  Twitter
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl border border-white/5 bg-[#0b1425] p-10 shadow-inner">
        <h2 className="text-3xl font-semibold text-white">Our principles</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="rounded-2xl border border-white/5 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
