function About() {
  return (
    <>
      <h2 className="text-3xl font-bold text-sky-600 mb-4">
        Hi, I’m Putri 👋
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8">
        Aku Putri Mifta, mahasiswa Sistem Informasi semester 3 yang tertarik pada teknologi dan desain. 
        Saat ini aku sedang belajar Python, Java, HTML, serta dasar basis data. 
        Aku senang mencoba hal baru dan belajar membuat tampilan web yang menarik. 
        Aku percaya desain yang baik bukan hanya indah, 
        tetapi juga memberi pengalaman pengguna yang nyaman dan efisien.
        <span className="font-semibold text-sky-700"> UI/UX Design </span>
        dan <span className="font-semibold text-sky-700">front-end web.</span>
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <Stat title="2+" desc="Project Selesai" />
        <Stat title="1th" desc="Tahun Pengalaman" />
        <Stat title="2" desc="Project Tugas Saat Ini" />
      </div>
    </>
  );
}

function Stat({ title, desc }) {
  return (
    <div className="bg-sky-50 rounded-xl p-4 text-center shadow">
      <h3 className="text-2xl font-bold text-sky-600">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default About;
