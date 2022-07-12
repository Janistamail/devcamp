import React, { useEffect, useState } from "react";
import axios from "axios";


const SuccessDetail = () => {
  const [orders, setOrders] = useState(null);
  const [show, setShow] = useState(null);
  const get = async () => {
    const res = await axios.get("bartenders/success");
    setOrders(res.data);
  };
  useEffect(() => {
    (!orders) ? get() : <></>;

  }, []);
  if (orders) {
    let results = orders.reduce(function (results, org) {
      (results[org.id_order] = results[org.id_order] || []).push(org);
      return results;

    }, {})
    // show.push(results)
    const entries = Object.values(results);
    if (!show) {
      setShow(entries);

    }

    console.log(show);
  }

  return (
    <div
      style={{ paddingTop: "100px", padding: "10px", paddingBottom: "100px", marginTop: "90px" }}
    >
      {show &&
        show.map((x, index) => (
          <div className="mt-2 sm:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-1">
              <div className="mt-2 md:mt-0 md:col-span-2">
                <form
                  action="#"
                // onSubmit={handleSubmit}
                >
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-6 bg-home space-y-2 sm:p-6">
                      <fieldset>
                        <legend className="font-large text-white text-center" >
                          Order No. {x[0].id_order}
                        </legend>
                        <table style={{ width: "100%", margin: "0px auto" }}>
                          <tr>
                            <th style={{ color: "white" , textAlign : "center"}}>
                              ลำดับ
                            </th>
                            <th style={{ color: "white", textAlign : "center" }}>
                              รายการ
                            </th>
                            <th style={{ color: "white", textAlign : "center" }}>
                              ประเภท
                            </th>
                            <th style={{ color: "white", textAlign : "center" }}>
                              จำนวน
                            </th>
                          </tr>
                          {
                            x.map((x, index) => (
                              <>
                                <tr>
                                  <td style={{ color: "white", textAlign : "center" }}>
                                    {index + 1}
                                  </td>
                                  <td style={{ color: "white", textAlign : "center" }}>
                                    {x.product_name}
                                  </td>
                                  <td style={{ color: "white", textAlign : "center" }}>
                                    {x.type}
                                  </td>
                                  <td style={{ color: "white" , textAlign : "center"}}>
                                    {x.amount}
                                  </td>
                                </tr>
                              </>
                            ))
                          }
                        </table>

                      </fieldset>
                    </div>
                    {/* <div className="px-4 py-3 bg-home text-center sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      style={{ marginRight: "10px"}}
                      >
                        รับออเดอร์
                      </button>

                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        style={{ marginRight: "10px"}}
                      >
                        กำลังทำ
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        style={{ marginRight: "10px"}}
                      >
                        เสร็จ
                      </button>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SuccessDetail;