import { useEffect, useRef, useState } from "react";
import styles from "./index.module.less";
import Draggable from "react-draggable";

export default function Robot() {
  const divRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "你好，我是DeepSeek机器人，有什么可以帮您？" },
  ]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "（这里对接DeepSeek回复）" },
      ]);
      setLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <Draggable
        nodeRef={divRef as React.RefObject<HTMLDivElement>}
        allowAnyClick={false}
      >
        <div
          className={styles.robot}
          ref={divRef}
          onClick={(e) => {
            if (e.target === divRef.current) {
              setOpen(!open);
            }
          }}
        >
          <div
            className={styles.chatbox + (open ? " " + styles.open : "")}
            style={{ pointerEvents: open ? "auto" : "none" }}
          >
            <div className={styles.header}>
              <span>客服机器人</span>
              <button
                className={styles.closeBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
              >
                ×
              </button>
            </div>
            <div className={styles.messages} ref={chatRef}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`${styles.messageWrapper} ${
                    msg.from === "user"
                      ? styles.userMsgWrapper
                      : styles.botMsgWrapper
                  }`}
                >
                  <div
                    className={
                      msg.from === "user" ? styles.userMsg : styles.botMsg
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div
                  className={`${styles.messageWrapper} ${styles.botMsgWrapper}`}
                >
                  <div className={styles.botMsg}>机器人正在输入...</div>
                </div>
              )}
            </div>
            <div className={styles.inputArea}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="请输入内容..."
                disabled={loading}
              />
              <button onClick={sendMessage} disabled={loading || !input.trim()}>
                发送
              </button>
            </div>
          </div>
        </div>
      </Draggable>
    </>
  );
}
