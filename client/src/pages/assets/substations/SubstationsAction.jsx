import "./substations.scss";

const SubstationsAction = (props) => {
  return (
    <div className="action">
      <form action="" onSubmit={props.handleSubmit}>
        <label htmlFor="substation">Substation Name</label>
        <input
          type="text"
          id="substation"
          value={props.substation}
          onChange={(e) => {
            props.setSubstation(e.target.value);
          }}
        />
        <button type="submit">{props.action}</button>
      </form>
    </div>
  );
};

export default SubstationsAction;
