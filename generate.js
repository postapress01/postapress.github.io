const fs = require('fs');
const path = require('path');

// Read template file
const templatePath = path.join(__dirname, 'template.html');
const template = fs.readFileSync(templatePath, 'utf8');

// Let's create a simpler approach that doesn't require complex JSON

// Process book 1
generateBook({
  id: 1,
  title_en: "From the Chronicles of the Institute,<br>\ndrawings from the years of 1941-42<br>\nVakhtang Beridze<br>\n<br>",
  description_en: "Vakhtang Beridze's album of caricatures, created in 1941-1942 is a unique document that has not\nbeen published and has thus remained unknown to the general public. The album playfully\ndepicts the first years of the Institute's foundation in the trying decade of the 40s, the\ntemperament and habits of its founding scientists. Vakhtang Beridze (1914, Kutaisi – 2000, Tbilisi)\none of the founding figures of the G. Chubinashvili Institute of History of Georgian Art. The doctor\nof the History of Art, the honorary man of Georgian science. The principal line of V. Beridze's\nresearch work was the History of Georgian Architecture. His works are of foundational importance\nfor the history of Georgian art. Giorgi Chubinashvili Institute of History of Georgian Art was founded in Tbilisi, in 1941. From the start, the Institute represented the principal centre for research in Georgian Art History. The group of young scientists gathered in Institute, were the first generation of Georgian art\nhistorians. It was through the extensive work and dedication of these people that the History of\nGeorgian Art became a scientific discipline, foundational studies were done in the field of\nGeorgian art and creative heritage, the phenomenon of Georgian art was analysed in a wide\ncultural-historical context.<br>\n<br>\nSize: 30X21 сm. pp.30<br>\nLanguage: English, Georgian<br>\nDesign: Timur Akhmetov<br>\nISBN 978-9941-8-3124-9<br>\n2022<br>",
  title_ge: "«ინსტიტუტის ისტორიიდან» 1941–42<br> წლების ნამუშევრები\nვახტანგ ბერიძე<br>\n<br>",
  description_ge: "ვახტანგ ბერიძის მიერ 1941- 42 წლებში შექმნილი, კარიკატურების ალბომი «ინსტიტუტის ისტორიიდან» უნიკალური დოკუმენტია, რომელიც არ არის გამოცემული და ფართო აუდიტორიისათვის უცნობია. ალბომი ცოცხლად ასახავს ხელოვნების ინსტიტუტის დაარსების პირველ წლებს ორმოციანების რთულ ეპოქაში, მისი დამაარსებელი მეცნიერების ტემპერამენტსა და\nხასიათს. ვახტანგ ბერიძე (1914, ქუთაისი – 2000, თბილისი) გიორგი ჩუბინაშვილის სახელობის ქართული ხელოვნების ისტორიის ინსტიტუტის ერთერთი დამაარსებელი. ხელოვნებათმცოდნეობის დოქტორი, მეცნიერების დამსახურებული მოღვაწე. ვახტანგ ბერიძის კვლევითი მუშაობის მთავარი მიმართულება ქართული არქიტექტურის ისტორია იყო. მის ნაშრომებს ქართული ხელოვნების ისტორიაში ფუძემდებელი მნიშვნელობა უკავია. გიორგი ჩუბინაშვილის სახელობის ქართული ხელოვნების ისტორიის ინსტიტუტი დაარსდა თბილისში, 1941 წელს. ინსტიტუტი წარმოადგენდა საქართველოში ხელოვნებათმცოდნეობითი კვლევის უმთავრეს ცენტრს. მისი დამარსებელი მეცნიერთა ჯგუფი იყო ხელოვნებათმცოდნეთა პირველი თაობა. ამ ადამიანების უდიდესი შრომისა და თავდადების შედეგად ჩამოყალიბდა ქართული ხელოვნებათმცოდნეობის დარგი, როგორც მეცნიერება, შეიქმნა ფუძემდებლური კვლევები ქართულ ხელოვნებასა და მის მხატვრულ მემკვიდრეობაზე, გაანალიზდა ქართული ხელოვნების ფენომენი ფართო კულტურულ-ისტორიულ კონტექსტში.<br>\n<br>\n30X21<br>\n30 გვერდი<br>\nქართული, ინგლისური<br>\nISBN 978-9941-8-3124-9<br>\n2022<br>",
  images: [
    "images/1/1.jpg",
    "images/1/2.jpg",
    "images/1/3.jpg",
    "images/1/4.jpg",
    "images/1/5.jpg",
    "images/1/6.jpg",
    "images/1/7.jpg",
    "images/1/8.jpg",
    "images/1/9.jpg"
  ],
  cover: "images/books/1.png"
});

