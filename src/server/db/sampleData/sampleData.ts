// simulated data for testing purposes
const sampleData = [
    { id: 1, name: 'Sample Item 1', description: 'This is a sample item.' },
    {
        id: 2,
        name: 'Sample Item 2',
        description: 'This is another sample item.',
    },
    {
        id: 3,
        name: 'Sample Item 3',
        description: 'This is yet another sample item.',
    },
];

const getSampleData = async () => {
    // Simulate fetching data from a database or an API
    return sampleData;
};
export { getSampleData };
