console.log('year js loading');
const yearI1d = document.getElementById('year-id');
const trustedH2 = document.getElementById('trusted-h2')
const currentDate  = new Date().getFullYear()
const startDate = 1999

const totalYears = Math.abs(currentDate - startDate)

console.log(totalYears);

yearI1d ? yearI1d.innerHTML = totalYears + ' Years of Quality Service in Dental <span>Practice</span><img src="assets/img/section-shape-2.webp" alt="Image"></img>' : ''
trustedH2 ? trustedH2.innerHTML = `We Are A ${totalYears}-Year Trusted  & Certified <span>Hospital</span><img src="assets/img/section-shape-2.webp" alt="Image">`: ''