const FeederList = (props) => {
  return (
    <div className="list">
      <button
        onClick={() => {
          props.setAction("Add");
          props.setFeeder("");
          props.getSubstations();
          props.getDcc();
          props.setSelectDcc("placeholder");
          props.setSelectSubstation("placeholder");
        }}
      >
        Add
      </button>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>Nama Feeder</td>
            <td>Gardu Induk</td>
            <td>DCC</td>
          </tr>
        </thead>
        <tbody>
          {props.data.map((feeder, index) => {
            let i = 0;
            return (
              <tr key={feeder.id}>
                <td>{index + 1}</td>
                <td>{feeder.name}</td>
                <td>{feeder.substation.name}</td>
                <td>{feeder.dcc.name}</td>
                <td>
                  <button
                    onClick={() => {
                      props.setAction("Edit");
                      props.setId(feeder.id);
                      props.setFeeder(feeder.name);
                      props.setSelectSubstation(feeder.substation.id);
                      props.setSelectDcc(feeder.dcc.id);
                      props.getSubstations();
                      props.getDcc();
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      props.setAction("Delete");
                      props.setId(feeder.id);
                      props.setFeeder(feeder.name);
                      props.setSelectSubstation(feeder.substation.id);
                      props.setSelectDcc(feeder.dcc.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FeederList;
