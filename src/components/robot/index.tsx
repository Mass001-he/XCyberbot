import { useRef } from "react";
import styles from "./index.module.less";
import Draggable from "react-draggable";

export default function Robot() {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable nodeRef={divRef as React.RefObject<HTMLDivElement>}>
      <div className={styles.robot} ref={divRef}></div>
    </Draggable>
  );
}
