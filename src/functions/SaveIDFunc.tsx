export const SaveIDFunc = (serviceID: number) => {
    const localID = localStorage.setItem("serviceID", JSON.stringify(serviceID));
    return localID;
}

export const getIDFunc = (): string => {
    const response = localStorage.getItem("serviceID");
    if (response === null) {
      throw new Error("Service ID not found in localStorage.");
    }
    return response;
  };
  
export const SaveQUEUE = (id: number, name: string, documents: string, optional_documents: string, symbol: string, services: string) => {
  try {
    const data = {
      id,
      name,
      documents,
      optional_documents,
      symbol,
      services
    }
    const response = localStorage.setItem("savedQueue", JSON.stringify(data));
    return response;
  } catch (error) {
    console.log(error)
  }
}

export const getSavedQUEUE = () => {
  try {
    const response: any = localStorage.getItem("savedQueue");
    return JSON.parse(response);
  } catch (error) {
    console.log(error)
  }
}

export const saveCategory = (category: string) => {
  try {
    const data = localStorage.setItem("user_category", JSON.stringify(category));
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const getSavedCategory = () => {
  try {
    const response: any = localStorage.getItem("user_category");
    return JSON.parse(response);
  } catch (error) {
    console.log(error)
  }
}