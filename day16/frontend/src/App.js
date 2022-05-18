import axios from "axios";
import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  // let people = [];
  useEffect(() => {
    const getAns = async () => {
      let res = await axios.get("/api/users");
      await setData(res.data);

      // console.log(data);
    };
    getAns();
  }, []);
  console.log(data);

  return (
    <Row>
      {data.map((x) => {
        return (
          // <div className="site-card-wrapper">
          <Col span={4} key={x.id}>
            <Card style={{ justifyItems: "center" }}>
              <p>{x.id}</p>
              <p>{x.firstname}</p>
              <p>{x.lastname}</p>
              <p>{x.age}</p>
            </Card>
          </Col>
          // </div>
        );
      })}
    </Row>
  );
}

export default App;
