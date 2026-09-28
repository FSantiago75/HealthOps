import Eyebrow from './Eyebrow';

export default function SectionHeading({ eyebrow, title, text, align = 'left', tone = 'blue' }) {
  return (
    <div className={`section-heading section-heading--${align}`} data-reveal>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
