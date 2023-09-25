// İki select alanını seçin
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");

// Sonuçları görüntülemek için bir div elementi seçin
const resultDiv = document.getElementById("result");

// Seçenekler değiştikçe sonuçları güncellemek için bir işlev oluşturun
function filterSelects() {
  const selectedOption1 = select1.value;
  const selectedOption2 = select2.value;

  // Filtreleme mantığını burada uygulayabilirsiniz
  // Örnek olarak, iki seçeneğin değeri aynı ise sonuç gösterme
  if (selectedOption1 === selectedOption2) {
    resultDiv.textContent = "Aynı seçeneği iki kez seçemezsiniz.";
  } else {
    resultDiv.textContent = ""; // Sonucu temizle
  }
}

// Seçenekler değiştikçe işlevi çağırın
select1.addEventListener("change", filterSelects);
select2.addEventListener("change", filterSelects);

// Sayfa yüklendiğinde bir kez de işleme başlamak için çağırın
filterSelects();
