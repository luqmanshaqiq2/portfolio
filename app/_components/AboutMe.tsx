"use client";

import Image from "next/image";
import {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";
import { createDraggable } from "animejs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import cubeImage from "../../assets/Cub.png";
import modelImage from "../../assets/model.png";
import orbitImage from "../../assets/orbit.png";

gsap.registerPlugin(ScrollTrigger);

// -----------------------------------------------------
// Stats
// -----------------------------------------------------

const stats = [
    { value: "4+", label: "Years of building" },
    { value: "100%", label: "Creativity in every build" },
];

// -----------------------------------------------------
// Dock
// -----------------------------------------------------

type DockItem = {
    id: string;
    label: string;
    title: string;
    description: string;
    tag: string;
    href: string;
    accentClassName: string;
    panelClassName: string;
    hoverBorderClassName: string;
    icon: ReactNode;
};

const dockItems: DockItem[] = [
    {
        id: "01",
        label: "Projects",
        title: "Selected work",
        description:
            "Production-ready web apps and creative engineering.",
        tag: "10+ built",
        href: "#selected-projects",
        accentClassName: "bg-emerald-400",
        panelClassName:
            "from-emerald-400/20 via-zinc-950/95 to-teal-400/10",
        hoverBorderClassName:
            "hover:border-emerald-400/60 focus-visible:border-emerald-400/60",
        icon: <DocumentIcon />,
    },
    {
        id: "02",
        label: "Stack",
        title: "Tech ecosystem",
        description:
            "Javascript, Tailwind, ASP.NET, and cloud tools.",
        tag: "Core stack",
        href: "#my-stack",
        accentClassName: "bg-cyan-400",
        panelClassName:
            "from-cyan-400/20 via-zinc-950/95 to-blue-400/10",
        hoverBorderClassName:
            "hover:border-cyan-400/60 focus-visible:border-cyan-400/60",
        icon: <CodeIcon />,
    },
    {
        id: "03",
        label: "Contact",
        title: "Let's connect",
        description:
            "Open to freelance work, internships, and collaborations.",
        tag: "Available",
        href: "#contact",
        accentClassName: "bg-violet-400",
        panelClassName:
            "from-violet-400/20 via-zinc-950/95 to-fuchsia-400/10",
        hoverBorderClassName:
            "hover:border-violet-400/60 focus-visible:border-violet-400/60",
        icon: <SendIcon />,
    },
];

// -----------------------------------------------------
// Icons
// -----------------------------------------------------

function DocumentIcon() {
    return (
        <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
        </svg>
    );
}

function CodeIcon() {
    return (
        <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m17.25 6.75 5.25 5.25-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
        </svg>
    );
}

function SendIcon() {
    return (
        <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 12 3.269 3.126A59.77 59.77 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L6 12Zm0 0h7.5"
            />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M3 8h9m-4-4 4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

// -----------------------------------------------------
// Rolling Counter
// -----------------------------------------------------

function RollingCounter({
    value,
    shouldStart,
    run,
}: {
    value: string;
    shouldStart: boolean;
    run: number;
}) {
    const [displayValue, setDisplayValue] = useState("0");
    const valueRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!shouldStart) {
            setDisplayValue("0");
            return;
        }

        const match = value.match(/^(\d+)(.*)$/);

        if (!match) {
            setDisplayValue(value);
            return;
        }

        const numericValue = Number(match[1]);
        const suffix = match[2] ?? "";
        const duration = 1800;
        const startTime = performance.now();

        let animationFrame = 0;
        let previousValue = -1;

        const step = (time: number) => {
            const progress = Math.min(
                (time - startTime) / duration,
                1
            );

            const easedProgress =
                0.5 - Math.cos(Math.PI * progress) / 2;

            const nextValue = Math.min(
                numericValue,
                Math.round(numericValue * easedProgress)
            );

            if (
                nextValue !== previousValue ||
                progress === 1
            ) {
                previousValue = nextValue;

                setDisplayValue(`${nextValue}${suffix}`);

                if (
                    valueRef.current &&
                    nextValue > 0
                ) {
                    gsap.fromTo(
                        valueRef.current,
                        {
                            y: 10,
                            autoAlpha: 0.45,
                        },
                        {
                            y: 0,
                            autoAlpha: 1,
                            duration: 0.24,
                            ease: "power3.out",
                            overwrite: "auto",
                        }
                    );
                }
            }

            if (progress < 1) {
                animationFrame =
                    requestAnimationFrame(step);
            }
        };

        animationFrame = requestAnimationFrame(step);

        return () =>
            cancelAnimationFrame(animationFrame);
    }, [run, shouldStart, value]);

    return (
        <span
            ref={valueRef}
            className="inline-block tabular-nums will-change-transform"
        >
            {displayValue}
        </span>
    );
}

