import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";
import { moveToPending } from "./EventSlice";
import { logout } from "./UserSlice"; // Import the logout action
import toast from "react-hot-toast";

const AUTH_SESSION_FLAG = "abh_session_active";
const AUTH_TOKEN_KEY = "abh_auth_token";

// ✅ Fetch all events (Handle expired token)
export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.get("/users/fetchEvents", {
        withCredentials: true, // Ensures cookies are sent
      });

      // normalize response shape
      return response.data?.data ?? response.data ?? {};
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem(AUTH_SESSION_FLAG);
        localStorage.removeItem(AUTH_TOKEN_KEY);
        dispatch(logout());
      }
      return rejectWithValue(error.response?.data || "Failed to fetch events");
    }
  }
);

// ✅ Move Processing Events to Pending (Handle expired token)
export const moveProcessingToPending = createAsyncThunk(
  "events/moveProcessingToPending",
  async (transactionId, { getState, dispatch, rejectWithValue }) => {
    try {
      const state = getState();
      const processingEvents = state.events.processing;

      if (!processingEvents.length) {
        return rejectWithValue({ message: "No events in processing!" });
      }

      const trxnId = transactionId.trxnId;

      const normalizedEvents = processingEvents.map((e) => ({
        ...e,
        eventId: String(e.eventId ?? e.id ?? "").trim(),
      }));

      const response = await api.post("/users/eventRegister", {
        trxnId,
        events: normalizedEvents,
      });

      dispatch(moveToPending({ trxnId, events: processingEvents }));
      toast.success("Payment done!");

      return response.data; // { trxnId, events }
    } catch (error) {
      console.log(error);

      if (error.response?.status === 401) {
        toast.error("Session expired. Please log in again.");
        localStorage.removeItem(AUTH_SESSION_FLAG);
        localStorage.removeItem(AUTH_TOKEN_KEY);
        dispatch(logout());
      }

      const serverMsg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Error processing payment.";

      toast.error(serverMsg);
      return rejectWithValue(error.response?.data || { message: serverMsg });
    }
  }
);
