import "../styles/buttons.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, secondary, loading = false, disabled = false , onclick}: IButtonProps) {
    return (
        <button 
            className={secondary ? "btn-secondary" : "btn-primary"} 
            disabled={disabled || loading} 
            type="submit"
            aria-busy={loading}
            onClick={onclick}
        >
            {loading ? (
                <span className="spinner" aria-label="Carregando..."></span>
            ) : (
                text
            )}
        </button>
    )
}
