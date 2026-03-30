import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "sale" | "new" | "outOfStock";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-gray-100 text-gray-800": variant === "default",
          "bg-red-100 text-red-800": variant === "sale",
          "bg-green-100 text-green-800": variant === "new",
          "bg-gray-200 text-gray-500": variant === "outOfStock",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
