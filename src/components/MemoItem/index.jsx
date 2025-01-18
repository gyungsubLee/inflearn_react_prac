import "./index.css";

const MemoItem = ({ children, onClickItem, onClickDelete, isSelected }) => {
  return (
    <dlv
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={onClickItem}
    >
      {children}
      <button className="MemoItem__delete-button" onClick={onClickDelete}>
        X
      </button>
    </dlv>
  );
};

export default MemoItem;
