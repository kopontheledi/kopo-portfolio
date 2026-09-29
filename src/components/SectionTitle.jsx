export default function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>

      <h2>{title}</h2>

      {copy && <span>{copy}</span>}
    </div>
  );
}