// -----------------------------------------------------
// Bookmark Dock Item
// -----------------------------------------------------

function BookmarkDockItem({
    item,
}: {
    item: DockItem;
}) {
    const itemRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLAnchorElement>(null);
    const hideTimerRef =
        useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const context = gsap.context(() => {
            gsap.set(cardRef.current, {
                autoAlpha: 0,
                x: 14,
                scale: 0.96,
                pointerEvents: "none",
            });
        }, itemRef);

        return () => {
            if (hideTimerRef.current) {
                clearTimeout(hideTimerRef.current);
            }

            context.revert();
        };
    }, []);

    const showCard = () => {
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
        }

        gsap.to(cardRef.current, {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 0.28,
            ease: "power3.out",
            pointerEvents: "auto",
            overwrite: "auto",
        });

        gsap.to(triggerRef.current, {
            scale: 1.08,
            duration: 0.22,
            ease: "back.out(2)",
            overwrite: "auto",
        });
    };

    const hideCard = () => {
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
        }

        hideTimerRef.current = setTimeout(() => {
            gsap.to(cardRef.current, {
                autoAlpha: 0,
                x: 12,
                scale: 0.96,
                duration: 0.2,
                ease: "power2.in",
                pointerEvents: "none",
                overwrite: "auto",
            });

            gsap.to(triggerRef.current, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out",
                overwrite: "auto",
            });
        }, 120);
    };

    return (
        <div
            ref={itemRef}
            className="group relative flex items-center"
            onMouseEnter={showCard}
            onMouseLeave={hideCard}
            onFocusCapture={showCard}
            onBlurCapture={hideCard}
        >
            <a
                ref={triggerRef}
                href={item.href}
                aria-label={`Go to ${item.title}`}
                className={`relative grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/[0.06] text-white/75 shadow-lg shadow-black/20 backdrop-blur-md transition-colors ${item.hoverBorderClassName} hover:bg-white/[0.12] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`}
            >
                {item.icon}

                <span
                    className={`absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full ring-2 ring-[#0c0d0f] ${item.accentClassName}`}
                />
            </a>

            <div
                ref={cardRef}
                className={`absolute right-full top-1/2 mr-3 w-64 -translate-y-1/2 rounded-2xl border border-white/15 bg-gradient-to-br ${item.panelClassName} p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl`}
            >
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-white/65">
                        <span>{item.id}</span>
                        <span>{item.label}</span>
                    </div>

                    <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-white/85">
                        {item.tag}
                    </span>
                </div>

                <h3 className="mt-3 text-sm font-semibold text-white">
                    {item.title}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-white/65">
                    {item.description}
                </p>

                <a
                    href={item.href}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-white transition-colors hover:text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                    Explore <ArrowIcon />
                </a>
            </div>
        </div>
    );
}

// -----------------------------------------------------
// About Me
// -----------------------------------------------------

