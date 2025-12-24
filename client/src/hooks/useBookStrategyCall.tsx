import { useState } from "react";
import BookStrategyCallModal from "@/components/BookStrategyCallModal";

export function useBookStrategyCall() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const Modal = () => (
    <BookStrategyCallModal open={modalOpen} onOpenChange={setModalOpen} />
  );

  return {
    openModal,
    closeModal,
    Modal,
    modalOpen
  };
}
