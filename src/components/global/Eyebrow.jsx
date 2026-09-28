export default function Eyebrow({ children, tone = 'blue' }) {
  return <p className={`eyebrow eyebrow--${tone}`}><span />{children}</p>;
}
