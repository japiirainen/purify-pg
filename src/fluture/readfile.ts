import * as fs from "fs/promises"
import * as path from "path"

import * as F from "fluture"

const pathToFile = path.resolve(__dirname, "foo.txt")

export const readFileF = F.encaseP(fs.readFile)(pathToFile)
