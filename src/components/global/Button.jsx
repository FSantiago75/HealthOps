import { ArrowRight } from 'lucide-react';

export default function Button({ children, href = '#contato', variant = 'primary', className = '' }) {
  return (
    <a className={`button button--${variant} ${className}`} href={href}>
      <span>{children}</span>
      <span className="button__arrow" aria-hidden="true"><ArrowRight size={17} strokeWidth={1.9} /></span>
    </a>
  );
}
