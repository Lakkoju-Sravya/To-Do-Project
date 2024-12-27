function fetchDataUsingPromise() {
    console.log("Starting fetch using Promise...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise: Data fetched successfully!");
        }, 1000);
    });
}

// Usage
fetchDataUsingPromise()
    .then((data) => {
        console.log(data);
        console.log("Promise execution completed.\n");
    })
    .catch((error) => {
        console.error("Error:", error);
    });

