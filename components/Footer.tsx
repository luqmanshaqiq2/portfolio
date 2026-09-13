import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/luqman-cassim/", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/luqmanshaqiq2", icon: Github },
    { name: "Email", href: "mailto:luqmanshaqiq2@gmail.com", icon: Mail },
];

const Footer = () => {
    return (
        <footer id="contact" className="relative overflow-hidden bg-black font-['Inter'] text-white">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(55,196,155,0.13),transparent_28%),radial-gradient(circle_at_8%_0%,rgba(223,89,70,0.1),transparent_30%)]" />

            <div className="relative mx-auto flex min-h-[620px] w-full max-w-[1440px] flex-col px-6 pb-5 pt-16 sm:px-12 sm:pt-20 lg:min-h-[650px] lg:px-16 lg:pt-24">
                <div className="grid flex-1 grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,450px)] lg:gap-6">
                    <div className="flex flex-col">
                        <p className="flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.08em] text-white/55 sm:text-[11px]">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-3 py-1.5 text-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                                <span className="relative flex h-2 w-2" aria-hidden="true">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.7)]" />
                                </span>
                                Available
                            </span>
                            For full-time roles &amp; freelance
                        </p>

                        <h2 className="mt-10 max-w-[760px] font-['Bricolage_Grotesque'] text-[clamp(3.85rem,8.5vw,8rem)] font-semibold leading-[0.76] tracking-[-0.08em] sm:mt-12">
                            <span className="block">LET&apos;S BUILD</span>
                            <span className="mt-[0.16em] block text-[#df5946]">SOMETHING</span>
                            <span className="mt-[0.16em] block">GREAT.</span>
                        </h2>

                        <a href="mailto:luqmanshaqiq2@gmail.com" className="mt-9 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                            Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>

                        <nav aria-label="Social links" className="mt-auto flex items-center gap-3 pt-12 sm:gap-4">
                            {socialLinks.map(({ name, href, icon: Icon }) => (
                                <a key={name} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={name} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.05] text-white/75 transition duration-200 hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.12] hover:text-white focus-visible:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div aria-hidden="true" className="relative mx-auto flex h-[250px] w-[250px] items-center justify-center sm:h-[290px] sm:w-[290px] lg:mx-0 lg:h-auto lg:w-full">
                        <video autoPlay loop muted playsInline preload="metadata" className="w-full max-w-[430px] object-contain opacity-95">
                            <source src="/greencub.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="mt-9 border-t border-white/15 pt-5 text-[10px] font-medium tracking-[0.02em] text-white/50 sm:text-[11px]">
                    © 2026 Luqman Shaqiq Cassim — Based in Colombo
                </div>
            </div>
        </footer>
    );
};

export default Footer;
