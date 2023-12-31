const FeedersAction = (props) => {
  return (
    <div className="action">
      <form action="" onSubmit={props.handleSubmit}>
        <label htmlFor="feeder">Feeder Name</label>
        <input
          type="text"
          id="feeder"
          value={props.feeder}
          placeholder="masukkan feeder ..."
          onChange={(e) => {
            props.setFeeder(e.target.value);
          }}
        ></input>
        <select
          name="substation"
          id="substation"
          value={
            props.selectSubstation == null
              ? "placeholder"
              : props.selectSubstation
          }
          // defaultValue={"placeholder"}
          onChange={(e) => {
            if (e.target.value == "placeholder") {
              props.setSelectSubstation(null);
            } else {
              props.setSelectSubstation(e.target.value);
            }
          }}
        >
          <option value="placeholder">Pilih GI ...</option>
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
          value={props.selectDcc == null ? "placeholder" : props.selectDcc}
          // defaultValue={"placeholder"}
          onChange={(e) => {
            if (e.target.value == "placeholder") {
              props.setSelectDcc(null);
            } else {
              props.setSelectDcc(e.target.value);
            }
          }}
        >
          <option value="placeholder">Pilih DCC ...</option>
          {props.dccs.map((dcc) => {
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
