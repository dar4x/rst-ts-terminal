export const SaveIDFunc = (serviceID: any) => {
    const localID = localStorage.setItem("serviceID", JSON.stringify(serviceID));
    return localID;
}

export const getIDFunc = (): any => {
    const response = localStorage.getItem("serviceID");
    if (response === null) {
      throw new Error("Service ID not found in localStorage.");
    }
    return JSON.parse(response);
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

export const branchesSavedID = (id: number) => {
  try {
    const res = localStorage.setItem("branchesID", JSON.stringify(id));
    return res;
  } catch (error) {
    console.log(error)
  }
}

export const getbranchesSavedID = () => {
  try {
    const res: any = localStorage.getItem("branchesID");
    return JSON.parse(res);
  } catch (error) {
    console.log(error)
  }
}