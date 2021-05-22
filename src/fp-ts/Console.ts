import { log } from "fp-ts/Console"
import { fromIO, Task } from "fp-ts/Task"
import { createInterface } from "readline"

export const getLine: Task<string> = () =>
	new Promise(resolve => {
		const rl = createInterface({
			input: process.stdin,
			output: process.stdout,
		})
		rl.question("> ", ans => {
			rl.close()
			resolve(ans)
		})
	})

export const putStrLn = (message: string): Task<void> => fromIO(log(message))
