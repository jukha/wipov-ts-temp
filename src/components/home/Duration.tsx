import { useDispatch, useSelector } from "react-redux";
import { formatTime } from "../../utils/formatTime";
import { selectDuration, setDuration } from "./videoSetupSlice";
import { useState, useRef } from "react";

const durations = [30000, 45000, 60000];

function Duration() {
  const dispatch = useDispatch();
  const selectedDuration = useSelector(selectDuration);
  const [customDuration, setCustomDuration] = useState<any>("");
  const customDurationInputRef = useRef<HTMLInputElement>(null);

  function handleCustomDuration(value: number) {
    setCustomDuration(value);
    dispatch(setDuration(value));
  }

  function handleSetDuration(duration: any) {
    console.log(duration);
    dispatch(setDuration(duration));
  }

  
  return (
    <div className="card-custom">
      <p className="text-center">
        <span className="colored">Select Duration</span>
      </p>
      <div className="duation-wrapper">
        {durations.map((duration, i) => {
          return (
            <button
              key={i}
              type="button"
              className={`mt-3 ms-1 btn-global btn-duration ${
                selectedDuration !== duration ? "btn-white" : ""
              }`}
              onClick={() => handleSetDuration(duration)}
            >
              {formatTime(duration)}
            </button>
          );
        })}

        <button
          type="button"
          className="mt-3 ms-1 btn-global btn-duration btn-white"
          onClick={() => customDurationInputRef.current?.focus()}
        >
          Custom
        </button>
      </div>
      <div className="custom-duration">
        <label htmlFor="examplecustomeduration1" className="form-label">
          Add Custom Duration
        </label>
        <input
          type="number"
          className="form-control"
          id="examplecustomeduration1"
          ref={customDurationInputRef}
          value={customDuration}
          onChange={(e) => handleCustomDuration(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Duration;
