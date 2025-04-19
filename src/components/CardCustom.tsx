import { useRef } from 'react';
import '../styles/cardCustom.css';

interface ICardProps {
    title: string;
    text: string;
    icon: string;
}

export default function CardCustom({ title, text, icon }: ICardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
       
        const moveX = (x - centerX) / 5;
        const moveY = (y - centerY) / 5;
        
        card.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'translate(0, 0)';
    };

    return (
        <div 
            className="card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <span>
                <img src={icon} alt="icone" width={64} height={64} />
            </span>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{text}</p>  
            </div>
        </div>
    );
}