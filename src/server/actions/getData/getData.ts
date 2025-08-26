'use server';

const getData = async () => {
    // Simulate fetching data from a database or an API
    return {
        message: 'Hello from the server!',
        timestamp: new Date().toISOString(),
    };
};
export { getData };
