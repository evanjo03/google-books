const mongoose = require("mongoose");
const db = require("../../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googleBooks"
);

const bookSeed = [
  {
    authors: ["Suzanne Collins"],
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "The Hunger Games"
  },
  {
    authors: ["J.R.R. Tolkien"],
    description: "Sauron, the Dark Lord, has gathered to him all the Rings of Power - the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring - the ring that rules them all - which has fallen into the hands of the hobbit, Bilbo Baggins. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.     Now available in large print and impossible to describe in a few words, JRR Tolkien's great work of imaginative fiction has been labelled both a heroic romance and a classic fantasy fiction. By turns comic and homely, epic and diabolic, the narrative moves through countless changes of scene and character in an imaginary world which is totally convincing in its detail.",
    image: "https://books.google.com/books/content?id=YTqqPwAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE721zVEPywp42qy_SjpNkaiU8psqLm0EXJW_HVF0TRzg7CZE6sKIiIJ3vk1HVfn6ARsRrFQkLP9EqRVSr41ikgiTazpgL_k7FGMTcruqAl7rVrJWE-ffv3OGBTA1Rdxa0_YyxnLj",
    link: "https://books.google.com/books?id=YTqqPwAACAAJ&dq=Lord+of+the+rings&hl=en&sa=X&ved=0ahUKEwjpqLeW0vbhAhUJP6wKHZFMDbsQ6AEIKDAA",
    title: "The Fellowship of the Ring"
  },
  {
    authors: ["Patrick Rothfuss"],
    description: "'I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep. My name is Kvothe. You may have heard of me. So begins the tale of Kvothe - currently known as Kote, the unassuming innkeepter - from his childhood in a troupe of traveling players, through his years spent as a near-feral orphan in a crime-riddled city, to his daringly brazen yet successful bid to enter a difficult and dangerous school of magic. In these pages you will come to know Kvothe the notorious magician, the accomplished thief, the masterful musician, the dragon-slayer, the legend-hunter, the lover, the thief and the infamous assassin.",
    image: "https://books.google.com/books/content?id=BcG2dVRXKukC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72fyDAS3R3XYF3qRPZWDm8uLCwXY5VYlFc3fXC398kvr0Yzu3yG1dlkAfv0S64wPeBy-WrE-hs1g2lJU_Pz4cuCTAKb4oLVrxXTu1rKEigPm-4amMcvbEoXaeQ77nigG3RzryE9",
    link: "https://books.google.com/books?id=BcG2dVRXKukC&dq=Name+of+the+Wind&hl=en&sa=X&ved=0ahUKEwiDiefi0vbhAhUOvKwKHelNAnsQ6AEIKDAA",
    title: "The Name of the Wind"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });