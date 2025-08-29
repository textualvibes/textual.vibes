// نمایش صفحه‌ی اصلی بعد از نمایش شعر ورودی
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 3000); // نمایش شعر به مدت ۳ ثانیه
});

// هندل کردن فرم سفارش
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orderForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const type = form.querySelector('select').value;
      const details = form.querySelector('textarea').value.trim();

      if (!name || !email || !type || !details) {
        alert('لطفاً تمام فیلدها را کامل کنید.');
        return;
      }

      // شبیه‌سازی ارسال موفق
      alert('سفارش شما با موفقیت ثبت شد! ممنون از اعتماد شما 💙');
      form.reset();
    });
  }
});
