const Filter = ({ persons, search }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {persons
        .filter((cur) => cur.name.toLowerCase().includes(search.toLowerCase()))
        .map((currentElement) => {
          return (
            <div key={currentElement.name}>
              <strong>
                {currentElement.name} {currentElement.number}
              </strong>
            </div>
          );
        })}
    </div>
  );
};

export default Filter;
