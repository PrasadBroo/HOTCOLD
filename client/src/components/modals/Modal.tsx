import { useRef } from "react";

type Props = {
    children: React.ReactNode;
    visible: boolean;
}

export default function Modal({children,visible}:Props) {
    const container = useRef<HTMLDivElement>(null);
    const onOverlayClick = (e: React.MouseEvent) => {
        if (!container.current?.contains(e.target as Node)) {
          //onClose();
        }
    };
  return (
    <div
      className=" fixed top-0 left-0 bottom-0 right-0 bg-black/50 backdrop-blur flex justify-center items-center"
      onClick={onOverlayClick}
    >
      {visible && children}
    </div>
  );
}
