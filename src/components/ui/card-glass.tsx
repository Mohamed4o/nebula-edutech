import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardGlassProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const CardGlass = ({ children, className, hover = false }: CardGlassProps) => {
  return (
    <div
      className={cn(
        "bg-card/50 backdrop-blur-lg border border-border rounded-xl p-6",
        hover && "hover:border-primary transition-all duration-300 hover:shadow-glow-primary",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardGlass;
