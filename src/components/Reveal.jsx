import useReveal from '../hooks/useReveal.js';

export default function Reveal({ as: Tag = 'div', className = '', children, threshold, ...rest }) {
  const [ref, inView] = useReveal(threshold);
  return (
    <Tag ref={ref} className={`reveal-up${inView ? ' in' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
