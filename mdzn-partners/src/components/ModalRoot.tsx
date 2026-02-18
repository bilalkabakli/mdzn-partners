"use client";

import { useModal } from "./ModalContext";
import ApplicationModal from "./ApplicationModal";

export default function ModalRoot() {
  const { isOpen, modalType, closeModal } = useModal();
  return (
    <ApplicationModal
      isOpen={isOpen}
      onClose={closeModal}
      defaultTab={modalType === "influencer" ? "influencer" : "brand"}
    />
  );
}
