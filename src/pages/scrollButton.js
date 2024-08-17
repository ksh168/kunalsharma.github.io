import React, { useState, useEffect } from 'react';
import '../styles/scrollButton.css';

const ScrollButton = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [showWeeee, setShowWeeee] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('down');

    const checkScrollPosition = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollBottom = scrollTop + windowHeight;

        setIsAtBottom(scrollBottom >= documentHeight - 20); // 20px threshold
    };

    const scrollToPosition = () => {
        setShowWeeee(true);
        setTimeout(() => setShowWeeee(false), 1000);

        if (isAtBottom) {
            setScrollDirection('up');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setScrollDirection('down');
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);
        checkScrollPosition(); // Check initial position
        return () => window.removeEventListener('scroll', checkScrollPosition);
    }, []);

    return (
        <>
            <button
                className="scroll-button"
                onClick={scrollToPosition}
            >
                {isAtBottom ? '↑' : '↓'}
            </button>
            {showWeeee && (
                <div className="weeee-container">
                    <span className="weeee-text">
                        {scrollDirection === 'up' ? (
                            <>To infinity and beyond!!! <span className="emoji-rocket">🚀</span></>
                        ) : (
                            <>Weeee!!! <span className="emoji-coaster">🎢</span></>
                        )}
                    </span>
                </div>
            )}
        </>
    );
};

export default ScrollButton;