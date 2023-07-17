import "./substations.scss";

const SubstationsList = (props) => {
  return (
    <div className="list">
      <button
        onClick={() => {
          props.setAction("Add");
          props.setSubstation("");
        }}
      >
        Add
      </button>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>Nama GI</td>
          </tr>
        </thead>
        <tbody>
          {props.data.map((substation, index) => {
            let i = 0;
            return (
              <tr key={substation.id}>
                <td>{index + 1}</td>
                <td>{substation.name}</td>
                <td>
                  <button
                    onClick={() => {
                      props.setAction("Edit");
                      props.setId(substation.id);
                      props.setSubstation(substation.name);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      props.setAction("Delete");
                      props.setId(substation.id);
                      props.setSubstation(substation.name);
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

export default SubstationsList;
