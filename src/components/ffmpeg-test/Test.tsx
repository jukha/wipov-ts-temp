import { useState, useRef } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL, fetchFile } from "@ffmpeg/util";

function Test() {
  const [loaded, setLoaded] = useState(false);
  const [extracting, setExtracting] = useState(false);
  const ffmpegRef = useRef(new FFmpeg());
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const messageRef = useRef<HTMLParagraphElement | null>(null);

  const load = async () => {
    const baseURL = "https://unpkg.com/@ffmpeg/core-mt@0.12.4/dist/esm";
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on("log", ({ message }) => {
      if (messageRef.current) messageRef.current.innerHTML = message;
    });

    // toBlobURL is used to bypass CORS issue, urls with the same
    // domain can be used directly.
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm"
      ),
      workerURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.worker.js`,
        "text/javascript"
      ),
    });

    setLoaded(true);
  };

  const transcode = async () => {
    setExtracting(true);
    const videoURL = "/assets/images/vid.mp4";
    const ffmpeg = ffmpegRef.current;

    // Create a unique file name for each extraction
    const outputFileName = `output_${Date.now()}.mp4`;

    await ffmpeg.writeFile("input.avi", await fetchFile(videoURL));
    await ffmpeg.exec(["-i", "input.avi", outputFileName]);

    const fileData = await ffmpeg.readFile(outputFileName);
    const data = new Uint8Array(fileData as ArrayBuffer);

    if (videoRef.current) {
      videoRef.current.src = URL.createObjectURL(
        new Blob([data.buffer], { type: "video/mp4" })
      );
    }

    setExtracting(false);
  };

  return loaded ? (
    <>
      <video ref={videoRef} controls={true}></video>
      <br />
      <button onClick={transcode} disabled={extracting}>
        {extracting ? "Extracting..." : "Extract Blocks from Video"}
      </button>
      <p ref={messageRef}></p>
    </>
  ) : (
    <button onClick={load}>Load ffmpeg-core</button>
  );
}

export default Test;
