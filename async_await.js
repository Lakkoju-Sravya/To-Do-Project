function fetchDataUsingAsync() {
    console.log("Starting fetch using Async/Await...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async/Await: Data fetched successfully!");
        }, 1000);
    });
}

// Usage
async function asyncFunction() {
    try {
        const data = await fetchDataUsingAsync();
        console.log(data);
        console.log("Async/Await execution completed.\n");
    } catch (error) {
        console.error("Error:", error);
    }
}

asyncFunction();

