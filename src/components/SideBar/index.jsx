import MemoList from "../MemoList";
import SideBarFooter from "../SideBarFooter";
import SideBarHeader from "../SideBarHeader";
import "./index.css";

const SideBar = ({
  memos,
  addMemo,
  deleteMemo,
  setMemoContainerIndex,
  memoContainerIndex,
}) => {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        deleteMemo={deleteMemo}
        setMemoContainerIndex={setMemoContainerIndex}
        memoContainerIndex={memoContainerIndex}
      />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
};

export default SideBar;
