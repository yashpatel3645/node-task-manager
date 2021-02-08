require('../src/db/mongoose');
const Task = require('../src/models/tasks');

// Task.findByIdAndDelete('60198a75916f0979adeeb8f5').then((result) => {
//     console.log(result);
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

const DeleteAndCount = async(id, completed) => {
    const Delete = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed })
    return [Delete, count]
}

DeleteAndCount('60200745c9aa961a51a46b6e', false).then((result) => {
    console.log(result[0]);
    console.log(result[1]);
}).catch((err) => {
    console.log(err);
});