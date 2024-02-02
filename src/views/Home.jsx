import SectionBox from "../components/SectionBox";

function Home() {
  const items = [
    {
      id: 1,
      title: "Beyoncé, ‘Lemonade’",
      description: "Original Soundtrack",
      image:
        "https://www.billboard.com/wp-content/uploads/2022/06/beyonce-Lemonade-album-art-billboard-1240.jpg?w=768",
      type: "album",
    },
    {
      id: 2,
      title: "Pistol Annies, ‘Interstate Gospel’",
      description: "By Wahkeena Sitika",
      image:
        "https://www.billboard.com/wp-content/uploads/2023/07/Pistol-Annies-Interstate-Gospel-2018-billboard-1240.jpg?w=768",
      type: "album",
    },
    {
      id: 3,
      title: "Kate Bush, ‘The Dreaming’",
      description: "Artist",
      image:
        "https://www.billboard.com/wp-content/uploads/2023/07/kate-bush-the-dreaming-cover-1982-billboard-1240.jpg?w=768",
      type: "artist",
    },
    {
      id: 4,
      title: "A$AP Rocky, ‘Long. Live. A$AP’",
      description: "Relax and indulge with beautiful guitar",
      image:
        "https://www.billboard.com/wp-content/uploads/2023/07/asap-rocky-long-live-asap-2013-billboard-1240.jpg?w=768",
      type: "podcast",
    },
    {
      id: 5,
      title: " Lil’ Kim, ‘Hard Core’",
      description: "Full Album",
      image:
        "https://www.billboard.com/wp-content/uploads/2023/07/lil-kim-hard-core-1996-billboard-1240.jpg?w=777",
      type: "album",
    },
  ];

  return (
    <div className="grid gap-y-8 ">
      <SectionBox
        title="Recently played"
        more="/blabla"
        items={items}
      ></SectionBox>
      <SectionBox
        title="Shows to try"
        more="/blabla"
        items={items}
      ></SectionBox>
      <SectionBox
        title="Made for John Doe"
        more="/blabla"
        items={items}
      ></SectionBox>
    </div>
  );
}

export default Home;
