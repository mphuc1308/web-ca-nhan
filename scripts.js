// Hiệu ứng tia đốm sáng khi di chuyển chuột
document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    document.body.appendChild(sparkle);
  
    const x = e.pageX;
    const y = e.pageY;
  
    sparkle.style.left = `${x - 5}px`;
    sparkle.style.top = `${y - 5}px`;
  
    setTimeout(() => {
      sparkle.remove();
    }, 1500);
  });
  
  // Các hiệu ứng khi click vào các ô
  const infoContainer = document.getElementById("info-container");
  let clicked = {};
  
  document.querySelectorAll(".card").forEach(card => {
    const type = card.getAttribute("data-type");
    clicked[type] = 0;
  
    card.addEventListener("click", () => {
      clicked[type]++;
      if (clicked[type] % 2 === 1) {
        showInfo(type);
      } else {
        clearInfo();
      }
    });
  });
  
  function clearInfo() {
    infoContainer.innerHTML = '';
  }
  
  function showInfo(type) {
    clearInfo();
  
    const content = document.createElement("div");
    content.className = "info-content";
  
    switch (type) {
      case "instagram":
        window.open("https://www.instagram.com/hi_13th10", "_blank"); // Thay your_username bằng tên tài khoản Instagram của bạn
        break;
      case "facebook":
        window.open("https://www.facebook.com/mphuc1308/", "_blank"); // Thay your_username bằng tên tài khoản Facebook của bạn
        break;
      case "lienquan":
        content.innerHTML = `
          <p><strong>Ingame:</strong> muathucoem.</p>
          <div class="lienquan-images">
            ${[1, 2, 3, 4, 5, 6, 7].map(i => 
              `<img class="lienquan-img" src="images/image${i}.jpg" alt="LQ${i}" onclick="enlargeImage(event)" />`).join("")}
          </div>`;
        infoContainer.appendChild(content);
        break;
      case "phone":
        content.innerHTML = `<p><strong>Số điện thoại:</strong> 0363872107</p>`;
        infoContainer.appendChild(content);
        break;
    }
  }
  
  // Mở ảnh phóng to khi bấm vào ảnh
  function enlargeImage(event) {
    const img = event.target;
    const enlargedContainer = document.createElement("div");
    enlargedContainer.className = "enlarged-image-container";
  
    const enlargedImg = document.createElement("img");
    enlargedImg.src = img.src;
    enlargedImg.className = "enlarged-image";
  
    enlargedContainer.appendChild(enlargedImg);
    document.body.appendChild(enlargedContainer);
  
    enlargedContainer.addEventListener("click", () => {
      enlargedContainer.remove();
    });
  }
  