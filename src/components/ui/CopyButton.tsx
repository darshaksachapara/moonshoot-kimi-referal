import { Copy, Check } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Button, type ButtonProps } from "./Button";
import { cn } from "@/lib/utils";

interface CopyButtonProps extends ButtonProps {
  value: string;
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Button
      variant="outline"
      size="sm"
      className={cn("gap-2 text-slate-300 hover:text-white border-slate-700 bg-slate-800/50", className)}
      onClick={() => copyToClipboard(value)}
      aria-label={isCopied ? "Link copied" : "Copy link"}
      {...props}
    >
      {isCopied ? (
        <>
          <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
          <span className="text-emerald-400">Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" aria-hidden="true" />
          <span>Copy link</span>
        </>
      )}
    </Button>
  );
}
