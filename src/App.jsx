import Card from "./components/Card";
import { useEffect, useState } from "react";

const App = () => {
  const [memes, setMemes] = useState([]);
  const [index, setIndex] = useState(0);
  const [captions, setCaptions] = useState([]);

  const shuffleMemes = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  };

  const updateCaptions = (e, index) => {
    const text = e.target.value || "";
    setCaptions(
      captions.map((c, i) => {
        if (index === i) return text;
        else return c;
      })
    );
  };

  useEffect(() => {
    fetch(" https://api.imgflip.com/get_memes").then((res) => {
      res.json().then((res) => {
        const memesData = res.data.memes;
        shuffleMemes(memesData);
        setMemes(memesData);
      });
    });
  }, []);

  useEffect(() => {
    if (memes.length) {
      setCaptions(Array(memes[index].box_count).fill(""));
    }
  }, [index, memes]);

  useEffect(() => {
    console.log(captions);
  }, [captions]);

  return (
    <div className="flex flex-col items-center pt-[10vh] h-[100vh] bg-gray-900">
      <button
        onClick={() => setIndex(index + 1)}
        className="bg-blue-600 hover:bg-blue-700 text-white text-xl m-4 font-bold py-2 px-4 rounded-full"
      >
        Skip
      </button>
      <button
        onClick={() => console.log("clicked!")}
        className="bg-blue-600 hover:bg-blue-700 text-white text-xl m-4 font-bold py-2 px-4 rounded-full"
      >
        Generate
      </button>
      {captions.map((c, index) => (
        <input
          key={index}
          className="m-2 border-2 border-red-500"
          onChange={(e) => updateCaptions(e, index)}
        />
      ))}
      {memes.length && (
        <Card img={memes[index].url} boxes={memes[index].box_count} />
      )}
    </div>
  );
};

export default App;
