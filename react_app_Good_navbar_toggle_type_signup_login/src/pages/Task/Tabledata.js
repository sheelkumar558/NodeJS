import React, { useState, useEffect } from "react";
// import axios from "axios";

const Tabledata = () => {
//   const [datafirst, setdatafirst] = useState([]);
//   const [datasecond, setdatasecond] = useState([]);

//   const fetchData = () => {
//     const data1Api = " https://www.balldontlie.io";
//     const data2Api = "http://localhost:4000/task";

//     const getalldata1 = axios.get(data1Api);
//     const getalldata2 = axios.get(data2Api);
//     axios.all([getalldata1, getalldata2]).then(
//       axios.spread((...allData) => {
//         const allDatafirst = allData[0];
//         const allDatasecond = allData[1];

//         setdatafirst(allDatafirst);
//         setdatasecond(allDatasecond);

//         console.log(allDatafirst);
//         console.log(allDatasecond);
//       })
//     );
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

  return (
    <div>
      {/* {datafirst}
      {datasecond} */}
      <table className=" table hover table-responsive">
        <thead className="text-capitalize">
          <th className="pt-3 pb-3">Id</th>
          <th className="pt-3 pb-3">title</th>
          <th className="pt-3 pb-3">completed</th>
          <th className="pt-3 pb-3">action</th>
        </thead>
        <tbody>
          {/* {data.map((p, index) => {
            return <Tr key={index} data={p} />;
          })} */}
        </tbody>
      </table>
    </div>
  );
};

const Tr = ({ datafirst }) => {
  return (
    <tr>
      {/* <td>{data.userId}</td> */}
      <td>{datafirst.id}</td>
      <td>{datafirst.title}</td>
      <td className="text-capitalize">
        {datafirst.completed ? "true" : "false"}
      </td>
      <td>
        <button
          class="danger text-white border-0 mt-2"
          style={{
            background: "red",
            borderRadius: "5px 5px",
            padding: "2px 15px",
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Tabledata;
