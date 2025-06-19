import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🩺',
      title: 'Pemeriksaan Umum',
      description: 'Konsultasi dan pemeriksaan kesehatan rutin dengan dokter berpengalaman'
    },
    {
      icon: '💉',
      title: 'Imunisasi',
      description: 'Program vaksinasi lengkap untuk anak dan dewasa'
    },
    {
      icon: '🔬',
      title: 'Laboratorium',
      description: 'Layanan pemeriksaan laboratorium dengan hasil yang akurat'
    },
    {
      icon: '🦷',
      title: 'Perawatan Gigi',
      description: 'Perawatan kesehatan gigi dan mulut yang komprehensif'
    },
    {
      icon: '📱',
      title: 'USG',
      description: 'Pemeriksaan ultrasonografi dengan teknologi modern'
    },
    {
      icon: '🏃‍♂️',
      title: 'Medical Check Up',
      description: 'Paket pemeriksaan kesehatan menyeluruh untuk deteksi dini'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan kesehatan dengan standar medis terbaik 
            untuk memenuhi kebutuhan kesehatan Anda dan keluarga.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Pelajari Lebih Lanjut →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;