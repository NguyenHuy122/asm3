const btnSubmit = document.querySelector('.btn-submit');

btnSubmit.addEventListener('click', function () {
  // Lấy giá trị email và chuyển sang in thường
  const emailValue = document.getElementById('email').value.toLowerCase();

  // Điều kiện để là 1 email
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Thẻ hiển thị email lỗi
  const errormail = document.querySelector('.error-email');

  // Check email
  const check = emailValue.match(regex);

  // Lấy phần chứa thông tin
  const sectionContent = document.querySelector('#personal-info .section-content');

  // Phần chứa submit
  const submitEmail = document.querySelector('.submit-email');

  if (check) {
    // Nếu hợp lệ, hiện thông tin cá nhân, ẩn form nhập email
    sectionContent.style.display = 'block';
    submitEmail.style.display = 'none';
    errormail.innerHTML = "";
  } else {
    // Nếu không hợp lệ, hiển thị lỗi
    errormail.innerHTML = 'Please enter valid email !';
    errormail.style.color = 'red';
  }
});


//Hiển thị thay đổi view less - view more khi nhấn nút để mở rộng cửa sổ
// Đợi đến khi toàn bộ nội dung HTML được tải xong
document.addEventListener("DOMContentLoaded", function () {

  // Lấy tất cả phần tử có ID là "viewMoreBtn"
  const titles = document.querySelectorAll("#viewMoreBtn");

  // Duyệt qua từng phần tử đã chọn
  titles.forEach((title) => {
    
    // Gán sự kiện click cho từng nút
    title.addEventListener("click", function () {
      const button = this; // 'this' chính là nút được nhấn

      // Kiểm tra trạng thái hiện tại thông qua thuộc tính aria-expanded
      if (button.getAttribute("aria-expanded") == 'true') {

        // Nếu đang mở: đổi nút thành "View Less"
        button.textContent = "View Less";

        // Cập nhật thuộc tính aria-expanded về false (đã mở rộng)
        button.setAttribute("aria-expanded", 'false');

        // Hiển thị phần tử liền kề phía sau nút (giả sử là đoạn văn bản chi tiết)
        button.nextElementSibling.style.display = 'block';

      } else {
        // Nếu đang thu gọn (aria-expanded = false)

        // Đổi lại nút thành "View More"
        button.textContent = "View More";

        // Cập nhật lại trạng thái aria-expanded = true (sẵn sàng mở rộng)
        button.setAttribute("aria-expanded", 'true');

        // Ẩn phần tử kế tiếp
        button.nextElementSibling.style.display = 'none';
      }
    });
  });
});
