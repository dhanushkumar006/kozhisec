
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // In a real implementation, you would apply theme changes here
  };

  return (
    <Toggle 
      pressed={isDark}
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "transition-colors hover:bg-muted", 
        className
      )}
    >
      {isDark ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Toggle>
  );
}
