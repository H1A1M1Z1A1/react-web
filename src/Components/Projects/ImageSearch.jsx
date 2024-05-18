import { useState, useEffect } from "react";
import Card from "./Components/Card";

export default function App() {
  const apiKey = "M8HHFtz_elYLUqKq84q4UTABU-SAU2wlAmW87OSrUBc";
  const [imageUrl, setImageUrl] = useState('');
  const [text, setText] = useState("dog");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=${apiKey}`);
        const data = await response.json();
        console.log(data);

        if (data.results && data.results.length > 0) {
          const firstImage = data.results[0];
          setImageUrl(firstImage.urls.full);
        } else {
          console.warn("No results found");
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchData();
  }, [text]);

  const onSubmit = (e) => {
    e.preventDefault();
    // You can perform any additional logic when the form is submitted
    // Update the text state only when the "done" button is clicked
    setText(e.target.elements.searchInput.value);
  }

  return (
    <div>
      <div className="m-5 w-50 bg-gray-500 p-5 ">
        <form onSubmit={onSubmit}>
          <div className="flex p-5 justify-center bg-green-300">
            <input name="searchInput" className="text-center" />
          </div>
          <button className="bg-black text-white" type="submit">done</button>
        </form>

        <div className="grid grid-cols-3 p-6 bg-blue-300">
          <Card text={text} imageUrl={imageUrl} />
        </div>
      </div>
    </div>
  );
}
