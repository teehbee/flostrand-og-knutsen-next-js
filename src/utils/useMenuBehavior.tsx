import { useEffect } from "react";

interface UseMenuBehaviorProps {
  isMenuOpen: boolean;
  menuRef: React.RefObject<HTMLElement | null>;
  onClose: () => void;
}

// Utilities for handling menu behavior

export function useMenuBehavior({ isMenuOpen, menuRef, onClose }: UseMenuBehaviorProps) {
  // Handle clicks outside of mobile menu

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    // Handle esc clicks when mobile menu is open

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Class handling controlling scroll lock and body backdrop when mobile menu is open

    if (isMenuOpen) {
      document.body.classList.add("menu-open", "no-scroll");
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
    } else {
      document.body.classList.remove("menu-open", "no-scroll");
    }

    return () => {
      document.body.classList.remove("menu-open", "no-scroll");
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isMenuOpen, menuRef, onClose]);
}
