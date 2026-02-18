"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type ModalType = "brand" | "influencer" | "agency" | null;

interface ModalContextType {
  modalType: ModalType;
  isOpen: boolean;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  modalType: null,
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback((type: ModalType) => {
    setModalType(type);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalType(null);
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ modalType, isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
