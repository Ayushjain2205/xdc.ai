import { useEffect, useState } from "react";

const Realtime = ({ isDevMode }) => {
  const [data, setData] = useState([
    ["Volume", "$ 9,164.41 B"],
    ["Total Accounts", "188,097,228"],
    ["Transactions count", "6,509,879,296"],
    ["Block height", "55,285,772"],
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/realtime");
      const jsonData = await response.json();
      setData(Object.entries(jsonData));
    };

    //fetchData()
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  if (data.length === 0) {
    console.log(data);
    return null; // Render nothing if data is not yet available
  }

  return (
    <div className="flex flex-row justify-center items-center transition-opacity duration-500 ease-in-out">
      <p className="text-[14px] text-[#7A7A7A]">
        {data[currentIndex][0]}&nbsp; :
      </p>

      <p className={`text-[16px] font-bold  text-primary`}>
        &nbsp; {data[currentIndex][1]}
      </p>
    </div>
  );
};

export default Realtime;
