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
  const [dcc, setDcc] = useState([]);
  const [substations, setSubstations] = useState([]);
  const [selectDcc, setSelectDcc] = useState("");
  const [selectSubstation, setSelectSubstation] = useState("");

  useEffect(() => {
    getFeeders();
  }, []);

  const getFeeders = async () => {
    const response = await axios.get("http://localhost:3100/feeders");
    setFeeders(response.data);
    console.log(response.data);
  };

  const getSubstations = async () => {
    const response = await axios.get("http://localhost:3100/substations");
    setSubstations(response.data);
  };

  const getDcc = async () => {
    const response = await axios.get("http://localhost:3100/dcc");
    setDcc(response.data);
  };

  const handleSubmit = async (req, res) => {
    event.preventDefault();
    try {
      if (action == "Add") {
        await axios.post("http://localhost:3100/feeders", {
          name: feeder,
          id_substation: selectSubstation,
          id_dcc: selectDcc,
        });
      }
      if (action == "Edit") {
        await axios.patch("http://localhost:3100/feeders/" + getId, {
          name: feeder,
        });
      }

      if (action == "Delete") {
        await axios.delete("http://localhost:3100/feeders/" + getId);
      }
      getFeeders();
      setFeeder("");
      setId("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="substations">
        <FeederList
          data={feeders}
          setAction={setAction}
          setId={setId}
          setFeeder={setFeeder}
          getSubstations={getSubstations}
          getDcc={getDcc}
        />

        <FeedersAction
          action={action}
          handleSubmit={handleSubmit}
          feeder={feeder}
          dcc={dcc}
          substations={substations}
          setFeeder={setFeeder}
          setSelectDcc={setSelectDcc}
          setSelectSubstation={setSelectSubstation}
        />
      </div>
    </>
  );
};

export default Feeders;
