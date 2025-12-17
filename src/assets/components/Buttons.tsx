interface ButtonProps {
    text: string;
    color: string;
    textColor: string;
    onClick: () => void;
}

function Button ({ text, color, textColor, onClick }: ButtonProps) {
    return (
        <button
            className="w-20 h-20"
            style={{backgroundColor: color, color: textColor}}
            onClick={onClick}
        >
            {text}
        </button>
    ); 
}

export default Button;