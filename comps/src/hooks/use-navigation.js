import NavigationContext from "../context/navigation";
import { useContext } from "react";

function useNavigation() {
  return useContext(NavigationContext);
}

export default useNavigation;

//custom hooks contain reusable logic
//usually reuse built-in hooks like useEffect and UseState