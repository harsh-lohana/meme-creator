import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";

const MemeGenerated = () => {
  const [param, setParam] = useSearchParams();
  const [copied, setCopied] = useState(false);
  const imgURL = param.get("url");
  const navigate = useNavigate();
  const clipborad  = useClipboard();
  const copyMeme = () => {
    clipborad.copy(imgURL);
    setCopied(true); 
  }
  return (
    <div className="flex flex-col items-center min-h-screen pb-[2vh] bg-gray-900">
      {imgURL && <img src={imgURL} alt="meme" />}
      <button onClick={copyMeme} className="bg-blue-600 hover:bg-blue-700 text-white text-xl mt-4 font-bold py-2 px-4 rounded-full">
        {copied ? "Copied!" : "Copy" }
      </button>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 hover:bg-blue-700 text-white text-xl m-4 font-bold py-2 px-4 rounded-full"
      >
        Make more Memes
      </button>
    </div>
  );
};

export default MemeGenerated;
