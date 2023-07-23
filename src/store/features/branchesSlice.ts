import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import $axios from 'src/utils/axios';
import { BASE_URL } from 'src/utils/const';

// Определите интерфейс для типа данных, которые вы получите с бэкенда
interface ServiceType {
  id: number,
  name: string
}

interface branchesQueueI {
  id: number,
  name: string,
  description?: null,
  documents: string,
  optional_documents?: string,
  symbol?: string,
  is_blocked?: boolean,
  waiting_time_operator?: number,
  branch: number,
  services: number,
  operator: number[]
}

type CustomersI = {
  category: string,
  queue: number
}

interface CustomersData {
  category: string;
  queue: number;
}

// Измените URL на актуальный эндпоинт
const API_URL = 'http://35.228.114.191/branches/1/get_service_types/';

// Создайте асинхронный thunk для получения данных с бэкенда
export const fetchServiceTypes = createAsyncThunk<ServiceType[], void, { rejectValue: string }>(
    'branches/fetchServiceTypes',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get<ServiceType[]>(API_URL);
        return response.data;
      } catch (error) {
        // Обработка ошибки и возврат сообщения об ошибке
        return rejectWithValue('Ошибка при получении данных.');
      }
    }
  );

  export const fetchBranchesQueue = createAsyncThunk<branchesQueueI[], string>('branches/queue', async (serviceID) => {
    try {
      const response = await axios.get<branchesQueueI[]>(`${BASE_URL}/branch/1/${serviceID}/service_queues/`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  });
  

  export const fetchCustomersAdd = createAsyncThunk<CustomersI[], CustomersData>(
    'customers',
    async ({ category, queue }) => {
      try {
        const data = {
          category: category,
          queue: queue,
        };
        const response = await axios.post(`${BASE_URL}/customers/`, data);
        console.log(response.data)
        return response.data; // Assuming response.data is the array of CustomersI[]
      } catch (error) {
        console.log(error);
        throw error; // You can re-throw the error or handle it differently if needed.
      }
    }
  );

// Создайте slice с состоянием и редюсерами для получения данных о филиалах
const branchesSlice = createSlice({
  name: 'branches',
  initialState: [] as ServiceType[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServiceTypes.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchBranchesQueue.fulfilled, (state, action) => {
      return action.payload
    })
  },
});

// Экспортируйте редюсер
export const branchesReducer = branchesSlice.reducer;