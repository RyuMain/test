// 1.0 Use console.log to output your name 
// 
console.log("Steven Lindsay Here!");

// 1.1 Use object longhand to create an object with properties: firstName, lastName
const object = {
    firstname: "Steven",
    lastname: "Lindsay"
};
console.log(object)
// 1.2 Use JSON.stringify to console.log the object
console.log(JSON.stringify(object, null, 2))

// 1.3 Use "dot notation" to console.log the firstName property
 console.log(object.firstname)

// 1.4 Use "square brackets" to console.log the lastName property
console.log(object['lastname'])

// 1.5 Use object shorthand to create an object with properties: title, subtitle. console.log the object
const title = 'My Favorite Anime is...'
const subtitle = 'fooly cooly! (FLCL) Give it a watch!'
const anime = { title, subtitle}
console.log(anime)

// 1.6 Use destructuring to pull the firstName property out of an object. console.log the firstName
const {firstname} = object
console.log(firstname)

// 1.7 Use destructured renaming to pull the lastName property out of an object, rename the property to "surname". console.log the surname.
const {lastname: surename} = object
console.log(surename)

// 1.8 Use spread syntax to create a new object from the old object, but also adds a new property called "secret". console.log the secret
const secret = 'Ive never seen the lord of the rings'
const newObject = { ...object, secret }
console.log(newObject)
// 1.9 Use rest syntax to pull out the "secret" property, but put everything else into the personWithoutSecret property. console.log the personWithoutSecret
const { secret: copyofScret , ...personwithoutSecret } = newObject
console.log(personwithoutSecret)