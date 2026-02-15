"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import ApplicationModal, { type TabType } from "./ApplicationModal";

/* ===== CONTEXT SHAPE ===== */
interface ModalContextValue {
  openModal: (tab?: TabType) => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

/* ===== PROVIDER ===== */
export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultTab, setDefaultTab] = useState<TabType>("influencer");

  const openModal = useCallback((tab?: TabType) => {
    setDefaultTab(tab ?? "influencer");
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <ApplicationModal
        isOpen={isOpen}
        onClose={closeModal}
        defaultTab={defaultTab}
      />
    </ModalContext.Provider>
  );
}

/* ===== HOOK ===== */
export function useModal(): ModalContextValue {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
