document.querySelector('.subscribe form').addEventListener('submit', function (event) {
    event.preventDefault(); // منع إرسال النموذج بشكل افتراضي

    const emailInput = document.querySelector('.subscribe input');
    const email = emailInput.value;

    // تحقق من صحة البريد الإلكتروني باستخدام تعبير منتظم
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailPattern.test(email)) {
        alert('تم الاشتراك بنجاح!');
        emailInput.value = ''; // مسح الحقل بعد النجاح
    } else {
        alert('يرجى إدخال بريد إلكتروني صالح.');
    }
});
