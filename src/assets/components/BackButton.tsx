interface BackButtonProps {
    onClick: () => void;
}

function BackButton({onClick} : BackButtonProps) {
    return (
        <button 
            className="absolute top-4 left-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={onClick}
        >
            &#8592; Back
        </button>
    );
}
export default BackButton;