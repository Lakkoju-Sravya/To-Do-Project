const todoList = () => {
    let all = [];

    const add = (todoItem) => {
        all.push({ ...todoItem, completed: false });
    };

    const markAsComplete = (index) => {
        if (all[index]) {
            all[index].completed = true;
        }
    };

    const overdue = () => {
        const today = new Date().toISOString().split("T")[0];
        return all.filter((item) => item.dueDate < today && !item.completed);
    };

    const dueToday = () => {
        const today = new Date().toISOString().split("T")[0];
        return all.filter((item) => item.dueDate === today);
    };

    const dueLater = () => {
        const today = new Date().toISOString().split("T")[0];
        return all.filter((item) => item.dueDate > today);
    };

    const toDisplayableList = (list) => {
        return list
            .map(
                (item) =>
                    `[${item.completed ? "x" : " "}] ${item.title} ${
                        item.dueDate === new Date().toISOString().split("T")[0]
                            ? ""
                            : item.dueDate
                    }`
            )
            .join("\n");
    };

    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
};

// Interaction
const todos = todoList();

// Add items
todos.add({ title: "Submit assignment", dueDate: "2022-07-21" });
todos.add({ title: "Pay rent", dueDate: new Date().toISOString().split("T")[0] });
todos.add({ title: "Service vehicle", dueDate: "2022-07-21" });
todos.add({ title: "File taxes", dueDate: "2022-07-23" });
todos.add({ title: "Pay electric bill", dueDate: "2022-07-23" });

// Mark as complete
todos.markAsComplete(1);

// Output
console.log("Overdue");
console.log(todos.toDisplayableList(todos.overdue()));
console.log("\nDue Today");
console.log(todos.toDisplayableList(todos.dueToday()));
console.log("\nDue Later");
console.log(todos.toDisplayableList(todos.dueLater()));