// Process book 2
generateBook({
  id: 2,
  title_en: "Berikaoba<br>\nby Zachariah Maisuradze<br>\n<br>",
  description_en: "Zachariah Maisuradze (1912-1971) is the representative of the first generation of contemporary Georgian ceramists. Along with the active creative work, he pioneered the research and study of the technologies of Medieval Georgian ceramics and was one of the founding scientists at the Institute of Georgian Art History. \"Berikaoba\" is a series of ten independent panel-portraits created in 1957, considered to be the artistic summit of Zachariah Maisuradze's work. \"Berikaoba is the Georgian folk, improvised, mask theatre, consecrated to the cult of fertility and childbirth. Zachariah Maisuradze's \"Berikaoba\" differs from all the others in its artistic execution.<br>\n<br>\nSize: 32x32 cm. 10 pp.<br>\nLanguage: English, Georgian<br>\nAuthor: Gallery Nectar, Timur Akhmetov<br>\nDesign: Timur Akhmetov<br>\n2020<br>",
  title_ge: "ბერიკაობა<br>\nზაქარია მაისურაძე",
  description_ge: "ზაქარია მაისურაძე (1912-1971) თანამედროვე ქართველ კერამიკოსთა პირველი თაობის წარმომადგენელია. აქტიურ შემოქმედებით საქმიანობასთან ერთად, იყო შუა საუკუნეების ქართული კერამიკის ტექნოლოგიის შესწავლის წამომწყები და ქართული ხელოვნების ისტორიის ინსტიტუტის ერთ-ერთი დამფუძნებელი მეცნიერი. მაისურაძემ თავისი შემოქმედებით, კერამიკა დეკორატიული ხელოვნების ჩარჩოდან გამოიყვანა და დაზგური ხელოვნების სპეციფიკას მოარგო. მისი შემოქმედებისათვის ყველაზე დამახასიათებელია კერამიკული პანოები - კერამიკაში შესრულებული დაზგური კომპოზიციები, სადაც ხელოვანმა შექმნა საკუთარი, სრულიად თვითმყოფადი ვიზუალური ენა, მისთვის ნიშანდობლივი თავისუფლებითა და ბუნებრიობით წარსული ტრადიციები თანამედროვე ხელოვნების მოთხოვნებს დაუკავშირა. ბერიკაობა 1957 წელს შექმნილი, ათი დამოუკიდებელი პანო-პორტრეტისაგან შემდგარი სერიაა, რომელიც ზაქარია მაისურაძის შემოქმედების მწვერვალად მიიჩნევა. ბერიკაობა ქართული ხალხური იმპროვიზაციული ნიღბების თეატრია, ნაყოფიერების კულტის სადიდებელი დღესასწაული. ბევრ ცნობილ ქართველ მხატვარს აქვს ამ თემაზე შექმნილი ნამუშევარები. ზაქარია მაისურაძის „ბერიკაობა", მხატვრული გადაწყვეტით, სხვა ყველა ბერიკაობისაგან განსხვავებულია.<br>\n<br>\n33X33<br>\n10 გვერდი<br>\nქართული, ინგლისური<br>\nISBN 978-9941-8-2795-2<br>\n2020<br>",
  images: [
    "images/2/1.jpg",
    "images/2/2.jpg",
    "images/2/3.jpg",
    "images/2/4.jpg"
  ],
  cover: "images/books/2.png"
});

// Function to generate a book page
function generateBook(data) {
  // Generate HTML for images
  const imagesHTML = data.images.map(img => 
    `\t\t\t\t<img src="${img}" alt="image">`
  ).join('\n');
  
  // Replace placeholders in template
  let pageContent = template
    .replace('{{IMAGES}}', imagesHTML)
    .replace('{{TITLE_EN}}', data.title_en)
    .replace('{{DESCRIPTION_EN}}', data.description_en)
    .replace('{{TITLE_GE}}', data.title_ge)
    .replace('{{DESCRIPTION_GE}}', data.description_ge);
  
  // Write to output file
  const outputFile = path.join(__dirname, `${data.id}.html`);
  fs.writeFileSync(outputFile, pageContent);
  
  console.log(`Generated ${outputFile}`);
}

// Now, let's update the index.html
updateIndex();

function updateIndex() {
  // Create an array of book data
  const booksData = [
    {
      id: 1,
      title_en: "From the Chronicles of the Institute,<br>\ndrawings from the years of 1941-42<br>\nVakhtang Beridze<br>",
      cover: "images/books/1.png"
    },
    {
      id: 2,
      title_en: "Berikaoba<br>\nby Zachariah Maisuradze<br>",
      cover: "images/books/2.png"
    },
    // Add more books when needed
  ];
  
  // Generate HTML for book entries in index
  const booksHTML = booksData.map(book => `
			<div class="flex-publication">
				<a href="${book.id}.html"><img src="${book.cover}" alt="image"></a>
				<div class="caption-text">
					${book.title_en.split('<br>').join('</br>\n\t\t\t\t\t\t')}
				</div>
			</div>`
  ).join('\n');
  
  // Read the current index.html to preserve existing structure
  const indexPath = path.join(__dirname, 'index.html');
  const currentIndex = fs.readFileSync(indexPath, 'utf8');
  
  // Extract the parts we need to keep
  const headerMatch = currentIndex.match(/([\s\S]*?)<div class="flex-image-container">/);
  const footerMatch = currentIndex.match(/<\/div>\s*<div class="flex-text-container">([\s\S]*)/);
  
  if (headerMatch && footerMatch) {
    const header = headerMatch[0];
    const footer = footerMatch[0];
    
    // Generate new index.html - but only for our sample books, keeping the rest
    // In a real system, you would replace all books, but for this demo we'll just keep it simple
    
    // We need to keep the existing content, let's extract it
    const existingContent = currentIndex.replace(headerMatch[0], '').replace(footerMatch[0], '');
    
    // Now, add our 2 books at the beginning
    const newContent = booksHTML + existingContent.substring(existingContent.indexOf('<div class="flex-publication">') + '<div class="flex-publication">'.length);
    
    // Create the new index
    const newIndex = header + newContent + footer;
    
    // Write it
    fs.writeFileSync(indexPath + '.new', newIndex);
    console.log('Created index.html.new (preview only, not replacing the actual index)');
  } else {
    console.error('Could not parse index.html structure');
  }
}