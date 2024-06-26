import "../sass/Button.scss";

interface ButtomProps {
  text: string;
}

const Buttom = ({ text }: ButtomProps) => {
  return (
    <div className="button__box">
      <button className="button">{text}</button>
    </div>
  );
};

export { Buttom };
