import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Label } from "../interfaces/label";


const getLabels = async ():Promise<Label[]> => { //Ese Label es la interface que arme en otro archivo
    const {data} = await githubApi.get<Label[]>('/labels'); //ojo que solo debo agragar la parte de la url que me interesa
    
    return data;
  }
  
  // modelo de peticion con fetch
  // const getLabels = async () => {
  //   const response = await fetch('https://api.github.com/repos/facebook/react/labels');
  //   const data= response.json();
  //   console.log(data);
    
  //   return data;
  // }

export const useLabels = () => {

    const labelsQuery = useQuery(
        ['labels'], 
        getLabels,
        // { 
        //   //esto es para que no se pidean los datos cada vez que se cambia de pestaña
        //   refetchOnWindowFocus: false,
          
        // }

        // { //me sirve para que los datos se actualicen cada 1 hora y no cada
        //     // vez que salgo y vuelvo a la pagina
        //     staleTime: 1000 * 60 * 60, //  1 hora
        // }
        //  INITIALDATA: es parecido a placeholder perp sirve si tenemos toda la dataa mostrar
        {  // se utiliza para mostrar algo antes de que devuelva loa  promesa
            placeholderData: [
                {
                id: 760751171,
                node_id: "MDU6TGFiZWw3NjA3NTExNzE=",
                url: "https://api.github.com/repos/facebook/react/labels/Difficulty:%20challenging",
                name: "Difficulty: challenging",
                color: "f2687c",
                default: false
            }, 
            {
                id: 52079258,
                node_id: "MDU6TGFiZWw1MjA3OTI1OA==",
                url: "https://api.github.com/repos/facebook/react/labels/Difficulty:%20starter",
                name: "Difficulty: starter",
                color: "94ce52",
                default: false
            }
        ]
        }
        );

        return labelsQuery;



}

