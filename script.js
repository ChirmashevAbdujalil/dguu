(function () {
  var img = document.getElementById("certificate");
  var button = document.getElementById("download");
  var error = document.getElementById("error");

  // Rasm topilmasa xabar ko'rsatish
  img.addEventListener("error", function () {
    img.style.display = "none";
    error.hidden = false;
  });

  // Tugma bosilganda rasmni yuklab olish
  button.addEventListener("click", function (event) {
    event.preventDefault();

    var url = img.currentSrc || img.src;
    var fileName = button.getAttribute("download") || "rasm.png";

    fetch(url)
      .then(function (response) {
        if (!response.ok) throw new Error("Rasm yuklanmadi");
        return response.blob();
      })
      .then(function (blob) {
        var blobUrl = URL.createObjectURL(blob);
        var link = document.createElement("a");
        link.href = blobUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(function () { URL.revokeObjectURL(blobUrl); }, 1000);
      })
      .catch(function () {
        // fetch ishlamasa (masalan, faylni bevosita ochganda) - oddiy usul
        var link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
  });
})();
