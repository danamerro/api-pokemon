import "../sass/Button.scss";

interface ButtonProps {
  icon: React.ReactNode;
  handleClick: () => void;
}

const Button = ({ icon, handleClick }: ButtonProps) => {
  return (
    <div className="button__box">
      <button className="button" onClick={handleClick}>
        {icon}
      </button>
      <div className="button__shadow"></div>
    </div>
  );
};

export { Button };
