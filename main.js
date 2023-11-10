
// Menamah penerbit
// Membuat elemen div dengan kelas 'input'
const publisher = document.createElement('div');
publisher.classList.add('input');

// Membuat label 'publisher' lalu masukkan ke div input
const labelPublisher = document.createElement('label');
labelPublisher.textContent = 'Publisher'
publisher.appendChild(labelPublisher);

// Membuat input publisher lalu masukkan ke div input
const inputPublisher = document.createElement('input');
inputPublisher.id = 'inputPublisher';
inputPublisher.type = 'text';
publisher.appendChild(inputPublisher);

// Menambah div input ke form 
const inputForm = document.getElementById('inputBook');
// inputForm.appendChild(publisher);
const inputInline = document.getElementsByClassName('input_inline');
inputForm.insertBefore(publisher, inputInline[0]);


// FUNCTION 

document.addEventListener('DOMContentLoaded', function () {
    const inputForm = document.getElementById('inputBook');
    const incompleteBookshelfList = document.getElementById('incompleteBookshelfList');
    const completeBookshelfList = document.getElementById('completeBookshelfList');
  
    inputForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Mencegah perilaku default formulir
  
      // Mengambil nilai dari input formulir
      const title = document.getElementById('inputBookTitle').value;
      const author = document.getElementById('inputBookAuthor').value;
      const year = document.getElementById('inputBookYear').value;
      const publisherValue = document.getElementById('inputPublisher').value;
      const isComplete = document.getElementById('inputBookIsComplete').checked;

  
      // Membuat elemen article untuk buku
      const bookArticle = document.createElement('article');
      bookArticle.classList.add('book_item');
  
      // Membuat elemen h3 untuk judul buku dan menambahkan teks
      const bookTitle = document.createElement('h3');
      bookTitle.textContent = title;
  
      // Membuat elemen paragraf untuk informasi penulis dan menambahkan teks
      const bookAuthor = document.createElement('p');
      //   Bisa dua pilihan penggunaan
      //   bookAuthor.textContent = `Penulis: ${author}`;
      bookAuthor.textContent = 'Penulis :' + author;
  
      // Membuat elemen paragraf untuk informasi tahun dan menambahkan teks
      const bookYear = document.createElement('p');
      bookYear.textContent = 'Tahun :' + year;

      // Membuat elemen paragraf publisher
      const bookPublisher = document.createElement('p');
      bookPublisher.textContent = 'Penerbit :'+ publisherValue;
  
      // Membuat elemen div dengan kelas 'action'
      const bookActionDiv = document.createElement('div');
      bookActionDiv.classList.add('action');
  
      // Membuat tombol 'Selesai dibaca' atau 'Belum selesai di Baca' dengan kelas 'green'
      const bookFinishButton = document.createElement('button');
      bookFinishButton.classList.add('green');
      // Catat ini keren, tanpa if cukup pakek ternatary ?
      bookFinishButton.textContent = isComplete ? 'Belum selesai di Baca' : 'Selesai dibaca';
  
      // Membuat tombol 'Hapus buku' dengan kelas 'red'
      const bookDeleteButton = document.createElement('button');
      bookDeleteButton.classList.add('red');
      bookDeleteButton.textContent = 'Hapus buku';
  
      // Menambahkan tombol-tombol ke dalam elemen div 'action'
      bookActionDiv.appendChild(bookFinishButton);
      bookActionDiv.appendChild(bookDeleteButton);
  
      // Menambahkan elemen-elemen ke dalam elemen article
      bookArticle.appendChild(bookTitle);
      bookArticle.appendChild(bookAuthor);
      bookArticle.appendChild(bookYear);
      bookArticle.appendChild(bookPublisher);
      bookArticle.appendChild(bookActionDiv);

      // Ternyata functionnya cuman ini doang
    
      // Menambahkan elemen article ke dalam div yang sesuai berdasarkan status checkbox
      if (isComplete) {
        completeBookshelfList.appendChild(bookArticle);
      } else {
        incompleteBookshelfList.appendChild(bookArticle);
      }
  
      // Reset setelah dikirim
      inputForm.reset();
    });
  });

  


//   LOCAL STORAGE
// proses error tok