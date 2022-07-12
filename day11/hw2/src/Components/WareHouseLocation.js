import { Link, useLocation, useNavigate } from "react-router-dom";

const WareHouseDetail = () => {
  const location = useLocation();
  console.log(location.state);

  // let result = location.state.data;

  // return (
  //   <div>
  //     <p>result.wareHousename</p>
  //   </div>
  // );
  // console.log(x);
  return (
    <div>
      <p>
        FaxNo: {location.state.FaxNo}
        <br />
        Latitude: {location.state.Latitude}
        <br />
        Longitude: {location.state.Longitude}
        <br />
        TelNo: {location.state.TelNo}
        <br />
        id: {location.state.id}
        <br />
        wareHouseName: {location.state.wareHouseName}
        <br />
      </p>
    </div>
  );
};

const WareHouseLocation = () => {
  let navigate = useNavigate();

  const navigateFunc = (x) => {
    console.log(x);
    let data = x;
    navigate("/wareHouseLocation/wareHouseDetail", { state: data });
  };

  const wareHouseData = [
    {
      id: "id#11",
      wareHouseName: "HOME#11",
      Latitude: "Lat#11",
      Longitude: "Long#11",
      TelNo: "Tel#11",
      FaxNo: "Fax#11",
    },
    {
      id: "id#22",
      wareHouseName: "HOME#22",
      Latitude: "Lat#22",
      Longitude: "Long#22",
      TelNo: "Tel#22",
      FaxNo: "Fax#22",
    },
    {
      id: "id#33",
      wareHouseName: "HOME#33",
      Latitude: "Lat#33",
      Longitude: "Long#33",
      TelNo: "Tel#33",
      FaxNo: "Fax#33",
    },
    {
      id: "id#44",
      wareHouseName: "HOME#44",
      Latitude: "Lat#44",
      Longitude: "Long#44",
      TelNo: "Tel#44",
      FaxNo: "Fax#44",
    },
    {
      id: "id#55",
      wareHouseName: "HOME#55",
      Latitude: "Lat#55",
      Longitude: "Long#55",
      TelNo: "Tel#55",
      FaxNo: "Fax#55",
    },
  ];
  return (
    <div>
      <div>WareHouseLocation</div>
      <ul>
        {wareHouseData.map((x) => {
          return (
            <li>
              <button onClick={(e) => navigateFunc(x)}>
                {x.wareHouseName}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { WareHouseLocation, WareHouseDetail };
