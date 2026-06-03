export default function CheckeredBar({ className = '', rows = 2 }: { className?: string; rows?: number }) {
  const height = rows * 24;

  return (
    <div
      className={`w-full ${className}`}
      style={{
        height: `${height}px`,
        backgroundImage: `
          linear-gradient(45deg, oklch(var(--primary-500)) 25%, transparent 25%),
          linear-gradient(-45deg, oklch(var(--primary-500)) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, oklch(var(--primary-500)) 75%),
          linear-gradient(-45deg, transparent 75%, oklch(var(--primary-500)) 75%)
        `,
        backgroundSize: '48px 48px',
        backgroundPosition: '0 0, 0 24px, 24px -24px, -24px 0px',
      }}
    />
  );
}