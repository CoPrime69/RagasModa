"use client";
import { useEffect, useRef } from 'react';

type FadeInProps = {
    children: React.ReactNode;
    duration?: number; // duration in seconds
};

export default function FadeIn({ children, duration = 1 }: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.style.opacity = '0';
            ref.current.style.transition = `opacity ${duration}s ease-in-out`;
            requestAnimationFrame(() => {
                ref.current!.style.opacity = '1';
            });
        }
    }, [duration]);

    return <div ref={ref}>{children}</div>;
}