import React from "react";
import Card from "./Card";
import NotFound from "./NotFound";
import "../scss/mainArea.scss";
function MainArea({ charactersInfo, filter }) {
  let filteredData = charactersInfo.filter(
    (item) =>
      item.species.name.startsWith(filter) ||
      item.id == filter ||
      item.species.name == filter
  );

  return (
    <div className="mainArea">
      {filteredData.length === 0 ? (
        <NotFound />
      ) : (
        filteredData.map((item) => {
          return (
            <Card name={item.species.name} id={item.id} btns={item.types} />
          );
        })
      )}
    </div>
  );
}

export default MainArea;
