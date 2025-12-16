import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "leader" | "donor" | "neutral";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    leader: "bg-[#ECFDF3] text-[#EFEEF9] dark:bg-green-900/30 dark:text-green-400",
    donor: "bg-[#EFEEF9] text-[#9C6ED9] dark:bg-purple-900/30 dark:text-purple-400",
    neutral: "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 pt-0.5 pb-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
