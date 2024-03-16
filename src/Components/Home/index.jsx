import { useEffect, useState } from "react";
import s from "./style.module.scss";
import { api } from "../../helpers/api";
import { Modal } from "./modal";

export const Home = ({ searchText }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (e, item) => {
    e.stopPropagation();
    setSelectedItem(item);
  };

  useEffect(() => {
    api("endpoint/react/data.json").then((data) => setData(data));
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter(
        (item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase()) ||
          item.text.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, data]);

  return (
    <>
      <main id="container" className={s.main}>
        {filteredData.map((item, i) => (
          <div
            key={i}
            className={s.item}
            onClick={(e) => handleSelectItem(e, item)}
          >
            <img src={item.img} alt={item.title} />
            <span className={s.tags}>{item.tags}</span>
            <h2>{item.title}</h2>
            <div className={s.dateLine}>
              <b>{item.autor}</b>
              <span>• {item.date} •</span>
              <span>{item.views} Views</span>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </main>
      {selectedItem && (
        <Modal selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      )}
    </>
  );
};
