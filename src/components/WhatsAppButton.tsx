import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/Icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  message: string;
  children?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp" | "gold";
  size?: "md" | "lg";
};

export function WhatsAppButton({
  message,
  children = "S'inscrire via WhatsApp",
  className,
  variant = "whatsapp",
  size = "lg"
}: WhatsAppButtonProps) {
  return (
    <Button
      href={getWhatsAppUrl(message)}
      variant={variant}
      size={size}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <WhatsAppIcon />
      <span>{children}</span>
    </Button>
  );
}
