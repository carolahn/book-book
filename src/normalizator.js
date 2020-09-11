// Para utilizar a função deve-se passar um objeto vindo da api do google
/* Exemplo
  {
    "kind": "books#volume",
    "id": "DKcWE3WXoj8C",
    "etag": "PsXUdLm6UG8",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/DKcWE3WXoj8C",
    "volumeInfo": {
      "title": "Harry Potter and International Relations",
      "authors": [
        "Daniel H. Nexon",
        "Iver B. Neumann"
      ],
      "publisher": "Rowman & Littlefield",
      "publishedDate": "2006",
      "description": "Drawing on a range of historical and sociological sources, this work shows how aspects of Harry's world contain aspects of our own. It also includes chapters on the political economy of the franchise, and on the problems of studying popular culture.",
      "industryIdentifiers": [
        {
          "type": "ISBN_10",
          "identifier": "0742539598"
        },
        {
          "type": "ISBN_13",
          "identifier": "9780742539594"
        }
      ],
      "readingModes": {
        "text": false,
        "image": true
      },
      "pageCount": 245,
      "printType": "BOOK",
      "categories": [
        "Literary Criticism"
      ],
      "averageRating": 3.5,
      "ratingsCount": 7,
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "preview-1.0.0",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com.br/books?id=DKcWE3WXoj8C&pg=PA50&dq=herry+potter&hl=&cd=1&source=gbs_api",
      "infoLink": "http://books.google.com.br/books?id=DKcWE3WXoj8C&dq=herry+potter&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_International_Relations.html?hl=&id=DKcWE3WXoj8C"
    },
    "saleInfo": {
      "country": "BR",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "BR",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": false
      },
      "pdf": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.com.br/books/download/Harry_Potter_and_International_Relations-sample-pdf.acsm?id=DKcWE3WXoj8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "webReaderLink": "http://play.google.com/books/reader?id=DKcWE3WXoj8C&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "It is not uncommon to find online <b>Harry Potter</b> discussions jumping back and forth <br>\nbetween two languages, with magical objects and character names generally <br>\nappearing in English.14 These relatively minor verbal modifications made as the<br>\n&nbsp;..."
    }
  },
*/
// Obs: da resposta da api os objs devem estar em um array em: res.data.items

const normalizator = ({
  id,
  volumeInfo: { title, authors, imageLinks, categories },
}) => ({
  title: title ? title : "No title!",
  author: authors ? authors.join(",") : "No author!",
  image_url: imageLinks
    ? imageLinks.smallThumbnail || imageLinks.thumbnail
    : "",
  categories: categories ? categories.join(", ") : "No categories!",
  google_book_id: id,
});

export default normalizator;

/*
  Para a normalização ficar completa, nos reducers deve ser feito como indicado abaixo:
  
  *reducer* return { ...state, [<id do obj>]: { ...normalizator(<obj a ser normalizado>), <id do obj> } };
  
  ou chamar a função na hora da chamada do dispatch:
  
  *chamada* dispatch(<action>(normalized(<obj>)))
  *reducer* return { ...state, [<id do obj>]: { ...<obj>, <id do obj> } };
*/
