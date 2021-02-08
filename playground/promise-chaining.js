require('../src/db/mongoose');
const User = require('../src/models/user');

// 6020045151b6c119f044fd8d

// User.findByIdAndUpdate('6020045151b6c119f044fd8d', { age: 23 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 23 })
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })

const Update = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return [count, user]
}

Update('6020045151b6c119f044fd8d', 22).then((result) => {
    console.log(result[1]);
}).catch((err) => {
    console.log(err);
});