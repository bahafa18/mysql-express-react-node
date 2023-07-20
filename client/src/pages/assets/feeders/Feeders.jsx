import "./feeders.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import FeederList from "./FeederList";
import FeedersAction from "./FeedersAction";

const Feeders = () => {
  const [feeders, setFeeders] = useState([]);
  const [action, setAction] = useState("Add");
  const [feeder, setFeeder] = useState("");
  const [getId, setId] = useState("");
  const [dccs, setDccs] = useState([]);
  const [substations, setSubstations] = useState([]);
  const [selectDcc, setSelectDcc] = useState(null);
  const [selectSubstation, setSelectSubstation] = useState(null);

  useEffect(() => {
    getFeeders();
  }, []);

  const getFeeders = async () => {
    const response = await axios.get("http://localhost:3100/feeders");
    setFeeders(response.data);
  };

  const getSubstations = async () => {
    const response = await axios.get("http://localhost:3100/substations");
    setSubstations(response.data);
  };

  const getDcc = async () => {
    const response = await axios.get("http://localhost:3100/dcc");
    setDccs(response.data);
  };

  const handleSubmit = async (req, res) => {
    event.preventDefault();
    try {
      if (action == "Add") {
        if (feeder != 0) {
          const response = await axios.post("http://localhost:3100/feeders", {
            name: feeder,
            substationId: selectSubstation,
            dccId: selectDcc,
          });
        } else {
          alert("Nama feeder tidak boleh kosong !!");
        }
      }
      if (action == "Edit") {
        if (feeder != 0) {
          await axios.patch("http://localhost:3100/feeders/" + getId, {
            name: feeder,
            substationId: selectSubstation,
            dccId: selectDcc,
          });
        } else {
          alert("Nama feeder tidak boleh kosong !!");
        }
      }

      if (action == "Delete") {
        await axios.delete("http://localhost:3100/feeders/" + getId);
      }
      getFeeders();
      setFeeder("");
      setId("");
      setSelectSubstation(null);
      setSelectDcc(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="feeders">
      <FeederList
        data={feeders}
        setAction={setAction}
        setId={setId}
        setFeeder={setFeeder}
        getSubstations={getSubstations}
        getDcc={getDcc}
        setSelectDcc={setSelectDcc}
        setSelectSubstation={setSelectSubstation}
      />

      <FeedersAction
        action={action}
        handleSubmit={handleSubmit}
        feeder={feeder}
        dccs={dccs}
        substations={substations}
        setFeeder={setFeeder}
        setSelectDcc={setSelectDcc}
        setSelectSubstation={setSelectSubstation}
        selectSubstation={selectSubstation}
        selectDcc={selectDcc}
      />
    </div>
  );
};

export default Feeders;
