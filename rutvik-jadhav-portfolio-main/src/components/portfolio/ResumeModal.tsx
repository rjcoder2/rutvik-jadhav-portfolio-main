import { X } from "lucide-react";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ResumeModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative w-full max-w-4xl h-[80vh] bg-surface rounded-md overflow-hidden shadow-xl">
        <div className="flex items-center justify-between border-b border-divider px-4 py-2">
          <div className="font-mono-caps">Resume</div>
          <button
            aria-label="Close resume"
            onClick={onClose}
            className="inline-flex items-center justify-center p-2 text-foreground hover:bg-ink/5 rounded-md"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-full bg-white"
        />
      </div>
    </div>
  );
}
