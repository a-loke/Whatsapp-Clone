import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        storedUsers: {},
    },
    reducers: {
        setStoredUsers: (state, action) => {
            const newUsers = action.payload;
            let existingUsers = state.storedUsers;
            existingUsers = { ...existingUsers, ...newUsers };
            state.storedUsers = existingUsers;
        },
    },
});

export const setStoredUsers = userSlice.actions.setStoredUsers;
export default userSlice.reducer;
