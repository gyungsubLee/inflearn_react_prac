const MemoItem = ({ children, onClick, isSelected }) => {
  return (
    <dlv
      className={"MemoIte" + (isSelected ? " selected" : "")}
      onClick={onClick}
    >
      {children}
    </dlv>
  );
};

export default MemoItem;
