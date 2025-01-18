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

  const addMemo = (addMemo) => {
    const now = new Date().getTime();

    setMemos([
      ...memos,
      {
        title: "Untitled",
        content: "",
        createdAt: now,
        updatedAt: now,
      },
    ]);

    setMemoContainerIndex(memos.length);
  };

  const deleteMemo = (index) => {
    const newMemos = [...memos];

    newMemos.splice(index, 1);

    setMemos(newMemos);

    console.log(index, memoContainerIndex);

    if (index === memoContainerIndex) {
      setMemoContainerIndex(0);
    }
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
        setMemoContainerIndex={setMemoContainerIndex}
        memoContainerIndex={memoContainerIndex}
      />
      <MemoContainer memo={memos[memoContainerIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
