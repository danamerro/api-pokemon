import "../sass/Button.scss";

interface ButtomProps {
  text: React.ReactNode;
}

const Buttom = ({ text }: ButtomProps) => {
  return (
    <div className="button_box">
      <button className="button">{text}</button>
    </div>
  );
};

export { Buttom };
