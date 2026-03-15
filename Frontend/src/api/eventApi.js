import api from "./axios";

export const registerEvents = async (trxnId, events) => {
  const res = await api.post(
    "/users/eventRegister",
    {
      trxnId,
      events,
    },
    {
      withCredentials: true,
    }
  );

  return res.data;
};