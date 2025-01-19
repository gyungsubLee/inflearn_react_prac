import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import { useCallback, useState } from "react";
import { setItem, getItem } from "./lib/storage";
import debounce from "lodash.debounce";

const debounceSetItem = debounce(setItem, 5000);

function App() {
  const [memos, setMemos] = useState(getItem("memos") || []);
  const [memoContainerIndex, setMemoContainerIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos[memoContainerIndex] = newMemo;

        debounceSetItem("memos", newMemos);

        return newMemos;
      });
    },
    [memoContainerIndex]
  );

  const addMemo = useCallback(() => {
    setMemos((memos) => {
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

      debounceSetItem("memos", newMemos);

      return newMemos;
    });

    // index Setter 함수에 memos state를 사용하고 있어, 의존성을 제거할 수 없다.
    // 다른 state(memoContainerIndex)의 setter이기 때문에, memos state를 명시적으로 넣어줘야 한다.
    setMemoContainerIndex(memos.length);
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos.splice(index, 1);

        if (index === memoContainerIndex) {
          setMemoContainerIndex(0);
        } else if (index < memoContainerIndex) {
          setMemoContainerIndex(memoContainerIndex - 1);
        }

        debounceSetItem("memos", newMemos);

        return newMemos;
      });
    },
    [memoContainerIndex]
  );

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
