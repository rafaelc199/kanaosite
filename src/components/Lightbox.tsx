import { useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  alt?: string;
};

export function Lightbox({ images, index, onClose, onIndexChange, alt }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prev = useCallback(
    () => onIndexChange((index - 1 + images.length) % images.length),
    [index, images.length, onIndexChange],
  );
  const next = useCallback(
    () => onIndexChange((index + 1) % images.length),
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    closeButtonRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 animate-fade-in flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de imagens"
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 text-white/80 hover:text-white transition"
        aria-label="Fechar galeria"
      >
        <X className="w-7 h-7" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-4 md:left-8 text-white/80 hover:text-white transition"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>
      <img
        src={images[index]}
        alt={alt ?? ""}
        onClick={(e) => e.stopPropagation()}
        decoding="async"
        className="max-h-[90vh] max-w-[92vw] object-contain"
      />
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-4 md:right-8 text-white/80 hover:text-white transition"
        aria-label="Imagem seguinte"
      >
        <ChevronRight className="w-10 h-10" />
      </button>
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.18em]">
        {index + 1} / {images.length}
      </span>
    </div>
  );
}
