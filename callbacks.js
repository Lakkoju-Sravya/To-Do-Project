function fetchDataUsingCallback(callback) {
    console.log("Starting fetch using Callback...");
    setTimeout(() => {
        callback("Callback: Data fetched successfully!");
    }, 1000);
}

// Usage
fetchDataUsingCallback((data) => {
    console.log(data);
    console.log("Callback execution completed.\n");
});


