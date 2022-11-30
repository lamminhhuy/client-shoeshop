import axios from "axios";
export const changestatusOrder = (id) => {
const {data} = axios.put();
return data.message;
}