import { useDispatch, useSelector } from "react-redux";
import { selectNoOfBlocks, setBlocks } from "./videoSetupSlice";

function Blocks() {
  const dispatch = useDispatch();
  const selectedBlocks = useSelector(selectNoOfBlocks);

  function handleSetFormat(value: any) {
    dispatch(setBlocks(value));
  }

  return (
    <div className="card-custom">
      <p className="text-center">
        <span className="colored">
          Choose Number of blocks to edit for the video
        </span>
      </p>
      <div className="custom-duration">
        <input
          type="number"
          className="form-control"
          id="examplecustomeduration1"
          value={selectedBlocks}
          onChange={(e) => handleSetFormat(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Blocks;
