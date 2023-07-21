import "./keypoints.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import KeypointList from "./KeypointList";
import KeypointsAction from "./KeypointsAction";

const Keypoints = () => {
  const [keypoints, setKeypoints] = useState([]);
  const [kpTypes, setKpTypes] = useState([]);
  const [feeders, setFeeders] = useState([]);
  const [substations, setSubstations] = useState([]);
  const [action, setAction] = useState("Add");
  const [keypoint, setKeypoint] = useState("");
  const [getId, setId] = useState("");
  const [selectKpType, setSelectKpType] = useState(null);
  const [selectFeeder, setSelectFeeder] = useState(null);
  const [selectSubstation, setSelectSubstation] = useState(null);

  useEffect(() => {
    getKeypoints();
  }, []);

  const getKeypoints = async () => {
    const response = await axios.get("http://localhost:3100/keypoints");
    setKeypoints(response.data);
  };

  const getKpTypes = async () => {
    const response = await axios.get("http://localhost:3100/keypointTypes");
    setKpTypes(response.data);
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
        if (keypoint != "") {
          const response = await axios.post("http://localhost:3100/keypoints", {
            name: keypoint,
            feederId: selectFeeder,
            keypointTypeId: selectKpType,
          });
          console.log(response);
        } else {
          alert("Nama keypoint tidak boleh kosong !!");
        }
      }
      if (action == "Edit") {
        if (keypoint != "") {
          await axios.patch("http://localhost:3100/keypoints/" + getId, {
            name: keypoint,
            feederId: selectFeeder,
            keypointTypeId: selectKpType,
          });
          console.log(response);
        } else {
          alert("Nama keypoint tidak boleh kosong !!");
        }
      }

      if (action == "Delete") {
        await axios.delete("http://localhost:3100/keypoints/" + getId);
        console.log(response);
      }
      getKeypoints();
      setKeypoint("");
      setId("");
      setSelectSubstation(null);
      setSelectFeeder(null);
      setSelectKpType(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="keypoints">
      <div className="keypointList">
        <KeypointList
          data={keypoints}
          setAction={setAction}
          setId={setId}
          setKeypoint={setKeypoint}
          getSubstations={getSubstations}
          getSubstationsChildren={getSubstationsChildren}
          getKpTypes={getKpTypes}
          setSelectSubstation={setSelectSubstation}
          setSelectFeeder={setSelectFeeder}
          setSelectKpType={setSelectKpType}
        />
      </div>

      <div className="keypointAction">
        <KeypointsAction
          className="keypointAction"
          handleSubmit={handleSubmit}
          keypoint={keypoint}
          setKeypoint={setKeypoint}
          getSubstationsChildren={getSubstationsChildren}
          getSubstations={getSubstations}
          getKpTypes={getKpTypes}
          setSelectKpType={setSelectKpType}
          setSelectFeeder={setSelectFeeder}
          setSelectSubstation={setSelectSubstation}
          selectSubstation={selectSubstation}
          selectFeeder={selectFeeder}
          selectKpType={selectKpType}
          action={action}
          substations={substations}
          feeders={feeders}
          kpTypes={kpTypes}
        />
      </div>
    </div>
  );
};

export default Keypoints;
