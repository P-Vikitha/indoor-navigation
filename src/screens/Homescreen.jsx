import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { back_url } from "../../backendUrl";

export default function Homescreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rooms, setRooms] = useState();
  useEffect(() => {
    const fetchData = async () => {
      console.log("boobies");
      await axios
        .get(`${back_url}/room/allRooms`)
        .then((resp) => {
          console.log(resp.data.data);
          setRooms(resp.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(err);
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      I love boobies
      {!loading && (
        <section>
          {rooms.map((room) => {
            return <div>Ma chuda {room?.name} mai</div>;
          })}
        </section>
      )}
      {loading && <div>Loading</div>}
      <Link to="/Login">login</Link>
      <Link to="/Signup">Signup</Link>
    </div>
  );
}
