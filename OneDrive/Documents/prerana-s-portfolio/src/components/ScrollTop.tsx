import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

export const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Calculate scroll progress percentage
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`fixed bottom-8 right-8 z-50 transition-all duration-500 scale-0 ${isVisible ? 'scale-100' : ''
                }`}
        >
            <div className="relative group">
                {/* Progress Ring */}
                <svg className="w-14 h-14 -rotate-90">
                    <circle
                        cx="28"
                        cy="28"
                        r="24"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        className="text-primary/10"
                    />
                    <circle
                        cx="28"
                        cy="28"
                        r="24"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={150.8}
                        strokeDashoffset={150.8 - (scrollProgress / 100) * 150.8}
                        className="text-primary transition-all duration-300"
                    />
                </svg>

                <Button
                    onClick={scrollToTop}
                    size="icon"
                    className="absolute inset-0 m-auto rounded-full w-10 h-10 shadow-2xl hover:scale-110 transition-transform bg-primary"
                    aria-label="Back to top"
                >
                    <ChevronUp className="h-5 w-5" />
                </Button>
            </div>
        </div>
    );
};
