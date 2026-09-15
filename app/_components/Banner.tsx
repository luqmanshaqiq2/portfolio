'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React from 'react';
import logo from '../logo.png';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Resume button styles (liquid glass background + preserved hover animations)
const resumeStyles = `
    .resume-button { all: unset; position: relative; display: inline-flex; height: 3.5rem; align-items: center; border-radius: 9999px; padding-left: 2rem; padding-right: 2rem; font-family: Segoe UI, system-ui, -apple-system, Roboto, 'Helvetica Neue', Arial; font-size: 1.2rem; font-weight: 640; color: #fafaf6; letter-spacing: -0.06em; cursor: pointer; background: transparent; }

    /* background container that holds the colorful blobs */
    .resume-button-bg { overflow: hidden; border-radius: 9999px; position: absolute; top: 0; left: 0; width: 100%; height: 100%; transform: scale(1); transition: transform 1.8s cubic-bezier(0.19, 1, 0.22, 1); z-index: 1; }
    .resume-button-bg-layers { display:block; position:absolute; left:50%; transform:translate(-50%); top:-50%; aspect-ratio:1/1; width:max(220%,10rem); pointer-events: none; }
    .resume-button-bg-layer { border-radius:9999px; position:absolute; top:0; left:0; width:100%; height:100%; transform:scale(0); opacity: 0.9; }
    .resume-button-bg-layer.-purple { background: radial-gradient(closest-side, rgba(163,116,255,0.95), rgba(163,116,255,0.6)); }
    .resume-button-bg-layer.-turquoise { background: radial-gradient(closest-side, rgba(23,241,209,0.95), rgba(23,241,209,0.45)); }
    .resume-button-bg-layer.-yellow { background: radial-gradient(closest-side, rgba(255,208,116,0.95), rgba(255,208,116,0.5)); }

    /* Glass overlay sits above the blobs and below the text */
    .resume-button .glass { position: absolute; inset: 0; z-index: 2; border-radius: 9999px; overflow: hidden; background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)); border: 1px solid rgba(255,255,255,0.10); box-shadow: 0 8px 20px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.04); backdrop-filter: blur(10px) saturate(120%); -webkit-backdrop-filter: blur(10px) saturate(120%); pointer-events: none; transition: transform 0.45s cubic-bezier(.19,1,.22,1), box-shadow .45s; }

    /* text layers remain on top */
    .resume-button-inner, .resume-button-inner-hover, .resume-button-inner-static { pointer-events: none; display: block; position: relative; z-index: 3; }
    .resume-button-inner-hover { position: absolute; top: 0; left: 0; opacity: 0; transform: translateY(70%); }

    /* preserve original hover transitions for text */
    .resume-button:hover .resume-button-inner-static { opacity: 0; transform: translateY(-70%); transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s linear; }
    .resume-button:hover .resume-button-inner-hover { opacity: 1; transform: translateY(0); transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 1.4s cubic-bezier(0.19, 1, 0.22, 1); }

    /* animate blobs */
    .resume-button:hover .resume-button-bg-layer { transition: transform 1.3s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s linear; }
    .resume-button:hover .resume-button-bg-layer-1 { transform: scale(1); }
    .resume-button:hover .resume-button-bg-layer-2 { transition-delay: 0.08s; transform: scale(1); }
    .resume-button:hover .resume-button-bg-layer-3 { transition-delay: 0.16s; transform: scale(1); }

    /* subtle glass reaction on hover to feel liquid */
    .resume-button:hover .glass { transform: translateY(-3px) scale(1.03); box-shadow: 0 18px 30px rgba(0,0,0,0.22), inset 0 2px 0 rgba(255,255,255,0.06); }

    /* focus handling */
    .resume-button:focus, .resume-button:focus-visible { outline: none !important; box-shadow: 0 0 0 3px rgba(255,208,116,0.12); }

    /* mobile tap highlight */
    .resume-button { -webkit-tap-highlight-color: transparent; }

`;

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <a
                href="#banner"
                className="absolute left-8 top-4 z-20 block"
                aria-label="Logo"
                onClick={(event) => event.preventDefault()}
            >
                <Image
                    src={logo}
                    alt="Logo"
                    className="h-14 w-14 object-contain"
                    width={56}
                    height={56}
                    priority
                />
            </a>

            <div
                aria-hidden="true"
            />
            <div
                className="container relative z-10 h-[100svh] min-h-[530px] max-md:pb-10 flex justify-center items-center max-md:flex-col"
                ref={containerRef}
                data-parallax-content
            >
                <div className="flex flex-col justify-center items-center max-w-[544px] text-center w-full">
                    <h1 className='text-sm mb-5'>Hello there👋, I am</h1>
                    <h1 className="banner-title slide-up-and-fade leading-[.85]"> <span className="text-[15vw] sm:text-[12vw] md:text-9xl lg:text-15xl font-black text-white"> LUQMAN CASSIM </span> </h1>
                    <div className="resume-button-wrapper slide-up-and-fade mt-8 sm:mt-16 md:mt-20 lg:mt-5">
                        <button
                            className="resume-button resume-button-item animated-button banner-button sm:w-[160px] sm:h-[55px] md:w-[180px] md:h-[60px] lg:w-[200px] lg:h-[65px]"
                            onClick={() => window.open('/luqman-cassim-cv.pdf', '_blank')}
                            aria-label="Open Resume"
                        >
                            <span className="resume-button-bg" aria-hidden="true">
                                <span className="resume-button-bg-layers" aria-hidden="true">
                                    <span className="resume-button-bg-layer resume-button-bg-layer-1 -purple" />
                                    <span className="resume-button-bg-layer resume-button-bg-layer-2 -turquoise" />
                                    <span className="resume-button-bg-layer resume-button-bg-layer-3 -yellow" />
                                </span>
                                {/* glass overlay sits above blobs and below text */}
                                <span className="glass" aria-hidden="true" />
                            </span>

                            <span className="resume-button-inner">
                                <span className="resume-button-inner-static tracking-normal">my resume</span>
                                <span className="resume-button-inner-hover">my resume?</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: resumeStyles }} />
        </section>
    );
};

export default Banner;
