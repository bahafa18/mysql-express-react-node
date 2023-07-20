const KeypointList = (props) => {
  return (
    <div className="list">
      <button
        onClick={() => {
          props.setAction("Add");
          props.setKeypoint("");
          props.getSubstations();
          props.setSelectSubstation(null);
          props.setSelectFeeder(null);
        }}
      >
        Add
      </button>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>Nama Keypoint</td>
            <td>Nama Feeder</td>
            <td>Nama Gardu Induk</td>
          </tr>
        </thead>
        <tbody>
          {props.data.map((keypoint, index) => {
            let i = 0;
            return (
              <tr key={keypoint.id}>
                <td>{index + 1}</td>
                <td>{keypoint.name}</td>
                <td>{keypoint.feeder.name}</td>
                <td>{keypoint.feeder.substation.name}</td>
                <td>
                  <button
                    onClick={() => {
                      props.setAction("Edit");
                      props.setId(keypoint.id);
                      props.setKeypoint(keypoint.name);
                      props.setSelectSubstation(keypoint.feeders.id)
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      props.setAction("Delete");
                      props.setId(keypoint.id);
                      props.setKeypoint(keypoint.name);
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

export default KeypointList;
