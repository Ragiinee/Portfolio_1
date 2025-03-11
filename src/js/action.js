document.getElementById('button-backdrop').addEventListener('click', () => {
    document.getElementById('backdrop').classList.toggle('hidden');
})

// ใช้ querySelectorAll เพื่อเลือกองค์ประกอบที่มีคลาส content_profile
const fadeInElements = document.querySelectorAll('.content_profile');

// สร้าง Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // เพิ่มคลาส animate-fadeIn เมื่อองค์ประกอบอยู่ในมุมมอง
      entry.target.classList.add('animate-fadeIn_no_opacity');
      // หยุดการสังเกตหลังจากแอนิเมชันเริ่มต้น
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// สังเกตองค์ประกอบแต่ละตัวที่มีคลาส content_profile
fadeInElements.forEach(element => {
  observer.observe(element);
});




