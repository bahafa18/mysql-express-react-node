import axios from "axios";
import { useEffect, useState } from "react";
import "./substations.scss";
import SubstationsList from "./SubstationsList";
import SubstationsAction from "./SubstationsAction";

const Substations = () => {
  const [substations, setSubstations] = useState([]);
  const [action, setAction] = useState("Add");
  const [substation, setSubstation] = useState("");
  const [getId, setId] = useState("");

  useEffect(() => {
    getSubstations();
  }, []);

  const getSubstations = async () => {
    const response = await axios.get("http://localhost:3100/substations");
    setSubstations(response.data);
  };

  const handleSubmit = async (req, res) => {
    event.preventDefault();
    try {
      if (action == "Add") {
        await axios.post("http://localhost:3100/substations", {
          name: substation,
        });
      }
      if (action == "Edit") {
        await axios.patch("http://localhost:3100/substations/" + getId, {
          name: substation,
        });
      }

      if (action == "Delete") {
        await axios.delete("http://localhost:3100/substations/" + getId);
      }
      getSubstations();
      setSubstation("");
      setId("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="substations">
        <SubstationsList
          data={substations}
          setAction={setAction}
          setId={setId}
          setSubstation={setSubstation}
        />

        <SubstationsAction
          action={action}
          handleSubmit={handleSubmit}
          substation={substation}
          setSubstation={setSubstation}
        />
      </div>
    </>
  );
};

export default Substations;
