import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/Icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  message: string;
  children?: string;
  className?: string;
};

export function WhatsAppButton({
  message,
  children = "S'inscrire via WhatsApp",
  className
}: WhatsAppButtonProps) {
  return (
    <Button
      href={getWhatsAppUrl(message)}
      variant="whatsapp"
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <WhatsAppIcon />
      <span>{children}</span>
    </Button>
  );
}