const AboutMe = () => {
    const rootRef = useRef<HTMLElement>(null);

    const [hasEnteredViewport, setHasEnteredViewport] =
        useState(false);

    const [animationRun, setAnimationRun] = useState(0);

    // -------------------------------------------------
    // Luka Gradient Animation
    // -------------------------------------------------

    const playNameGradient = () => {
        gsap.fromTo(
            ".about-name-character",
            {
                color: "rgba(255, 255, 255, 0.95)",
            },
            {
                keyframes: [
                    {
                        color: "#34d399",
                        duration: 0.25,
                    },
                    {
                        color: "#22d3ee",
                        duration: 0.25,
                    },
                    {
                        color: "#a78bfa",
                        duration: 0.25,
                    },
                    {
                        color: "rgba(255, 255, 255, 0.95)",
                        duration: 0.4,
                    },
                ],
                stagger: 0.08,
                ease: "sine.inOut",
                overwrite: "auto",
            }
        );
    };

    // -------------------------------------------------
    // Main GSAP Animation
    // -------------------------------------------------

    useLayoutEffect(() => {
        const aboutSection = rootRef.current;
        if (!aboutSection) return;

        const isMobile = window.matchMedia('(max-width: 640px)').matches;

        const modelDraggable = isMobile
            ? null
            : createDraggable(".about-model", {
                container: aboutSection,
                containerPadding: 16,
            });

        const context = gsap.context(() => {
            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            const animatedElements = [
                ".about-model",
                ".about-orbit",
                ".about-eyebrow",
                ".about-name-character",
                ".about-fade",
                ".about-stat",
                ".about-cube",
                ".about-dock",
            ];

            if (reduceMotion) {
                gsap.set(animatedElements, {
                    autoAlpha: 1,
                    clearProps: "transform",
                });

                gsap.set(".about-model", {
                    autoAlpha: 1,
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)",
                });

                setHasEnteredViewport(true);
                setAnimationRun(1);

                return;
            }

            gsap.set(".about-name-character", {
                autoAlpha: 0,
                yPercent: 105,
                color: "rgba(255, 255, 255, 0.95)",
            });

            // Keep the ID-card reveal independent from the content timeline.
            gsap.fromTo(
                ".about-model",
                {
                    autoAlpha: 0,
                    scale: 0.84,
                    y: 80,
                    filter: "blur(10px)",
                },
                {
                    autoAlpha: 1,
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.05,
                    ease: "power4.out",
                    overwrite: "auto",
                    scrollTrigger: {
                        trigger: rootRef.current,
                        start: "top 68%",
                        end: "bottom 22%",
                        toggleActions: "restart none restart reset",
                    },
                }
            );

            const timeline = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },

                onStart: () => {
                    setHasEnteredViewport(true);
                    setAnimationRun((run) => run + 1);
                },

                scrollTrigger: {
                    trigger: rootRef.current,
                    start: "top 78%",
                    end: "bottom 22%",
                    toggleActions:
                        "restart none restart reset",

                    onEnter: () => {
                        playNameGradient();
                    },

                    onEnterBack: () => {
                        playNameGradient();
                    },

                    onLeaveBack: () => {
                        setHasEnteredViewport(false);

                        gsap.set(".about-name-character", {
                            color: "rgba(255, 255, 255, 0.95)",
                        });
                    },
                },
            });

            timeline
                .from(
                    ".about-orbit",
                    {
                        autoAlpha: 0,
                        scale: 0.92,
                        duration: 1,
                    },
                    0.1
                )

                .from(
                    ".about-eyebrow",
                    {
                        autoAlpha: 0,
                        y: 14,
                        duration: 0.6,
                    },
                    0.28
                )

                .to(
                    ".about-name-character",
                    {
                        autoAlpha: 1,
                        yPercent: 0,
                        duration: 0.55,
                        stagger: 0.055,
                    },
                    0.4
                )

                .from(
                    ".about-fade",
                    {
                        autoAlpha: 0,
                        y: 20,
                        duration: 0.6,
                        stagger: 0.1,
                    },
                    0.62
                )

                .from(
                    ".about-stat",
                    {
                        autoAlpha: 0,
                        y: 30,
                        duration: 0.65,
                        stagger: 0.1,
                    },
                    0.86
                )

                .from(
                    ".about-cube",
                    {
                        autoAlpha: 0,
                        scale: 0.5,
                        duration: 0.65,
                    },
                    0.8
                )

                .from(
                    ".about-dock",
                    {
                        autoAlpha: 0,
                        x: 24,
                        duration: 0.6,
                        ease: "back.out(1.2)",
                    },
                    0.82
                )

                .to(
                    ".about-cube",
                    {
                        y: -8,
                        rotate: 10,
                        duration: 3.4,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                    },
                    1.45
                );

        }, rootRef);

        return () => {
            modelDraggable?.revert();
            context.revert();
        };
    }, []);

    // -------------------------------------------------
    // Hover Animation
    // -------------------------------------------------

    const handleNameHover = () => {
        playNameGradient();
    };

    const name = "Luka";

    // -------------------------------------------------
    // JSX
    // -------------------------------------------------

    return (
        <section
            ref={rootRef}
            id="about-me"
            className="relative isolate h-[100svh] overflow-hidden font-['Inter'] text-white"
        >
            {/* Orbit */}
            <div
                aria-hidden="true"
                className="about-orbit absolute left-1/2 top-[8%] z-0 w-[132%] max-w-[1040px] -translate-x-1/2 opacity-40 sm:top-[3%] sm:w-[92%] md:opacity-70"
            >
                <Image
                    src={orbitImage}
                    alt=""
                    priority={false}
                    className="h-auto w-full"
                />
            </div>

            {/* Model */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 z-10 mx-auto h-[56%] max-w-[780px] will-change-transform sm:h-[70%] md:h-[88%] md:max-w-[820px]"
            >
                <Image
                    src={modelImage}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 820px"
                    className="about-model touch-none select-none object-contain object-bottom will-change-transform"
                    priority
                    draggable={false}
                />
            </div>

            {/* Main Content */}
            <div className="pointer-events-none relative z-20 mx-auto flex h-full w-full max-w-[1440px] flex-col px-5 pb-8 pt-12 sm:px-9 sm:pt-16 md:px-12 md:pt-20 lg:px-16">

                {/* Eyebrow */}
                <div className="about-eyebrow flex items-center gap-3 text-white/90">
                    <span
                        aria-hidden="true"
                        className="h-3.5 w-3.5 bg-[repeating-linear-gradient(135deg,currentColor_0_1px,transparent_1px_3px)]"
                    />

                    <span className="text-xs font-medium tracking-wide">
                        Call me
                    </span>
                </div>

                {/* Name */}
                <h2
                    onMouseEnter={handleNameHover}
                    className="pointer-events-auto mt-2 cursor-default font-['Bricolage_Grotesque'] text-[clamp(3.5rem,10vw,8rem)] font-medium leading-[0.86] tracking-[-0.065em] text-white/95"
                >
                    {name.split("").map(
                        (character, index) => (
                            <span
                                key={`${character}-${index}`}
                                className="inline-block overflow-hidden align-bottom leading-[0.95]"
                            >
                                <span className="about-name-character inline-block will-change-transform">
                                    {character}
                                </span>
                            </span>
                        )
                    )}
                </h2>

                {/* Left Text + Cube */}
                <div className="about-fade relative mt-8 max-w-[min(420px,calc(100vw-2.5rem))] items-start gap-4 sm:absolute sm:left-9 sm:top-[40%] sm:max-w-[285px] sm:flex md:left-12 lg:left-16">
                    <Image
                        src={cubeImage}
                        alt=""
                        aria-hidden="true"
                        className="about-cube mt-1 mr-3 h-auto w-8 shrink-0 float-left sm:float-none sm:w-10"
                    />

                    <p className="w-full pl-0 text-justify text-xs leading-relaxed tracking-[0.03em] text-white/80 sm:w-80 sm:pl-5 sm:text-sm">
                        My journey started from child-like curiosity to learn about how real-world software
                        actually behave and connect with one-another.

                        <br />
                        <br />

                        Although the engineering behind them feels complex,
                        My interest for designing & building small systems grew from the understanding than the coding aspect.
                    </p>
                </div>

                {/* Education */}
                <div className="about-fade absolute left-5 bottom-[10%] z-20 max-w-[245px] text-left sm:left-auto sm:right-[15%] sm:top-[18%] sm:bottom-auto sm:max-w-[245px] sm:translate-x-0 md:right-[15%] lg:right-[10%]">
                    <div className="max-w-[245px] translate-y-3 sm:translate-y-0">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-gradient-to-r from-white via-emerald-100 to-sky-300 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-black shadow-[0_4px_14px_rgba(34,211,238,0.35)] ring-1 ring-white/70 backdrop-blur-sm">
                            <Image
                                src="https://img.icons8.com/?size=100&id=21180&format=png&color=000000"
                                alt=""
                                aria-hidden="true"
                                width={18}
                                height={18}
                                className="h-3.5 w-5 object-contain"
                            />

                            Education
                        </span>

                        <p className="mt-3 text-sm leading-relaxed tracking-[0.03em] text-white/85">
                            University of Moratuwa
                            <br />
                            BSc. in Information Technology
                            <br />
                            [Final-Year Undergraduate]
                        </p>
                    </div>
                </div>

                {/* Dock */}
                <div className="about-dock pointer-events-auto absolute right-5 top-[43%] z-30 flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl sm:right-9 md:right-12 lg:right-16">
                    {dockItems.map((item) => (
                        <BookmarkDockItem
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>

                <div className="mt-auto" />
            </div>

            {/* Stats placed on the right, below the dock and aligned with the education column */}
            <div className="about-stat absolute right-[calc(10%+50px)] top-[58%] z-0 hidden max-w-[245px] flex-col gap-4 sm:right-[calc(15%+50px)] sm:flex md:right-[calc(15%+50px)] lg:right-[calc(10%+50px)]">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="text-left"
                    >
                        <div className="font-['Bricolage_Grotesque'] text-[clamp(1.9rem,5vw,4rem)] font-medium leading-none tracking-[-0.06em] text-white">
                            <RollingCounter
                                value={stat.value}
                                shouldStart={hasEnteredViewport}
                                run={animationRun}
                            />
                        </div>

                        <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.08em] text-white/60 sm:text-[11px]">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutMe;
