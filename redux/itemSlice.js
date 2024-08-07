// redux/itemsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`);
  const data = await res.json();
  return data;
});

export const addItem = createAsyncThunk('items/addItem', async (newItem) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newItem),
  });
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`);
  const data = await res.json();
  return data;
});

export const editItem = createAsyncThunk(
  'items/editItem',
  async ({ id, updatedItem }) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`);
    const data = await res.json();
    return data;
  }
);

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(editItem.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default itemsSlice.reducer;
