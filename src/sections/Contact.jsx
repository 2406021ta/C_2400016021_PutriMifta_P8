import { Phone, Mail, MapPin } from "lucide-react";

function Contact() {
  return (
    <>
      <h2 className="text-3xl font-bold text-sky-600 mb-4">
        Let’s Connect ✨
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {/* PHONE */}
        <Card
          icon={<Phone className="text-green-600" />}
          text="+62 823 3350 6761"
          link="https://wa.me/6282333506761"
        />

        {/* EMAIL */}
        <Card
          icon={<Mail className="text-purple-600" />}
          text="2400016021@webmail.uad.ac.id"
          link="mailto:2400016021@webmail.uad.ac.id"
        />

        {/* LOCATION */}
        <Card
          icon={<MapPin className="text-pink-600" />}
          text="Universitas Ahmad Dahlan – Kampus 4"
          link="https://www.google.com/maps?q=Universitas+Ahmad+Dahlan+Kampus+4"
          full
        />
      </div>
    </>
  );
}

function Card({ icon, text, link, full }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-sky-50 rounded-xl p-4 flex gap-3 items-center shadow 
        hover:bg-sky-100 hover:scale-[1.02] transition
        ${full ? "md:col-span-2" : ""}`}
    >
      {icon}
      <span className="text-gray-800">{text}</span>
    </a>
  );
}

export default Contact;
