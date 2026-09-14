'use client';
import React, { useEffect, useRef } from 'react';

const ScrollProgressIndicator = () => {
    const scrollBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let frameId: number | null = null;

        const handleScroll = () => {
            if (frameId !== null) {
                return;
            }

            frameId = requestAnimationFrame(() => {
                frameId = null;

                if (scrollBarRef.current) {
                    const { scrollHeight, clientHeight } = document.documentElement;
                    const scrollableHeight = Math.max(scrollHeight - clientHeight, 1);
                    const scrollY = window.scrollY;
                    const scrollProgress = (scrollY / scrollableHeight) * 100;

                    scrollBarRef.current.style.transform = `translateY(-${100 - scrollProgress
                        }%)`;
                }
            });
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (frameId !== null) {
                cancelAnimationFrame(frameId);
            }
        };
    }, []);

    return (
        <div className="fixed top-[50svh] right-[2%] -translate-y-1/2 w-1.5 h-[100px] rounded-full bg-background-light overflow-hidden">
            <div
                className="w-full bg-primary rounded-full h-full"
                ref={scrollBarRef}
            ></div>
        </div>
    );
};

export default ScrollProgressIndicator;
