// List of names and jobs
const names = ['Jake', 'Mia', 'Liam', 'Sophia', 'Noah', 'Emma', 'Olivia'];
const jobs = ['Painter', 'Chef', 'Dancer', 'Photographer', 'Singer', 'Actor'];

// Starting freelancers
const freelancers = [
  { name: 'Mia', price: 30, job: 'Chef' },
  { name: 'Jake', price: 50, job: 'Dancer' },
];

const maxFreelancers = 10;

// Function to add a new freelancer
function addFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomJob = jobs[Math.floor(Math.random() * jobs.length)];
  const randomPrice = Math.floor(Math.random() * 100);
  freelancers.push({ name: randomName, price: randomPrice, job: randomJob });
}

// Function to calculate the average price
function calculateAveragePrice() {
  const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  return Math.round(totalPrice / freelancers.length);
}

// Function to update the webpage
function render() {
  const tableBody = document.querySelector('#table-body');
  const averagePriceElement = document.querySelector('#average-price');
  
  const rows = freelancers.map((freelancer) => {
    const row = document.createElement('tr');
    const nameColumn = document.createElement('td');
    nameColumn.innerText = freelancer.name;
    const jobColumn = document.createElement('td');
    jobColumn.innerText = freelancer.job;
    const priceColumn = document.createElement('td');
    priceColumn.innerText = `$${freelancer.price}`;
    row.appendChild(nameColumn);
    row.appendChild(jobColumn);
    row.appendChild(priceColumn);
    return row;
  });
  
  tableBody.replaceChildren(...rows);
  const averagePrice = calculateAveragePrice();
  averagePriceElement.innerText = `$${averagePrice}`;
}

// Automatically add freelancers every second
const intervalId = setInterval(() => {
  addFreelancer();
  render();
  if (freelancers.length >= maxFreelancers) {
    clearInterval(intervalId);
  }
}, 1000);

// Render the initial state
render();
