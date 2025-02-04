import axios from "axios";
import { useQuery } from "react-query";

export default function useCard() {
   const { data: sharts = [], refetch } = useQuery({
     queryKey: ['sharts'],
     queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/shart`);
      return data;  
    }
   });
   return [sharts,refetch]

}