import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      mail: "abc1@gmail.com",
      password: "123456",
      name: "ABC",
      cart: [],
      avata:
        "https://pepsilan.com/wp-content/uploads/2022/02/Hinh-Gau-Truc-Cute-Chibi-de-thuong-nhat.jpg",
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
