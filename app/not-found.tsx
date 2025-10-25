import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Template not found</h1>
      <p>The template you tried to open doesn&apos;t exist. Choose another design.</p>
      <Link href="/" className="button button--primary">
        Back to templates
      </Link>
    </main>
  );
}
