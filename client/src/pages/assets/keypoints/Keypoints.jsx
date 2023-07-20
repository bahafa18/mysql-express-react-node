import "./keypoints.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import KeypointList from "./KeypointList";
import KeypointsAction from "./KeypointsAction";

const Keypoints = () => {
  const [keypoints, setKeypoints] = useState([]);
  const [feeders, setFeeders] = useState([]);
  const [substations, setSubstations] = useState([]);
  const [action, setAction] = useState("Add");
  const [keypoint, setKeypoint] = useState("");
  const [getId, setId] = useState("");
  const [getGiId, setGiId] = useState("");
  const [selectFeeder, setSelectFeeder] = useState(null);
  const [selectSubstation, setSelectSubstation] = useState(null);

  useEffect(() => {
    getKeypoints();
  }, []);

  const getKeypoints = async () => {
    const response = await axios.get("http://localhost:3100/keypoints");
    setKeypoints(response.data);
  };

  const getSubstationsChildren = async (gi) => {
    const response = await axios.get("http://localhost:3100/substations/" + gi);
    setFeeders(response.data.feeders);
  };

  const getSubstations = async () => {
    const response = await axios.get("http://localhost:3100/substations");
    setSubstations(response.data);
  };

  const handleSubmit = async (req, res) => {
    event.preventDefault();
    try {
      if (action == "Add") {
        if (keypoint != 0) {
          const response = await axios.post("http://localhost:3100/keypoints", {
            name: keypoint,
            feederId: selectFeeder,
          });
          console.log(response);
        } else {
          alert("Nama keypoint tidak boleh kosong !!");
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
      getKeypoints();
      setKeypoint("");
      setId("");
      setSelectSubstation(null);
      setSelectFeeder(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="keypoints">
      <KeypointList
        data={keypoints}
        setAction={setAction}
        setId={setId}
        setKeypoint={setKeypoint}
        getSubstations={getSubstations}
        setSelectSubstation={setSelectSubstation}
        setSelectFeeder={setSelectFeeder}
      />

      <KeypointsAction
        handleSubmit={handleSubmit}
        keypoint={keypoint}
        setKeypoint={setKeypoint}
        getSubstationsChildren={getSubstationsChildren}
        getSubstations={getSubstations}
        setSelectFeeder={setSelectFeeder}
        setSelectSubstation={setSelectSubstation}
        selectSubstation={selectSubstation}
        selectFeeder={selectFeeder}
        action={action}
        substations={substations}
        feeders={feeders}
      />
    </div>
  );
};

export default Keypoints;
