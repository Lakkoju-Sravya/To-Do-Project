function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
            console.log(`Current Count: ${count}`);
        },
        decrement() {
            count--;
            console.log(`Current Count: ${count}`);
        },
        reset() {
            count = 0;
            console.log("Counter Reset");
        }
    };
}


const counter = createCounter();
counter.increment(); 
counter.increment();
counter.decrement();
counter.reset();  