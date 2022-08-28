import { InputHTMLAttributes } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

interface INoteItemProps extends InputHTMLAttributes<HTMLInputElement>{
  isNew?: boolean;
  value?: string;
  onClick?: () => void;
}

export function NoteItem({ isNew = false, value, onClick, ...rest }: INoteItemProps) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button 
        type="button"
        onClick={onClick}
        className={ isNew ? 'button-add' : "button-delete"}
      >
        { isNew ? <FiPlus size={18} />: <FiX size={18} />}
      </button>
    </Container>
  )
}