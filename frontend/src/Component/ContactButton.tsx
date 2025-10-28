import React from 'react';
import { Link } from 'react-router-dom';

interface ContactButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  children, 
  className = '', 
  onClick 
}) => {
  return (
    <Link
      to="/Contact"
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default ContactButton;