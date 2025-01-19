import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { setItem, getItem } from "./lib/storage";
import debounce from "lodash.debounce";

const time = new Date().getTime();

const debounceSetItem = debounce(setItem, 5000);

function App() {
  const [memos, setMemos] = useState(getItem("memos") || []);
  const [memoContainerIndex, setMemoContainerIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[memoContainerIndex] = newMemo;

    setMemos(newMemos);
    debounceSetItem("memos", newMemos);
  };

  const addMemo = () => {
    const now = new Date().getTime();

    const newMemos = [
      ...memos,
      {
        title: "Untitled",
        content: "",
        createdAt: now,
        updatedAt: now,
      },
    ];

    setMemos(newMemos);
    setMemoContainerIndex(memos.length);
    debounceSetItem("memos", newMemos);
  };

  const deleteMemo = (index) => {
    const newMemos = [...memos];

    newMemos.splice(index, 1);

    setMemos(newMemos);

    if (index === memoContainerIndex) {
      setMemoContainerIndex(0);
    }

    debounceSetItem("memos", newMemos);
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
