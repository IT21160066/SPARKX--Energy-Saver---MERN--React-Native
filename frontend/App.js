import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import StackNav from "./navigation/StackNav";

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  );
}
