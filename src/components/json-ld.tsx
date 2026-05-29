// Renders a JSON-LD <script> block. Server-rendered with controlled data
// (no user input), so dangerouslySetInnerHTML is safe here.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
