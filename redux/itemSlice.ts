import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Item {
  _id: string;
  title: string;
  description: string;
  addedBy: string;
  emailAddress: string;
  ingredients: string;
  instructions: string;
}

interface ItemsState {
  items: Item[];
  selectedItem: Item | null;
  loading: boolean;
  error: string | null;
}

const initialState: ItemsState = {
  items: [],
  selectedItem: null,
  loading: false,
  error: null,
};

// get all items
export const fetchItems = createAsyncThunk<Item[]>(
  'items/fetchItems',
  async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/items`
    );
    return response.data.items;
  }
);

export const fetchItemById = createAsyncThunk<Item, string>(
  'items/fetchItemById',
  async (id) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/items/${id}`
    );
    return response.data.item;
  }
);

export const updateItem = createAsyncThunk<
  Item,
  { id: string; updatedItem: Partial<Item> }
>('items/updateItem', async ({ id, updatedItem }) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/api/items/${id}`,
    updatedItem
  );
  return response.data.item;
});

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch items';
      })
      .addCase(fetchItemById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItemById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchItemById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch item';
      })
      .addCase(updateItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        state.loading = false;
        if (
          state.selectedItem &&
          state.selectedItem._id === action.payload._id
        ) {
          state.selectedItem = action.payload;
        }
        const index = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update item';
      });
  },
});

export const selectItems = (state: { items: ItemsState }) => state.items.items;
export const selectSelectedItem = (state: { items: ItemsState }) =>
  state.items.selectedItem;
export const selectLoading = (state: { items: ItemsState }) =>
  state.items.loading;
export const selectError = (state: { items: ItemsState }) => state.items.error;

export default itemsSlice.reducer;
