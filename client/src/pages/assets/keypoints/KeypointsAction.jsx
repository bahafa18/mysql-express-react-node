const KeypointsAction = (props) => {
  return (
    <div className="action">
      <form action="" onSubmit={props.handleSubmit}>
        <label htmlFor="keypoint">keypoint Name</label>
        <input
          type="text"
          id="keypoint"
          value={props.keypoint}
          placeholder="masukkan keypoint ..."
          onChange={(e) => {
            props.setKeypoint(e.target.value);
          }}
        ></input>

        <select
          name="kpType"
          id="kpType"
          value={
            props.selectKpType == null ? "placeholder" : props.selectKpType
          }
          onChange={(e) => {
            if (e.target.value == "placeholder") {
              props.setSelectKpType(null);
            } else {
              props.setSelectKpType(e.target.value);
            }
          }}
        >
          <option value="placeholder">Pilih Tipe ...</option>
          {props.kpTypes.map((kpType) => {
            return (
              <option value={kpType.id} key={kpType.id}>
                {kpType.name}
              </option>
            );
          })}
        </select>

        <select
          name="substation"
          id="substation"
          value={
            props.selectSubstation == null
              ? "placeholder"
              : props.selectSubstation
          }
          onChange={(e) => {
            if (e.target.value == "placeholder") {
              props.setSelectSubstation(null);
            } else {
              props.setSelectSubstation(e.target.value);
              props.getSubstationsChildren(e.target.value);
              props.setSelectFeeder(null);
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
          name="feeder"
          id="feeder"
          value={
            props.selectFeeder == null ? "placeholder" : props.selectFeeder
          }
          onChange={(e) => {
            if (e.target.value == "placeholder") {
              props.setSelectFeeder(null);
            } else {
              props.setSelectFeeder(e.target.value);
            }
          }}
        >
          <option value="placeholder">Pilih Feeder ...</option>
          {props.feeders.map((feeder) => {
            return (
              <option value={feeder.id} key={feeder.id}>
                {feeder.name}
              </option>
            );
          })}
        </select>
        <button type="submit">{props.action}</button>
      </form>
    </div>
  );
};

export default KeypointsAction;
