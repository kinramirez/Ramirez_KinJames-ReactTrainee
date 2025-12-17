interface ButtonProps {
    text: string;
    color: string;
    textColor: string;
    onClick: () => void;
    className?: string;
}

function Button ({ text, color, textColor, onClick, className }: ButtonProps) {
    return (
        <button
            className={`w-20 h-20 ${className}`}
            style={{backgroundColor: color, color: textColor}}
            onClick={onClick}
        >
            {text}
        </button>
    ); 
}

export default Button;