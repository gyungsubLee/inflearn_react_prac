import Button from "../../ui/Button/Button";
import "./index.css";

const SideBarFooter = ({ onClick }) => {
  return (
    <div className="SideBarFooter">
      <Button onClick={onClick} />
    </div>
  );
};

export default SideBarFooter;
