const AddNew = ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <form>
        <h2>Add a new</h2>
        <div>
          name: <input onChange={handleChange} type="text" name="name" />
        </div>
        <div>
          number:
          <input onChange={handleChange} type="text" name="number" />
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">
            add
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddNew;
