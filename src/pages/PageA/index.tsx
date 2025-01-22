import { Link } from "react-router-dom";

const PageA = () => {
  return (
    <>
      <div>PageA</div>
      <div>
        <Link to="/2">move to PageB</Link>
      </div>
    </>
  );
};

export default PageA;
