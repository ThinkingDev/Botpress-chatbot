import api from "../utils/api";

export const setDealerId = async (id) => {
  console.log("id => ", id);
  await api
    .post("/chatbot/set-id", { dealer_id: id })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};
