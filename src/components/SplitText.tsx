export function SplitText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <h1 className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline">
          <span
            className="split-word"
            style={{ "--word-delay": `${delay + i * 70}ms` } as React.CSSProperties}
          >
            <span className="split-word__inner">{word}</span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </h1>
  );
}
