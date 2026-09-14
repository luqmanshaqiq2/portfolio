'use client';

import { MY_STACK } from '@/lib/data';
import Image from 'next/image';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import techImage from '../../public/tech.png';

gsap.registerPlugin(ScrollTrigger);

// Splits a line of text into per-character spans wrapped in an
// overflow-hidden mask, matching the "Luka" reveal in AboutMe.
const splitToChars = (text: string, lineKey: string) =>
    text.split('').map((char, index) => (
        <span
            key={`${lineKey}-${index}`}
            className="inline-block overflow-y-hidden overflow-x-visible align-bottom leading-[0.86]"
        >
            <span className="skill-heading-char inline-block will-change-transform">
                {char === ' ' ? '\u00A0' : char}
            </span>
        </span>
    ));

const Skills = () => {
    const scrollStageRef = useRef<HTMLDivElement>(null);

    // -----------------------------------------------------
    // Heading reveal animation (same motion as "Luka")
    // -----------------------------------------------------
    useLayoutEffect(() => {
        const scrollStage = scrollStageRef.current;
        if (!scrollStage) return;

        const ctx = gsap.context(() => {
            const reduceMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)',
            ).matches;

            if (reduceMotion) {
                gsap.set('.skill-heading-char', {
                    autoAlpha: 1,
                    yPercent: 0,
                    clearProps: 'transform',
                });
                return;
            }

            gsap.set('.skill-heading-char', {
                autoAlpha: 0,
                yPercent: 105,
            });

            gsap.to('.skill-heading-char', {
                autoAlpha: 1,
                yPercent: 0,
                duration: 0.55,
                stagger: 0.03,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: scrollStage,
                    start: 'top 78%',
                    end: 'bottom 22%',
                    toggleActions: 'restart none restart reset',
                },
            });
        }, scrollStage);

        return () => ctx.revert();
    }, []);

    // -----------------------------------------------------
    // Existing card reveal-on-scroll logic (unchanged)
    // -----------------------------------------------------
    useEffect(() => {
        const scrollStage = scrollStageRef.current;
        if (!scrollStage) return;

        const cards = Array.from(
            scrollStage.querySelectorAll<HTMLElement>('.skill-card'),
        );

        const cardRanges = [
            [0.2, 0.35],
            [0.34, 0.49],
            [0.48, 0.63],
            [0.62, 0.77],
        ];

        const maxProgress = cardRanges.map(() => 0);

        let lastScrollY = window.scrollY;
        let sectionCompleted = false;
        let frameId: number | null = null;

        const updateCards = () => {
            const currentScrollY = window.scrollY;
            const scrollingDown = currentScrollY > lastScrollY;

            const rect = scrollStage.getBoundingClientRect();
            const sectionTop = rect.top + currentScrollY;
            const sectionBottom = sectionTop + scrollStage.offsetHeight;

            if (
                scrollingDown &&
                currentScrollY >= sectionBottom - window.innerHeight
            ) {
                sectionCompleted = true;
            }

            if (sectionCompleted) {
                lastScrollY = currentScrollY;
                return;
            }

            if (!scrollingDown) {
                lastScrollY = currentScrollY;
                return;
            }

            const scrollDistance =
                scrollStage.offsetHeight - window.innerHeight;

            if (scrollDistance <= 0) {
                lastScrollY = currentScrollY;
                return;
            }

            const progress = Math.min(
                1,
                Math.max(0, -rect.top / scrollDistance),
            );

            cards.forEach((card, index) => {
                const range = cardRanges[index];

                if (!range) return;

                const [start, end] = range;

                const rawProgress = Math.min(
                    1,
                    Math.max(0, (progress - start) / (end - start)),
                );

                const nextProgress = Math.max(
                    maxProgress[index],
                    rawProgress,
                );
                maxProgress[index] = nextProgress;

                card.style.setProperty(
                    '--card-reveal',
                    String(nextProgress),
                );
            });

            lastScrollY = currentScrollY;
        };

        const scheduleUpdate = () => {
            if (frameId !== null) return;

            frameId = requestAnimationFrame(() => {
                frameId = null;
                updateCards();
            });
        };

        window.addEventListener('scroll', scheduleUpdate, { passive: true });

        return () => {
            window.removeEventListener('scroll', scheduleUpdate);
            if (frameId !== null) {
                cancelAnimationFrame(frameId);
            }
        };
    }, []);

    return (
        <section
            id="my-stack"
            className="skills-section mt-16 py-16 sm:mt-20 sm:py-24 lg:mt-24 lg:py-0"
        >
            <div ref={scrollStageRef} className="skills-scroll-stage content">
                <div className="skills-viewport">
                    <div
                        className="skills-layout container h-full"
                        data-parallax-content
                    >
                        <div className="grid min-h-[calc(100vh-40px)] lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
                            {/* LEFT SIDE */}
                            <div className="relative flex min-h-[390px] flex-col border-b border-dashed border-border py-4 pr-5 sm:min-h-[480px] lg:min-h-0 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12">
                                <p className="mb-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                    MY STACK
                                </p>

                                <h2 className="max-w-[760px] font-['Bricolage_Grotesque'] text-5xl font-medium leading-[0.86] tracking-[-0.042em] text-foreground sm:text-7xl lg:text-[clamp(4.4rem,8vw,8.7rem)]">
                                    <span className="block">
                                        {splitToChars('Tech Stack', 'line1')}
                                    </span>
                                    <span className="block">
                                        {splitToChars('I Use', 'line2')}
                                    </span>
                                </h2>
                                <span className='text-xs translate-y-1 text-muted-foreground'>*WORKING ON THIS SLOW MO SCROLL</span>

                                <Image
                                    src={techImage}
                                    alt="Tech stack"
                                    className="mt-5 aspect-video w-full max-w-[580px] object-cover object-center"
                                    width={580}
                                    height={320}
                                    priority={false}
                                    loading="lazy"
                                />


                            </div>

                            {/* RIGHT SIDE */}
                            <div className="grid content-start items-start sm:grid-cols-2">
                                {Object.entries(MY_STACK).map(
                                    ([key, tools], index) => (
                                        <article
                                            key={key}
                                            className={`group skill-card skill-card--${index + 1
                                                } flex flex-col border-b border-dashed border-border px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 [&:nth-child(odd)]:sm:border-r [&:nth-last-child(-n+2)]:sm:border-b-0`}
                                        >
                                            <p className="text-sm text-muted-foreground">
                                                [
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0',
                                                )}
                                                ]
                                            </p>

                                            <h3 className="mt-1 font-['Bricolage_Grotesque'] text-3xl font-medium capitalize tracking-[-0.04em] text-foreground transition-colors duration-300 group-hover:text-primary">
                                                {key === 'tools'
                                                    ? 'Other Tools'
                                                    : key}
                                            </h3>

                                            <div className="mt-6 flex w-fit max-w-full flex-wrap items-center gap-3 sm:gap-4 lg:gap-5">
                                                {tools.map((item) => (
                                                    <div
                                                        key={item.name}
                                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background-light/40 transition-transform duration-300 hover:-translate-y-1 hover:border-muted-foreground"
                                                        title={item.name}
                                                    >
                                                        <Image
                                                            src={`https://cdn.simpleicons.org/${item.icon}`}
                                                            alt={item.name}
                                                            width={24}
                                                            height={24}
                                                            className="h-6 w-6 object-contain"
                                                            unoptimized
                                                        />

                                                        <span className="sr-only">
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </article>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;