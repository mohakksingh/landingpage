import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "Reliable Uptime",
    description:
      "Ensure your website remains accessible with guaranteed 99.9% uptime backed by robust server infrastructure.",
  },
  {
    title: "Scalable Resources",
    description:
      "Easily upgrade your hosting plan to handle increased traffic and resource demands as your site grows.",
  },
  {
    title: "Custom Domain Integration",
    description:
      "Connect your unique domain name seamlessly to establish a professional online presence.",
  },
  {
    title: "High-Speed Performance",
    description:
      "Leverage optimized servers and caching mechanisms for fast website loading and enhanced user experience.",
  },
  {
    title: "Advanced Security",
    description:
      "Protect your website with SSL certificates, firewalls, DDoS protection, and regular malware scans.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Access expert technical support anytime via chat, email, or phone to resolve hosting issues quickly.",
  },
];
const Features = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
};

export default Features;
