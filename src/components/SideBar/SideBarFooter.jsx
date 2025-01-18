import Button from "../ui/Button";

const SideBarFooter = ({ onClick }) => {
  return (
    <div className="SideBarFooter">
      <Button onClick={onClick} />
    </div>
  );
};

export default SideBarFooter;
