import React from 'react';
import './Button.scss';

interface ButtonProps {
	label: string;
	onClick: () => void;
	variant: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant }) => {
	return (
		<button className={`btn btn-${variant}`} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
