const FeedersAction = (props) => {
  return (
    <div className="action">
      <form action="" onSubmit={props.handleSubmit}>
        <label htmlFor="feeder">Feeder Name</label>
        <input
          type="text"
          id="feeder"
          value={props.feeder}
          onChange={(e) => {
            props.setFeeder(e.target.value);
          }}
        />
        <select
          name="substation"
          id="substation"
          onChange={(e) => {
            props.setSelectSubstation(e.target.value);
          }}
        >
          {props.substations.map((substation) => {
            return (
              <option value={substation.id} key={substation.id}>
                {substation.name}
              </option>
            );
          })}
        </select>
        <select
          name="dcc"
          id="dcc"
          onChange={(e) => {
            props.setSelectDcc(e.target.value);
          }}
        >
          {props.dcc.map((dcc) => {
            return (
              <option value={dcc.id} key={dcc.id}>
                {dcc.name}
              </option>
            );
          })}
        </select>
        <button type="submit">{props.action}</button>
      </form>
    </div>
  );
};

export default FeedersAction;
