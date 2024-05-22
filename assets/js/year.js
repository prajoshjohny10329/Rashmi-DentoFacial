
const yearI1d = document.getElementById('year-id');
const currentDate  = new Date().getFullYear()
const startDate = 1999

const totalYears = Math.abs(currentDate - startDate)

console.log(totalYears);

yearI1d.innerHTML = totalYears + ' Years of Quality Service in Dental <span>Practice</span><img src="assets/img/section-shape-2.webp" alt="Image"></img>'