import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { useTheme } from "../../lib/theme/ThemeContext";
import "./Modal.css";

interface ModalContextProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

interface ModalProps {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = ({
  children,
  isOpen: controlledIsOpen,
  onClose,
}: ModalProps) => {
  const [isOpenInternal, setIsOpenInternal] = useState(false);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : isOpenInternal;

  const { theme } = useTheme();

  const open = () => {
    if (!isControlled) setIsOpenInternal(true);
  };
  const close = () => {
    if (!isControlled) setIsOpenInternal(false);
    onClose?.();
  };

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {isOpen && (
        <div className={`modal-overlay modal-${theme}`}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const ModalHeader = ({ children }: { children: ReactNode }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalHeader must be used within Modal");
  return (
    <div className="modal-header">
      <h2>{children}</h2>
      <button onClick={context.close} aria-label="Закрыть модальное окно">
        ×
      </button>
    </div>
  );
};

export const ModalBody = ({ children }: { children: ReactNode }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalBody must be used within Modal");
  return <div className="modal-body">{children}</div>;
};

export const ModalFooter = ({ children }: { children: ReactNode }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalFooter must be used within Modal");
  return <div className="modal-footer">{children}</div>;
};
