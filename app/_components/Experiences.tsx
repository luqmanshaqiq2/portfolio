'use client';

import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section px-4 sm:px-6 md:px-8" id="my-experience">
            <div
                className="container"
                ref={containerRef}
                data-parallax-content
            >
                <SectionTitle title="My Experience" />

                <div className="grid gap-8 sm:gap-10 md:gap-14">
                    {MY_EXPERIENCE.map((item) => (
                        <div
                            key={item.title}
                            className="experience-item py-4 sm:py-6 md:py-8"
                        >
                            <p className="text-sm sm:text-base md:text-xl leading-relaxed text-muted-foreground">
                                {item.company}
                            </p>

                            <div className="mt-3.5 mb-2.5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                                <p className="max-w-full text-4xl font-anton leading-none break-words sm:text-5xl md:text-6xl">
                                    {item.title}
                                </p>

                                <video
                                    src="/spongebob.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                    className="h-14 w-20 rounded-lg object-cover sm:h-16 sm:w-24 md:h-20 md:w-28"
                                />
                            </div>

                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                                {item.duration}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;