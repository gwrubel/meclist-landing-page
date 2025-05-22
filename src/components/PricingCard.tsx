import Button from './Button';
import check from '../assets/icons/check.svg'
import '../styles/pricingCard.css'

interface IPricingCardProps {
    title: string;
    text: string;
    price: string;
    features: string[];
    premium?: boolean;
    bonus?: string;
}

export default function PricingCard({
    title,
    text,
    price,
    features,
    premium = false,
    bonus
}: IPricingCardProps) {
    return (
        <div className={`pricing-card${premium ? ' premium' : ''}`}>
            {bonus && (
                <span className="bonus">
                    <p>{bonus}</p>
                </span>
            )}
            
            <span className="plan">
                <h3>{title}</h3>
                <p>{text}</p>
            </span>

            <span className="price">
                <h2>{price}</h2>
                <p>/mês</p>
            </span>

            <Button text="Pedir agora" key={title} secondary={!premium} />
            <span className="hr" />

            <ul className="features">
                {features.map((feature, index) => (
                    <li key={index}><img src={check} alt="check" width={22} height={22} />{feature}</li>
                ))}
            </ul>
        </div>
    );
}
