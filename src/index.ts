import * as F from "fluture"
import { readFileF } from "./fluture/readfile"

F.fork(console.log)(console.log)(readFileF)
