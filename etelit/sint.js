// Assume we have a selection component object as part of our data visualization setup
const selCmpt = {
    project: {
        items: [
            { field: 'category' },
            { field: 'value' }
        ]
    }
};

// Function to handle selections
function handleSelection(selCmpt) {
    // Extract the field from the first project item
    const field = selCmpt.project.items[0].field;

    // Perform an action based on the field
    console.log(`First field in project items: ${field}`);

    // Example: Highlight data points in a chart
    highlightDataPoints(field);
}

// Dummy function to represent highlighting data points
function highlightDataPoints(field) {
    console.log(`Highlighting data points for field: ${field}`);
    // Implementation would depend on your specific charting library
}

// Execute the function with the selection component
handleSelection(selCmpt);
