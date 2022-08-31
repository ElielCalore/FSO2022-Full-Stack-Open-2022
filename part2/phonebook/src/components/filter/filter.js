const Filter = ({ persons, search, remove }) => {
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
                <button
                  className="btn btn-danger"
                  onClick={() => remove(currentElement.id, currentElement.name)}
                >
                  delete
                </button>
              </strong>
            </div>
          );
        })}
    </div>
  );
};

export default Filter;
