// نمایش محتوای اصلی بعد از صفحه شعر
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("controls").style.display = "flex";
    switchLanguage("en"); // زبان پیش‌فرض انگلیسی
  }, 3000); // نمایش شعر به مدت ۳ ثانیه
});

// سوییچ زبان بین فارسی و انگلیسی
function switchLanguage(lang) {
  const faElements = document.querySelectorAll(".fa");
  const enElements = document.querySelectorAll(".en");

  if (lang === "fa") {
    faElements.forEach(el => el.style.display = "");
    enElements.forEach(el => el.style.display = "none");
    document.body.setAttribute("dir", "rtl");
  } else {
    faElements.forEach(el => el.style.display = "none");
    enElements.forEach(el => el.style.display = "");
    document.body.setAttribute("dir", "ltr");
  }
}

// تغییر حالت روشن/تاریک
function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }
}

// ارسال سفارش به دایرکت اینستاگرام
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("orderForm");
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("yourname").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("type").value.trim();
    const details = document.getElementById("details").value.trim();

    const message = `سلام 👋\nیه سفارش جدید دارم:\n\n🧑‍💼 نام: ${name}\n📧 ایمیل: ${email}\n🎨 نوع اثر: ${type}\n📝 جزئیات: ${details}\n\nممنون میشم بررسی کنید 🙏`;

    alert("لطفا در پیج textual.vibes ثبت سفارش کنید.");

    window.open("https://www.instagram.com/textual.vibes/", "_blank");

    navigator.clipboard.writeText(message).then(() => {
      console.log("پیام کپی شد!");
    }).catch(err => {
      console.error("مشکل در کپی پیام:", err);
    });
  });
});
