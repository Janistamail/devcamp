import axios from "axios";
import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/users").then((result) => {
      setData(result.data);
    });
  }, []);
  console.log(data);

  return (
    <Row>
      {data.map((x) => {
        return (
          // <div className="site-card-wrapper">
          <Col span={4}>
            <Card style={{ justifyItems: "center" }}>
              <p>{x.first_name}</p>
              <p>{x.email}</p>
              <img src={x.avatar} />
            </Card>
          </Col>
          // </div>
        );
      })}
    </Row>
  );
}

export default App;
