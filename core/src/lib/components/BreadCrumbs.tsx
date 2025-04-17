import React from 'react';
import clsx from 'clsx';

interface BreadcrumbItem {
	label: string;
	href?: string;
}

interface BreadcrumbsProps {
	items: BreadcrumbItem[];
	separator?: string;
	variant?: 'default' | 'ghost' | 'underline';
	size?: 'small' | 'medium' | 'large';
	className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
	items,
	separator = '/',
	variant = 'default',
	size = 'medium',
	className,
}) => {
	const baseStyles = 'flex items-center m-2';

	const sizeStyles = {
		small: 'text-sm gap-1',
		medium: 'text-base gap-2',
		large: 'text-lg gap-3',
	};

	const variantStyles = {
		default: 'text-duskshade hover:text-grapeink',
		ghost: 'text-snowlight hover:text-azurebreeze',
		underline: 'underline underline-offset-4 text-duskshade hover:text-violettease',
	};

	return (
		<nav className={clsx(baseStyles, sizeStyles[size], className)} aria-label="Breadcrumb">
			<ol className="flex items-center">
				{items.map((item, index) => (
					<li key={index} className="flex items-center">
						{index > 0 && <span className="mx-2 text-gray-400">{separator}</span>}

						{item.href && index !== items.length - 1 ? (
							<a
								href={item.href}
								className={clsx(
									'transition-colors duration-150',
									variantStyles[variant]
								)}
							>
								{item.label}
							</a>
						) : (
							<span className="font-semibold text-gray-500">{item.label}</span>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
};

export default Breadcrumbs;
