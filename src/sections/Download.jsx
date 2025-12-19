function Download() {
  const files = [
    {
      title: "Curriculum Vitae",
      desc: "CV terbaru berisi data diri, pendidikan, dan kemampuan.",
      link: "https://drive.google.com/file/d/1nPwlYZMoDncX8oEcyaBp7PS2LmSdj0D8/view?usp=drive_link",
      btn: "Lihat / Download CV",
    },
    {
      title: "Sertifikat",
      desc: "Kumpulan sertifikat pendukung pembelajaran dan keahlian.",
      link: "https://drive.google.com/drive/folders/1PUkQIROFj4Ixd3QQUfF0Q9XDvRjWmdqg?usp=drive_link",
      btn: "Lihat Sertifikat",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-sky-600 mb-4">
        Download 📄
      </h2>

      <p className="text-gray-700 mb-6">
        Dokumen yang dapat diakses melalui Google Drive.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {files.map((item, i) => (
          <div
            key={i}
            className="bg-sky-50 rounded-xl shadow p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold text-sky-700 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {item.desc}
              </p>
            </div>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition"
            >
              {item.btn}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Download;
