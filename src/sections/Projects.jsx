const data = [
  {
    title: "Website UMKM",
    img: "https://idcloudhost.com/wp-content/uploads/2020/02/website-makanan.jpg",
    desc: "Merancang website UMKM.",
    link: "https://drive.google.com/file/d/1h8xpXMIQiOhpR6rmO3ZzsxkIDc2U5IVE/view?usp=sharing"
  },
  {
    title: "Business Plan Studio DIY",
    img: "https://digibook.id/blog/wp-content/uploads/2020/04/5e0c7a6a99ba3749cbafad3b86f6cfcc.jpg",
    desc: "Tugas kewirausahaan.",
    link: "https://drive.google.com/file/d/1h8xpXMIQiOhpR6rmO3ZzsxkIDc2U5IVE/view?usp=drive_link"
  },
  {
    title: "Daily Delight",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOrc2LbCQHYH15Ji0Y_73hk0vfDh1d7_OQg&s",
    desc: "Prototype sistem informasi."
  }
];

function Projects() {
  return (
    <>
      <h2 className="text-3xl font-bold text-sky-600 mb-4">
        My Projects 💼
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          item.link ? (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="
                bg-sky-50 rounded-xl shadow p-4 cursor-pointer
                transform transition-transform duration-300
                hover:scale-105 hover:shadow-lg
              ">
                <img src={item.img} className="rounded-lg mb-3" />
                <h3 className="font-semibold text-sky-700">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </a>
          ) : (
            <div
              key={i}
              className="
                bg-sky-50 rounded-xl shadow p-4
                transform transition-transform duration-300
                hover:scale-105
              "
            >
              <img src={item.img} className="rounded-lg mb-3" />
              <h3 className="font-semibold text-sky-700">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          )
        ))}
      </div>
    </>
  );
}

export default Projects;
