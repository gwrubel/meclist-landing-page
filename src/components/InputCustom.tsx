import '../styles/inputCustom.css'

interface IinputCustom {
    type: "text" | "password" | "email" | "number" | "tel" | "textarea";
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
}

export default function InputCustom({ 
    type, 
    required, 
    placeholder, 
    value, 
    onChange, 
    onFocus 
}: IinputCustom) {
    if (type === 'textarea') {
        return (
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                className="input-custom"
                required={required}
                rows={4} // opcional, define altura inicial
            />
        );
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            className="input-custom"
            required={required}
        />
    );
}
