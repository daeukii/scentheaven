import React, { useEffect, useState } from "react";
import './BackToTopButton.css';

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        };

        window.addEventListener("scroll", scrollListener);

        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="App">
            {backToTopButton && (
                <button
                    className="scrollbtn"
                    onClick={scrollUp}
                >
                    ^
                </button>
            )}
        </div>
    );
}

export default BackToTopButton;
