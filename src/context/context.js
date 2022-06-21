import React,{ useState, useEffect, createContext} from "react";

export const SWContext = createContext();

const BASEURL = "https://back-pets.vercel.app";

export const SWContextProvider =({ children }) => {

    const [cats, setCats] = useState([]);
    const [dogs, setDogs] = useState([]);

  useEffect(() => {
    
    const getCats = async () => {
        const catsAPI = await fetch(`${BASEURL}/cats`);
        const catsJSON = await catsAPI.json();
        setCats(catsJSON.Gaterres);
        
    };
    getCats();
  }, []);

  useEffect(() => {
    const getDogs = async () => {
        const dogsAPI = await fetch(`${BASEURL}/pets`);
        const dogsJSON = await dogsAPI.json();
        setDogs(dogsJSON.Perrekes);
        
    };
    getDogs();
  }, []);




  return (
    <SWContext.Provider value={{ cats , dogs }}>
      {children}
    </SWContext.Provider>
  );    
}