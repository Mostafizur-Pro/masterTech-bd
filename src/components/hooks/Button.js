const CustomButton = ({ children }) => {
  return (
    <button className="btn btn-accent bg-gradient-to-r from-success to-black text-white">
      {children}
    </button>
  );
};

export default CustomButton;
