console.log('hello');
const list = [
    'fresen up',
    'go for warmup',
    'breakfast'
];

/*
1 New
2 List
3 Delete
4 Quit
 */
let choice = prompt('What would you like to do with list?');
while (choice != 'quit') {
    if (choice === 'new') {
        let newTodo = prompt('Please tell, what you want to add to list?');
        list.push(newTodo);
        console.log(`Note: ${newTodo} added to list`);
    } else if (choice === 'list') {
        for (ele of list) {
            console.log(`${list.indexOf(ele)} ${ele}`);
        }
    } else if (choice === 'delete') {
        for (ele of list) {
            console.log(`${list.indexOf(ele)} ${ele}`);
        }
        let delInd = prompt('Enter the index of todo you want to delete.');
        console.log(`${list[delInd]} will be deleted.`);
        list.splice(delInd, 1);

    }
    choice = prompt('What would you like to do with list?');

}
console.log('You Quit.')