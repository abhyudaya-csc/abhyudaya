import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents, moveProcessingToPending } from "./EventThunks";
import toast from "react-hot-toast";

// Helper function to check if an event already exists in the processing list
const eventExists = (events, eventId) => {
  return events.some((event) => String(event.eventId) === String(eventId));
};

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    processing: [],
    eventsPending: {}, // changed from null
    eventsPaid: {},    // changed from null
    status: "idle",
    error: null,
  },
  reducers: {
    addEvent: (state, action) => {
      if (!eventExists(state.processing, action.payload.eventId)) {
        state.processing.push(action.payload);
        toast.success("Added to wishlist! \n Visit profile to complete registration.");
      } else {
        toast.error("Already registered!");
      }
    },

    removeEvent: (state, action) => {
      state.processing = state.processing.filter(
        (event) => String(event.eventId) !== String(action.payload.eventId)
      );
    },

    moveToPending: (state, action) => {
      const { trxnId, events } = action.payload;
      state.eventsPending = {
        ...(state.eventsPending || {}),
        [trxnId]: events,
      };
      state.processing = [];
    },

    updateEventStatus: (state, action) => {
      const { trxnId, status } = action.payload;

      if (status === "Paid" && state.eventsPending?.[trxnId]) {
        state.eventsPaid = {
          ...(state.eventsPaid || {}),
          [trxnId]: state.eventsPending[trxnId],
        };
        delete state.eventsPending[trxnId];
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = "succeeded";

        // supports multiple response shapes
        const payload =
          action.payload?.events ??
          action.payload?.data?.events ??
          action.payload?.data ??
          action.payload ??
          {};

        state.eventsPending = payload.eventsPending || {};
        state.eventsPaid = payload.eventsPaid || {};
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error?.message || "Failed to fetch events";
      })
      .addCase(moveProcessingToPending.fulfilled, (state, action) => {
        const data = action.payload?.data || action.payload || {};
        const { trxnId, events } = data;

        if (trxnId && events) {
          state.eventsPending = {
            ...(state.eventsPending || {}),
            [trxnId]: events,
          };
        }
        state.processing = [];
      });
  },
});

export const { addEvent, removeEvent, moveToPending, updateEventStatus } =
  eventsSlice.actions;
export default eventsSlice.reducer;
