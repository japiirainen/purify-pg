const xs: ReadonlyArray<number> = [1, 2, 3, 4]

interface Iuser {
	readonly username: string
	readonly email: string
	readonly age: number
}

const someUser: Iuser = {
	username: "foo",
	email: "foo@bar.com",
	age: 10,
}

const ys = xs.map(x => x * 2)
const biggerXs = xs.map(v => v * 100)
const largestInXs = xs.reduce((acc, x) => (x > acc ? x : acc))
console.log(xs)
console.log(biggerXs)
console.log("largest", largestInXs)
console.log(ys)

const updateUserAge = (user: Iuser): Iuser => ({ ...user, age: user.age + 1 })

console.log(updateUserAge(someUser))
