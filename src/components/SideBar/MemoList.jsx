import MemoItem from "./MemoItem";

const onClick = (idx, setMemoIdex) => {
  setMemoIdex(idx);
  console.log("clicked!", idx);
};

const MemoList = ({ memos, setMemoContainerIndex, memoContainerIndex }) => {
  return (
    <div className="MemoList">
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClick={() => onClick(index, setMemoContainerIndex)}
          isSelected={index === memoContainerIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
};

export default MemoList;
