interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`bg-primary/60 rounded-xl p-5 backdrop-blur-lg ${className}`}
    >
      {children}
    </div>
  );
}
