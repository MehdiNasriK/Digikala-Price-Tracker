function BtnDelete({ handler }) {
  return (
    <button
      className="btn btn-delete"
      onClick={handler}
    >
      Delete
    </button>
  );
}

export default BtnDelete
