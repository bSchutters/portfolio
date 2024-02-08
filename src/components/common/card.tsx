interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`rounded-xl bg-primary/60 p-5 backdrop-blur-lg ${className}`}
    >
      {children}
    </div>
  );
}
