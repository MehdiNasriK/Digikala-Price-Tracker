function BtnAdd({state, handler}) {
  return (
    <button
      className={`btn ${state === "+ Add to My List" ? "btn-add" : "btn-added"}`}
      onClick={handler}
    >
      {state}
    </button>
  );
}

export default BtnAdd
