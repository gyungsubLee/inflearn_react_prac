import "./App.css";
import MemoContainer from "./components/MemoContainer/MemoContainer";
import SideBar from "./components/SideBar/SideBar";
import { useState } from "react";

const time = new Date().getTime();

const defaultMemosData = [
  {
    title: "Memo 1",
    content: "This is memo 1",
    createdAt: time, // 생성 시간
    updatedAt: time, // 수정 시간
  },
  {
    title: "Memo 2",
    content: "This is memo 2",
    createdAt: time, // 생성 시간
    updatedAt: time, // 수정 시간
  },
];

function App() {
  const [memos, setMemos] = useState(defaultMemosData);

  const [memoContainerIndex, setMemoContainerIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[memoContainerIndex] = newMemo;

    setMemos(newMemos);
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        setMemoContainerIndex={setMemoContainerIndex}
        memoContainerIndex={memoContainerIndex}
      />
      <MemoContainer memo={memos[memoContainerIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
