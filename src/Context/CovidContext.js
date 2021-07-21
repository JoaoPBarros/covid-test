import { createContext } from "react";
import covidProvider from "../Provider/CovidProvider";

const covidContext = createContext(covidProvider);

export default covidContext;
