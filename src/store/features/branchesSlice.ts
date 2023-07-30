import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getbranchesSavedID } from 'src/functions/SaveIDFunc';
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
};

const branchesID = getbranchesSavedID();

const API_URL = `http://35.228.114.191/branches/${branchesID}/get_service_types/`;

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
  

  export const fetchCustomersAdd = async (category: string, queue: number) => {
    try {
      const data: CustomersData = {
        category: category,
        queue: queue
      }
      const response = await axios.post(`${BASE_URL}/customers/`, data);
      console.log('Функция добавления', response.data);
      if(response.data) {
        localStorage.setItem("printTALON", JSON.stringify(response.data))
      }
    } catch (error) {
      console.log(error)
    }
  }

  export const fetchBranches = async () => {
    try {
      const response = await $axios.get(`${BASE_URL}/branches/`);
  
      // Check if the response contains data and is not empty
      if (response && response.data) {
        const branches = response.data;
        if (branches.results.length > 0) {
          localStorage.setItem("branches", JSON.stringify(branches));
          return branches;
        } else {
          // Handle the case where the branches are empty
          console.log("Empty branches data:", branches);
          localStorage.removeItem("branches");
          return [];
        }
      } else {
        console.log("Empty or invalid API response:", response);
        // Handle the case where the response is empty or not in the expected format
        localStorage.removeItem("branches");
        return [];
      }
    } catch (error) {
      console.log("Error fetching branches:", error);
      // Handle the error appropriately, for example, you might want to throw it to the caller.
      throw error;
    }
  };
  
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