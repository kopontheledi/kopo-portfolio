export default function SkillCard({ title, items }) {
  return (
    <article className="card">
      <h3>{title}</h3>

      <div className="tags">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}