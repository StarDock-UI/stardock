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
	const baseStyles = 'rounded-lg transition-colors transition-medium cursor-pointer m-2';

	const sizeStyles = {
		small: 'px-3 py-1 text-sm',
		medium: 'px-4 py-2 text-base',
		large: 'px-5 py-3 text-lg',
	};

	const variantStyles = {
		primary: 'bg-grapeink text-snowlight hover:bg-violettease',
		secondary: 'bg-slateveil text-snowlight hover:bg-duskshade',
		outline: ' bg-firebud   border border-ghostveil text-duskshade hover:bg-ashcloud',
		ghost: '   bg-forestink text-snowlight hover:bg-ashcloud',
		link: ' bg-azurebreeze text-snowlight underline hover:text-deepwave',
	};

	const disabledStyles = 'opacity-50 cursor-disable';

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
				<span className="inline-block animate-spin border border-t-transparent border-white rounded-full w-4 h-4 mr-2" />
			) : null}
			{label}
		</button>
	);
};

export default Button;
