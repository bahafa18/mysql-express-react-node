const KeypointList = (props) => {
  return (
    <div className="list">
      <button
        onClick={() => {
          props.setAction("Add");
          props.setKeypoint("");
          props.getSubstations();
          props.getKpTypes();
          props.setSelectSubstation(null);
          props.setSelectFeeder(null);
          props.setSelectKpType(null);
        }}
      >
        Add
      </button>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>Nama Keypoint</td>
            <td>Tipe</td>
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
                <td>{keypoint.keypointType.name}</td>
                <td>{keypoint.feeder.name}</td>
                <td>{keypoint.feeder.substation.name}</td>
                <td>
                  <button
                    onClick={() => {
                      props.setAction("Edit");
                      props.setId(keypoint.id);
                      props.setKeypoint(keypoint.name);
                      props.getSubstations();
                      props.getKpTypes();
                      props.getSubstationsChildren(
                        keypoint.feeder.substation.id
                      );
                      props.setSelectSubstation(keypoint.feeder.substation.id);
                      props.setSelectFeeder(keypoint.feeder.id);
                      props.setSelectKpType(keypoint.keypointType.id);
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
