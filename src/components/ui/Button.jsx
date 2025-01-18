const Button = ({ onClick }) => {
  return (
    <button className="custom-btn btn-3" onClick={onClick}>
      <span>메모 추가</span>
    </button>
  );
};

export default Button;
