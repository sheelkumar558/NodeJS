import React from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const App = () => {
  const [item, setItem] = useState("");
  const [itemData, setItemData] = useState([]);
  const [itemUpdateText, setItemUpdateText] = useState("");
  const [itemUpdate, setItemUpdate] = useState("");

  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5500/api/item", {
        item: item,
      });
      setItemData((prev) => [...prev, res.data]);
      setItem("");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const getData = () => {
    axios
      .get("http://localhost:5500/api/items")
      .then((res) => setItemData(res.data));
  };

  useEffect(() => {
    getData();
  }, [item]);

  const updateItemfun = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5500/api/item/${itemUpdate}`,
        { item: itemUpdateText }
      );

      const updated = itemData.findIndex((item) => item._id === itemUpdate);
      const updateItem = (itemData[updated].item = itemUpdateText);
      setItemUpdate("");
      setItemUpdateText("");
      console.log(res);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderUpdate = () => {
    return (
      <form>
        <input
          type="text"
          placeholder="New item"
          value={itemUpdateText}
          onChange={(e) => setItemUpdateText(e.target.value)}
        />
        <button onClick={updateItemfun}>Update</button>
      </form>
    );
  };

  const deleteItem = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5500/api/item/${id}`);
      console.log(res);
      const newList = itemData.filter((e) => e._id !== id);
      setItemData(newList);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <div>
        <form>
          <input
            type="text"
            placeholder="Add Todo Item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button onClick={addItem}>Add Todo</button>
        </form>
      </div>
      <div>
        {itemData.map((e) => {
          return (
            <div key={e.item}>
              {itemUpdate === e._id ? (
                renderUpdate()
              ) : (
                <>
                  <p>{e.item}</p>
                  <button onClick={() => renderUpdate(setItemUpdate(e._id))}>
                    Update
                  </button>
                  <button onClick={() => deleteItem(e._id)}>Delete</button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
