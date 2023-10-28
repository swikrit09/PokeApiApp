import { createContext,useContext,useState,useEffect } from "react"

const PokeDataContext=createContext()

const PokeDataProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextUrl, setNextUrl] = useState("")
    const [prevUrl, setPrevUrl] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState("")

    const getPokemonData = async (data) => {
        data.map(async (item) => {
            const res = await fetch(item.url);
            const data = await res.json();
            // console.log(data)
            setPokemons((prevPokemons) => [...prevPokemons, data]);
        });
    }

    const getPokemon = async () => {
        setIsLoading(true)
        const res = await fetch(url);
        const data = await res.json();
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        await getPokemonData(data.results);
        setIsLoading(false);
    }

    useEffect(() => {
        getPokemon();
    }, [url]);
    const cardPress = (pokemon) => {

        setSelectedItem(pokemons.filter((item) => pokemon.id === item.id))
        setIsModalVisible(true)
    }

    function getPokemonColor(pokemonType) {
        switch (pokemonType) {
          case "normal":
            return "#183D3D";
          case "fighting":
            return "red";
          case "flying":
            return "lightblue";
          case "poison":
            return "#9867c5";
          case "ground":
            return "saddlebrown";
          case "rock":
            return "gray";
          case "bug":
            return "green";
          case "ghost":
            return "darkviolet";
          case "steel":
            return "silver";
          case "fire":
            return "orangered";
          case "water":
            return "deepskyblue";
          case "grass":
            return "limegreen";
          case "electric":
            return "#ffb100";
          case "psychic":
            return "pink";
          case "ice":
            return "lightcyan";
          case "dragon":
            return "darkorange";
          case "dark":
            return "black";
          case "fairy":
            return "hotpink";
          case "unknown":
            return "lightgray";
          case "shadow":
            return "black";
          default:
            return "white";
        }
      }

  return (
    <PokeDataContext.Provider value={{pokemons,isLoading,setUrl,setIsModalVisible,nextUrl,prevUrl,isModalVisible,selectedItem,cardPress,getPokemonColor,setPokemons}}>
        {children}
    </PokeDataContext.Provider>
  )
}
const useGlobleContext = () => {
    return useContext(PokeDataContext)
}

export {useGlobleContext,PokeDataProvider}