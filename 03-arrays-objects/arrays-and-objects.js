/**
 * Ju Ho Kim
 * Date: Apr 17th 2025
 * Topic: Arrays and Objects in JS
 */

// =====================================================================
// Two eamples
// =====================================================================

// Example 1: Creating a simple todo list
let todoList = {
  tasks: [
    { id: 1, text: 'Learn JavaScript', completed: true },
    { id: 2, text: 'Study Arrays', completed: true },
    { id: 3, text: 'Master Objects', completed: false }
  ],
  
  // Add a new task
  // Shows how to generate IDs and add items
  addTask: function(text) {
    // Using the spread operator (...) with Math.max to find the highest ID
    const newId = this.tasks.length > 0 ? 
      Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
      
    this.tasks.push({
      id: newId,
      text: text,
      completed: false
    });
    return newId;
  },
  
  // Mark a task as completed
  // Shows how to find and update a specific item by ID
  completeTask: function(id) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = true;
      return true;
    }
    return false;
  },
  
  // Delete a task
  // Both remove items from an array based on ID
  deleteTask: function(id) {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter(task => task.id !== id);
    return this.tasks.length !== initialLength;
  },
  
  // Get only incomplete tasks
  // Both filter arrays based on specific criteria
  getIncompleteTasks: function() {
    return this.tasks.filter(task => !task.completed);
  },
  
  // Summary of tasks
  getSummary: function() {
    const total = this.tasks.length;
    const completed = this.tasks.filter(task => task.completed).length;
    return {
      total,
      completed,
      incomplete: total - completed
    };
  }
};

// Using the todo list
console.log('\nTodo List Example:');
console.log('Initial tasks:', todoList.tasks);

console.log('Adding a new task...');
const newTaskId = todoList.addTask('Learn React');
console.log('Tasks after adding:', todoList.tasks);

console.log('Completing a task...');
todoList.completeTask(newTaskId);
console.log('Tasks after completion:', todoList.tasks);

console.log('Getting incomplete tasks:');
console.log(todoList.getIncompleteTasks());

console.log('Task summary:');
console.log(todoList.getSummary());

console.log('Deleting a task...');
todoList.deleteTask(1);
console.log('Tasks after deletion:', todoList.tasks);



// Example 2: Data processing with arrays and objects
// Sample data: Monthly sales data
let monthlySales = [
  { month: 'Jan', amount: 1200 },
  { month: 'Feb', amount: 1800 },
  { month: 'Mar', amount: 1350 },
  { month: 'Apr', amount: 2100 },
  { month: 'May', amount: 1500 }
];

console.log('\nSales Data Example:');

// Calculate total sales
let totalSales = monthlySales.reduce((sum, sale) => sum + sale.amount, 0);
console.log('Total sales:', totalSales);

// Find the month with highest sales
let highestSale = monthlySales.reduce(
  (highest, sale) => sale.amount > highest.amount ? sale : highest, 
  { amount: 0 }
);
console.log('Highest sales month:', highestSale.month, 'with', highestSale.amount);

// Get months with sales above average
let averageSale = totalSales / monthlySales.length;
let aboveAverageMonths = monthlySales
  .filter(sale => sale.amount > averageSale)
  .map(sale => sale.month);
  
console.log('Average sales per month:', averageSale);
console.log('Months with above-average sales:', aboveAverageMonths);

// Transform data for visualization (mapping technique)
let salesForChart = monthlySales.map(sale => ({
  label: sale.month,
  value: sale.amount,
  isAboveAverage: sale.amount > averageSale
}));

console.log('Transformed sales data for chart:');
console.log(salesForChart);



// =====================================================================
//  SUMMARY: Working with Arrays and Objects
// =====================================================================

/**
 * ========== KEY TAKEAWAYS ==========
 * 
 * ARRAYS:
 * - Ordered collections of values accessed by index (starting from 0)
 * - Created with [] syntax
 * - Have built-in methods like push, pop, shift, unshift
 * - Higher-order methods like map, filter, find, and reduce help process data
 * 
 * OBJECTS:
 * - Collections of key-value pairs
 * - Created with {} syntax
 * - Properties accessed with dot notation (obj.prop) or brackets (obj['prop'])
 * - Can contain methods (functions as values)
 * - Common operations: Object.keys(), Object.values(), Object.entries()
 * 
 * COMBINATIONS:
 * - Arrays of objects are common for lists of structured data
 * - Objects can contain arrays as properties
 * - Nested structures can be created for complex data
 * 
 * KEY METHODS FOR SEA INTERVIEW:
 * - filter(): Creates a new array with elements that pass a test
 * - map(): Creates a new array by transforming each element
 * - sort(): Sorts elements in an array
 * - splice(): Removes elements from an array
 * - includes(): Checks if a string contains another string
 * - findIndex(): Finds the index of an item in an array
 * 
 * I'll try to:
 * - Choose arrays when order matters or when you need the same operations on many items
 * - Choose objects when you need named properties or different types of data
 * - Use methods like map, filter, and reduce to avoid manual loops when possible
 * - Use destructuring to extract values cleanly
 * - Use spread operator (...) for creating copies of arrays
 * - Use consistent property names across objects in an array
 */