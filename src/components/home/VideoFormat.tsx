import { useDispatch, useSelector } from "react-redux";
import { selectFormat, setFormat } from "./videoSetupSlice";

const formats = [
  { name: "sixteen", value: "16:9" },
  { name: "nine", value: "9:16" },
  { name: "one", value: "1:1" },
];

function VideoFormat() {
  const dispatch = useDispatch();
  const selectedFormat = useSelector(selectFormat);

  function handleSetFormat(value: any) {
    dispatch(setFormat(value));
  }

  return (
    <div className="card-custom">
      <p className="text-center mb-3">
        <span className="colored">Video Format</span>
      </p>
      <div className="format-wrapper mb-3">
        {formats.map((format, i) => (
          <button
          key={i}
            type="button"
            className={`mt-3 ms-1 btn-global btn-duration ${
              selectedFormat !== format.value ? "btn-white" : ""
            } ${format.name}`}
            onClick={() => handleSetFormat(format.value)}
          >
            {format.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default VideoFormat;
