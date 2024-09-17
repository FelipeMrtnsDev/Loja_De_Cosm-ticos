import React, { useState, useEffect, useRef } from "react";
import "./styles.css"; 
import slide1 from "../../images/slide-1.jpg";
import slide1mob from '../../images/slide-1-mob.jpg';
import slide2 from "../../images/slide-2.jpg";
import slide2mob from '../../images/slide-2-mob.jpg';
import slide3 from "../../images/slide-3.jpg";
import slide3mob from '../../images/slide-3-mob.jpg';

function Carrosel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const startTouchX = useRef(0);
    const isTouching = useRef(false);

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - sliderRef.current.offsetLeft;
        scrollLeft.current = sliderRef.current.scrollLeft;

        sliderRef.current.addEventListener('mousemove', handleMouseMove);
        sliderRef.current.addEventListener('mouseup', handleMouseUp);
        sliderRef.current.addEventListener('mouseleave', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        sliderRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        if (!isDragging.current) return;
        isDragging.current = false;

        const slideWidth = sliderRef.current.clientWidth;
        const newIndex = Math.round(sliderRef.current.scrollLeft / slideWidth);
        setCurrentIndex(newIndex);

        sliderRef.current.removeEventListener('mousemove', handleMouseMove);
        sliderRef.current.removeEventListener('mouseup', handleMouseUp);
        sliderRef.current.removeEventListener('mouseleave', handleMouseUp);
    };

    const handleTouchStart = (e) => {
        isTouching.current = true;
        startTouchX.current = e.touches[0].pageX - sliderRef.current.offsetLeft;
        scrollLeft.current = sliderRef.current.scrollLeft;
    };

    const handleTouchMove = (e) => {
        if (!isTouching.current) return;
        const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
        const walk = (x - startTouchX.current) * 2;
        sliderRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleTouchEnd = () => {
        if (!isTouching.current) return;
        isTouching.current = false;

        const slideWidth = sliderRef.current.clientWidth;
        const newIndex = Math.round(sliderRef.current.scrollLeft / slideWidth);
        setCurrentIndex(newIndex);
    };

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slider">
            <div
                className="slider-content"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="slide-box" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    <img className="img-desktop" src={slide1} alt="slide 1" />
                    <img className="img-mobile" src={slide1mob} alt="slide 1" />
                </div>
                <div className="slide-box" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    <img className="img-desktop" src={slide2} alt="slide 2" />
                    <img className="img-mobile" src={slide2mob} alt="slide 2" />
                </div>
                <div className="slide-box" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    <img className="img-desktop" src={slide3} alt="slide 3" />
                    <img className="img-mobile" src={slide3mob} alt="slide 3" />
                </div>
            </div>
            <button className="arrow prev" onClick={prevImage}>❮</button>
            <button className="arrow next" onClick={nextImage}>❯</button>

            <div className="indicators">
                {[0, 1, 2].map((index) => (
                    <span
                        key={index}
                        className={`indicator ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handleIndicatorClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carrosel;
