import axios from "axios";
import {useEffect, useState} from "react";

type Room = {
  id: string;
  players: string;
  roomMaxCapacity: number;
  host: string;
};
export default function useFindRooms(visible: boolean) {
  const [roomsData, setRoomsData] = useState<Room[]>([]);
  const [fetchError, setFetchError] = useState<null | Error>(null);
  const [loading, setLoading] = useState(false);

  const fetchRooms = async () => {
    setLoading(true);
    try {
      const {data} = await axios.get("http://localhost:5000/api/rooms/all");
      setRoomsData(data.rooms);
      setLoading(false);
    } catch (error) {
      setFetchError(error as Error);
      setLoading(false);
    }
  };

  const refetchRoom = () => {
    fetchRooms();
  };

  useEffect(() => {
    if (visible) fetchRooms();
  }, [visible]);



  return {roomsData, fetchError, loading, refetchRoom};
}
