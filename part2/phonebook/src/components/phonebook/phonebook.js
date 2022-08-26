const Phonebooks = ({ handleChangeSearch }) => {
  return (
    <div>
      <form>
        <h2>Phonebook</h2>
        <div>
          filter shown with
          <input
            size="large"
            type="text"
            placeholder="input search text"
            onChange={handleChangeSearch}
            enterButton
          />
        </div>
      </form>
    </div>
  );
};
export default Phonebooks;
