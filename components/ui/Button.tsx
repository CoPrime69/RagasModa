import React from 'react';

type ButtonProps = {
    text: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
};

export default function Button({ text, onClick, variant = 'primary' }: ButtonProps) {
    const baseStyles = "px-6 py-3 rounded-lg transition duration-300";
    const variantStyles = variant === 'primary' 
        ? "bg-blue-500 text-white hover:bg-blue-600" 
        : "bg-gray-500 text-white hover:bg-gray-600";

    return (
        <button 
            onClick={onClick} 
            className={`${baseStyles} ${variantStyles}`}
        >
            {text}
        </button>
    );
}