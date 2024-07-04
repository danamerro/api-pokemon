import "../sass/Card.scss";

interface CardProps {
  name: string;
  img: string;
}

const Card = ({ name, img }: CardProps) => {
  return (
    <div className="card">
      <p className="card__name">{name}</p>
      <div className="card__circle"></div>
      <img className="card__img" src={img} alt="pokemon img" />
    </div>
  );
};

export { Card };
