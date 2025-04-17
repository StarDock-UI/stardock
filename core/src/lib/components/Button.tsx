import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
	label: string;
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
	loading?: boolean;
	onClick?: () => void;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	label,
	variant = 'primary',
	size = 'medium',
	disabled = false,
	loading = false,
	onClick,
	className,
}) => {
	const baseStyles =
		'font-medium rounded-lg transition-colors duration-200 focus:outline-none';

	const sizeStyles = {
		small: 'px-3 py-1 text-sm',
		medium: 'px-4 py-2 text-base',
		large: 'px-5 py-3 text-lg',
	};

	const variantStyles = {
		primary: 'bg-blue-600 text-white hover:bg-blue-700',
		secondary: 'bg-gray-600 text-white hover:bg-gray-700',
		outline: 'border border-gray-400 text-gray-800 hover:bg-gray-100',
		ghost: 'text-gray-800 hover:bg-gray-100',
		link: 'text-blue-600 underline hover:text-blue-800',
	};

	const disabledStyles = 'opacity-50 cursor-not-allowed';

	return (
		<button
			disabled={disabled || loading}
			onClick={onClick}
			className={clsx(
				baseStyles,
				sizeStyles[size],
				variantStyles[variant],
				(disabled || loading) && disabledStyles,
				className
			)}
		>
			{loading ? (
				<span className='animate-spin border-2 border-t-transparent border-white rounded-full w-4 h-4 mr-2' />
			) : null}
			{label}
		</button>
	);
};

export default Button;
