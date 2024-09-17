import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importa os ícones das setas
import './styles.css';

const CarrosselDetalhes = ({ imagens }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (imagens.length > 1) {
            const id = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
            }, 5000); // Troca de imagem a cada 5 segundos

            return () => clearInterval(id); // Limpa o intervalo ao desmontar
        }
    }, [imagens.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
    };

    if (!Array.isArray(imagens) || imagens.length === 0) {
        return <p>Nenhuma imagem disponível</p>;
    }

    return (
        <div className='container-carrosel'>
            <div className="carrossel">
                <div className="carrossel-slides">
                    {imagens.map((imagem, index) => (
                        <div
                            key={index}
                            className="carrossel-slide"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            <img src={imagem} alt={`Imagem ${index + 1}`} />
                        </div>
                    ))}
                </div>
                {imagens.length > 1 && (
                    <>
                        <button className="carrossel-prev" onClick={prevSlide}>
                            <FaChevronLeft color="black" size={30} /> {/* Ícone da seta anterior */}
                        </button>
                        <button className="carrossel-next" onClick={nextSlide}>
                            <FaChevronRight color="black" size={30} /> {/* Ícone da seta seguinte */}
                        </button>
                        <div className="carrossel-indicadores">
                            {imagens.map((_, index) => (
                                <span
                                    key={index}
                                    className={`carrossel-indicador ${
                                        index === currentIndex ? 'ativo' : ''
                                    }`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CarrosselDetalhes;
