import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface RouterLinkProps extends Omit<LinkProps, 'to'> {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const RouterLink: React.FC<RouterLinkProps> = ({ href, children, className, onClick, ...props }) => {
  // Handle external links
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Handle internal links with React Router
  return (
    <Link
      to={href}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default RouterLink;