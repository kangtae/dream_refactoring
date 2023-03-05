class Person {
	#lastName;
	#firstName;
	constructor(data) {
		this.#firstName = data.lastName
		this.#firstName = data.firstName
	}
	
	get lastName() {
		return this.#lastName;
	}
	
	get firstName() {
		return this.#firstName;
	}
}

let defaultOwner =  new Person({ firstName: '마틴', lastName: '파울러' })

function getDefaultOwner() {
	return defaultOwner;
}

const owner = getDefaultOwner();
owner.firstName = '강태완';
console.log(owner.firstName);
console.log(getDefaultOwner());