import { useParams, Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "./PageHero";

const services = {
  "web-development": ["Web Development", "Fast, secure and conversion-focused websites and web applications that give your business a polished digital home."],
  "mobile-app-development": ["Mobile App Development", "Useful, intuitive iOS and Android experiences designed around your customers and business goals."],
  "e-commerce": ["e-Commerce Development", "Online stores that make browsing, buying and managing your business effortless."],
  "digital-marketing": ["Digital Marketing", "Performance-led campaigns that improve reach, bring qualified leads and build a stronger brand."],
  "google-seo": ["Google SEO", "Sustainable search visibility with technical SEO, useful content and data-led optimization."],
  "social-media-handling": ["Social Media Handling", "Consistent social content and community management that keeps your brand relevant."],
  "meta-ads": ["Meta Ads", "Targeted Meta campaigns built to reach the right people and generate meaningful results."],
  "google-ads": ["Google Ads", "High-intent paid search campaigns managed for efficient lead generation and growth."],
  "whatsapp-marketing": ["WhatsApp Marketing", "Helpful customer conversations and campaigns delivered directly through WhatsApp."],
  "email-marketing": ["Email Marketing", "Automated and engaging email journeys that nurture leads into loyal customers."],
  "video-editing": ["Video Editing", "Attention-grabbing video content shaped for social, campaigns and your brand story."],
  "custom-software": ["Custom Software", "Purpose-built software that streamlines workflows and solves the challenges unique to your business."],
  "ui-ux-design": ["UI/UX Design", "Clear, delightful product experiences informed by user needs and business priorities."],
  "graphics-design": ["Graphics Design", "Memorable brand visuals that keep every customer touchpoint consistent and professional."],
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const [title, description] = services[slug] || ["Digital Services", "Practical technology and marketing solutions built for your business."];
  return <><PageHero eyebrow="Our services" title={title} description={description} />
    <section className="bg-[#f7faf9] px-6 py-20 sm:px-10 lg:px-14"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-[#2E9E6D]">How we help</p><h2 className="mt-4 text-3xl font-bold text-[#0C2C50] sm:text-4xl">Designed around real business outcomes.</h2><p className="mt-5 leading-7 text-slate-600">Our team combines a clear process with the right technology to create work that is useful, polished and ready to grow with you.</p><div className="mt-7 space-y-4">{["A plan tailored to your business goals", "Transparent delivery and regular progress updates", "Quality checks before every launch", "Ongoing support when you need it"].map(point => <p key={point} className="flex gap-3 text-slate-700"><CheckCircle2 size={20} className="shrink-0 text-[#2E9E6D]"/>{point}</p>)}</div></div><aside className="rounded-3xl bg-[#0C2C50] p-8 text-white shadow-xl"><p className="text-sm text-[#72d3aa]">Ready to begin?</p><h3 className="mt-3 text-2xl font-bold">Tell us about your project.</h3><p className="mt-4 leading-7 text-white/70">We will help you choose the right approach and provide a clear next step.</p><Link to="/quote" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#2E9E6D] px-5 py-3 font-semibold hover:bg-[#227955]">Request a consultation <ArrowRight size={17}/></Link></aside></div></section></>;
}
