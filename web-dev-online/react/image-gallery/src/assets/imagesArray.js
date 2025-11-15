const images = [
  {
    title: "Sunset Over Mountains",
    desc: "A peaceful sunset behind the mountain peaks.",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHwwfDB8fHwy",
    author: "James Carter",
    date: "2024-01-10"
  },
  {
    title: "Modern City Skyline",
    desc: "Skyscrapers and city lights during night time.",
    url: "https://images.unsplash.com/photo-1494783367193-149034c05e8f",
    author: "Emily Watson",
    date: "2024-02-05"
  },
  {
    title: "Forest Morning",
    desc: "Soft sunlight passing through tall green trees.",
    url: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce",
    author: "Michael Brown",
    date: "2024-03-12"
  },
  {
    title: "Blue Ocean Waves",
    desc: "Strong waves crashing against the rocks.",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    author: "Sophia Lee",
    date: "2024-03-25"
  },
  {
    title: "Snowy Mountains",
    desc: "A high mountain range covered in snow.",
    url: "https://images.unsplash.com/photo-1509592149237-bc44977d96d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHwwfDB8fHwy",
    author: "Daniel White",
    date: "2024-04-01"
  },
  {
    title: "Calm Lake View",
    desc: "A calm lake reflecting the sky and mountains.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Ava Mitchell",
    date: "2024-04-15"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Autumn Leaves",
    desc: "Beautiful orange and red autumn leaves.",
    url: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce",
    author: "Mia Roberts",
    date: "2024-07-01"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Modern City Skyline",
    desc: "Skyscrapers and city lights during night time.",
    url: "https://images.unsplash.com/photo-1494783367193-149034c05e8f",
    author: "Emily Watson",
    date: "2024-02-05"
  },
  {
    title: "Forest Morning",
    desc: "Soft sunlight passing through tall green trees.",
    url: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce",
    author: "Michael Brown",
    date: "2024-03-12"
  },
  {
    title: "Blue Ocean Waves",
    desc: "Strong waves crashing against the rocks.",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    author: "Sophia Lee",
    date: "2024-03-25"
  },
  {
    title: "Snowy Mountains",
    desc: "A high mountain range covered in snow.",
    url: "https://images.unsplash.com/photo-1509592149237-bc44977d96d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHwwfDB8fHwy",
    author: "Daniel White",
    date: "2024-04-01"
  },
  {
    title: "Calm Lake View",
    desc: "A calm lake reflecting the sky and mountains.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Ava Mitchell",
    date: "2024-04-15"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Autumn Leaves",
    desc: "Beautiful orange and red autumn leaves.",
    url: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce",
    author: "Mia Roberts",
    date: "2024-07-01"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Modern City Skyline",
    desc: "Skyscrapers and city lights during night time.",
    url: "https://images.unsplash.com/photo-1494783367193-149034c05e8f",
    author: "Emily Watson",
    date: "2024-02-05"
  },
  {
    title: "Forest Morning",
    desc: "Soft sunlight passing through tall green trees.",
    url: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce",
    author: "Michael Brown",
    date: "2024-03-12"
  },
  {
    title: "Blue Ocean Waves",
    desc: "Strong waves crashing against the rocks.",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    author: "Sophia Lee",
    date: "2024-03-25"
  },
  {
    title: "Snowy Mountains",
    desc: "A high mountain range covered in snow.",
    url: "https://images.unsplash.com/photo-1509592149237-bc44977d96d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHwwfDB8fHwy",
    author: "Daniel White",
    date: "2024-04-01"
  },
  {
    title: "Calm Lake View",
    desc: "A calm lake reflecting the sky and mountains.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Ava Mitchell",
    date: "2024-04-15"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Autumn Leaves",
    desc: "Beautiful orange and red autumn leaves.",
    url: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce",
    author: "Mia Roberts",
    date: "2024-07-01"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Modern City Skyline",
    desc: "Skyscrapers and city lights during night time.",
    url: "https://images.unsplash.com/photo-1494783367193-149034c05e8f",
    author: "Emily Watson",
    date: "2024-02-05"
  },
  {
    title: "Forest Morning",
    desc: "Soft sunlight passing through tall green trees.",
    url: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce",
    author: "Michael Brown",
    date: "2024-03-12"
  },
  {
    title: "Blue Ocean Waves",
    desc: "Strong waves crashing against the rocks.",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    author: "Sophia Lee",
    date: "2024-03-25"
  },
  {
    title: "Snowy Mountains",
    desc: "A high mountain range covered in snow.",
    url: "https://images.unsplash.com/photo-1509592149237-bc44977d96d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHwwfDB8fHwy",
    author: "Daniel White",
    date: "2024-04-01"
  },
  {
    title: "Calm Lake View",
    desc: "A calm lake reflecting the sky and mountains.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Ava Mitchell",
    date: "2024-04-15"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Autumn Leaves",
    desc: "Beautiful orange and red autumn leaves.",
    url: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce",
    author: "Mia Roberts",
    date: "2024-07-01"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
  {
    title: "Starry Night",
    desc: "Stars shining brightly in the night sky.",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    author: "Liam Parker",
    date: "2024-05-02"
  },
  {
    title: "Desert Dunes",
    desc: "Golden sand dunes under the clear sky.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Olivia Davis",
    date: "2024-06-10"
  },
  {
    title: "Rainy Window",
    desc: "Raindrops sliding down a glass window.",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "Noah Wilson",
    date: "2024-06-20"
  },
];
 export default images