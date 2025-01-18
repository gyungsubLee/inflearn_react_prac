import MemoList from "./MemoList";
import SideBarFooter from "./SideBarFooter";
import SideBarHeader from "./SideBarHeader";

const SideBar = ({ memos, setMemoContainerIndex, memoContainerIndex }) => {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        setMemoContainerIndex={setMemoContainerIndex}
        memoContainerIndex={memoContainerIndex}
      />
      <SideBarFooter />
    </div>
  );
};

export default SideBar;

//   title: "Memo 1",
//   content: "This is memo 1",
//   createdAt: time, // 생성 시간
//   updatedAt: time, // 수정 시간
