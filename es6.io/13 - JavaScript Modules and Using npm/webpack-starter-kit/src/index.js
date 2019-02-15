import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, age, dog } from './config';  // this is how you import named exports from other files, they must be surrounded by {}
// remember that you can rename named exports into whatever variable you want. 'import X as Y from...'
import User, {createURL, gravatar} from './user'; 

console.log(key, url)

sayHi('Gabby')

const ages = [1,1,3,4,52,4,12]

console.log(uniq(ages))

console.log(dog, ' is ', age, ' years old!!')

const gabby = new User('Gabby Tan', 'gabrielvtan@gmail.com', 'gabbytan.com');
console.log(gabby)


const profile = createURL(gabby.name);
console.log(profile)

const image = gravatar(gabby.email);
console.log(image)