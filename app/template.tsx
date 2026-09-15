'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DotLottie } from '@lottiefiles/dotlottie-web';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
    const pageRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) {
            return undefined;
        }

        const player = new DotLottie({
            autoplay: true,
            loop: true,
            canvas: canvasRef.current,
            src: '/loading.lottie',
            renderConfig: {
                autoResize: true,
                freezeOnOffscreen: false,
            },
        });

        return () => {
            player.destroy();
        };
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to('.page-transition--inner', {
            yPercent: 0,
            duration: 0.2,
        })
            .to('.page-transition--inner', {
                yPercent: -100,
                duration: 0.2,
            })
            .to('.page-transition', {
                yPercent: -100,
            });

        const media = gsap.matchMedia();

        media.add('(prefers-reduced-motion: no-preference)', () => {
            const sections = gsap.utils.toArray<HTMLElement>(
                pageRef.current?.querySelectorAll('section') ?? [],
            );

            sections.forEach((section, index) => {
                const backgroundLayer = section.querySelector<HTMLElement>(
                    '[data-parallax-bg]',
                );
                const contentLayer = section.querySelector<HTMLElement>(
                    '[data-parallax-content]',
                );
                const direction = index % 2 === 0 ? 1 : -1;

                if (backgroundLayer) {
                    gsap.fromTo(
                        backgroundLayer,
                        { yPercent: -8 * direction, scale: 1.08 },
                        {
                            yPercent: 8 * direction,
                            scale: 1.08,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: section,
                                start: 'top bottom',
                                end: 'bottom top',
                                scrub: 1,
                                invalidateOnRefresh: true,
                            },
                        },
                    );
                }

                if (contentLayer) {
                    gsap.fromTo(
                        contentLayer,
                        { y: 36 * direction },
                        {
                            y: -36 * direction,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: section,
                                start: 'top bottom',
                                end: 'bottom top',
                                scrub: 1,
                                invalidateOnRefresh: true,
                            },
                        },
                    );
                }
            });
        });

        return () => media.revert();
    }, { scope: pageRef });

    return (
        <div ref={pageRef}>
            <div className="page-transition w-screen h-screen fixed top-0 left-0 bg-[#080808] z-[5]">
                <div className="page-transition--inner w-screen h-screen fixed top-0 left-0 bg-[#080808] z-[5] translate-y-full"></div>
                <canvas
                    ref={canvasRef}
                    className="absolute left-1/2 top-1/2 z-[6] h-48 w-48 -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            {children}
        </div>
    );
}
