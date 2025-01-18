import MemoItem from "./MemoItem";

const onClickItem = (idx, setMemoIdex) => {
  setMemoIdex(idx);
  console.log("clicked!", idx);
};

const MemoList = ({
  memos,
  setMemoContainerIndex,
  memoContainerIndex,
  deleteMemo,
}) => {
  return (
    <div className="MemoList">
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClickItem={() => onClickItem(index, setMemoContainerIndex)}
          onClickDelete={(e) => {
            deleteMemo(index);
            e.preventDefault();
            e.stopPropagation();
          }}
          isSelected={index === memoContainerIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
};

export default MemoList;
