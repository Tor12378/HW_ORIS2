const Card = ({ name, id, btns }) => {
  const colors = new Map();
  colors.set("bug", "#42946C");
  colors.set("dragon", "#61C1B6");
  colors.set("grass", "#5ABE79");
  colors.set("steel", "#8FDFAB");
  colors.set("dark", "#444649");
  colors.set("flying", "#8E9BAB");
  colors.set("normal", "#B98EB7");
  colors.set("ghost", "#91589D");
  colors.set("rock", "#5D3515");
  colors.set("ground", "#815831");
  colors.set("fighting", "#B95821");
  colors.set("fire", "#DC3E2D");
  colors.set("electric", "#F5C242");
  colors.set("poison", "#6846F6");
  colors.set("psychic", "#C92AB1");
  colors.set("fairy", "#DC506A");
  colors.set("water", "#4960E6");
  colors.set("ice", "#A2DEED");

  return (
    <div className="card">
      <div className="card_header">
        <p className="card_header_name">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
        <p className="card_header_number">{`#${id
          .toString()
          .padStart(3, "0")}`}</p>
      </div>
      <div className="card_body">
        <img
          className="card_body_image"
          src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt=""
        />
      </div>
      <div className="card_footer">
        {btns.map((x) => {
          return (
            <button
              className="card_footer_btn"
              style={{
                backgroundColor: `${colors.get(x.type.name.toLowerCase())}`,
              }}
            >
              {x.type.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
