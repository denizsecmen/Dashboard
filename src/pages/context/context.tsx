import { createContext, Dispatch, SetStateAction } from "react";
type ContextType = [string, Dispatch<SetStateAction<string>>];
const context = createContext<ContextType | undefined>(undefined);
export default context;

