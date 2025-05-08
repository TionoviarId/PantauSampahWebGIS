'use client'
import { useState } from "react";


export default function Home() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <main className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section
        className="relative h-screen px-6 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/pts.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center text-white z-10 px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
            WebGIS TPS Kota Sumedang
          </h1>
          <p className="text-base md:text-xl mb-8 max-w-2xl drop-shadow-sm">
            Jelajahi peta interaktif dan temukan informasi terkini mengenai Tempat Pembuangan Sementara di seluruh Kota Sumedang.
          </p>
          <a
            href="#map"
            className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-700 transition font-semibold w-fit"
          >
            Lihat Peta
          </a>
        </div>
      </section>

      {/* Highlight Section */}
      {/* Highlight Section */}
      <div className="text-center mt-20 mb-10 px-6">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 font-serif">Jumlah Persebaran TPS</h2>
          <p className="text-gray-600">Pantau Jumlah TPS dan kondisinya secara interaktif.</p>
        </div>
<section
  className="relative py-24  px-6 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/uiia.jpg')" }} // ganti sesuai nama gambar background kamu
>
  <div className="absolute inset-0 bg-black/70 "></div>
  <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center z-10">
    {[
      {
        icon: "🗑️",
        title: "Total TPS Aktif",
        value: 100,
        desc: "TPS tersebar dan aktif di kota-kota Besar",
        color: "emerald",
      },
      {
        icon: "⚠️",
        title: "Sampah",
        value: "2,2 M ton",
        desc: "Estimasi sampah Global per Tahun",
        color: "yellow",
      },
      {
        icon: "❌",
        title: "TPS Tidak Layak",
        value: 1,
        desc: "TPA Kondisi rusak & overload",
        color: "red",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className={`bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-b-4 border-transparent hover:border-${item.color}-500`}
      >
        <div
          className={`w-20 h-20 mx-auto mb-5 flex items-center justify-center text-4xl bg-${item.color}-100 text-${item.color}-600 rounded-full shadow-inner`}
        >
          {item.icon}
        </div>
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">{item.title}</p>
        <h3 className={`text-5xl font-extrabold text-${item.color}-600 mb-2`}>{item.value}</h3>
        <p className="text-gray-700 text-base">{item.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* Map Section */}
      <section id="map" className="py-24 px-6 bg-white">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4 text-gray-900 font-serif">Peta Persebaran TPS</h2>
    <p className="text-gray-600">Pantau lokasi TPS dan kondisinya secara interaktif.</p>
  </div>

  <div className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl border h-[500px] md:aspect-video relative">
    {!iframeLoaded && (
      <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-emerald-500 border-solid"></div>
      </div>
    )}
    <iframe
      src="https://geoblastify.party/GIS/#11/-6.8160/108.0121"
      className="w-full h-full relative z-0"
      frameBorder="0"
      allowFullScreen
      title="Peta"
      onLoad={() => setIframeLoaded(true)}
    ></iframe>
  </div>
</section>



      {/* Edukasi */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F5F7FA] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 font-serif">Kenapa TPS Itu Penting?</h2>
          <p className="text-lg text-gray-700 mb-10">
            TPS merupakan bagian krusial dari sistem pengelolaan sampah yang sehat dan efisien. Penempatan TPS yang baik mampu mencegah timbunan sampah liar dan menjaga lingkungan tetap bersih.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h4 className="font-semibold text-xl text-emerald-700 mb-4">Jika Dikelola Baik</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Lingkungan lebih bersih</li>
                <li>Mengurangi pencemaran</li>
                <li>Meningkatkan kesehatan masyarakat</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h4 className="font-semibold text-xl text-red-700 mb-4">Jika Dibiarkan Menumpuk</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Menimbulkan bau dan polusi</li>
                <li>Menyebabkan banjir</li>
                <li>Menjadi sarang penyakit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri TPS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-serif">Kondisi TPS di Lapangan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["tpa1.jpg", "tpa2.jpg", "tpa3.jpeg"].map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
                <img
                  src={`/images/${img}`}
                  alt={`TPS ${idx + 1}`}
                  className="object-cover w-full h-60 hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Video Edukasi Section */}
<section className="py-24 px-6 bg-[#F5F7FA]">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 text-gray-900 font-serif">Video Edukasi TPSA</h2>
    <p className="text-lg text-gray-700 mb-10">
      Tonton video berikut untuk memahami lebih dalam bagaimana kondisi TPSA yang ada di Kota Sumedang.
    </p>
    <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border mx-auto">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/Na_fmn5Xpno?si=yfh1RaU6kiU6gPBT"
        title="Video Edukasi TPS"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

      {/* Ajakan Partisipasi */}
      <section className="bg-emerald-600 text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-6 font-serif">Bersama Jaga Kebersihan Kota</h2>
          <p className="text-lg mb-8">
            Laporkan TPS yang penuh atau bermasalah dan bantu kami menjaga Sumedang tetap bersih dan nyaman untuk semua.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=6281122202220&text=Simpati"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Laporkan TPS
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-10 bg-white border-t">
        &copy; 2025 | WebGIS TPS Sumedang
      </footer>
    </main>
  );
}
