import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: '🏥',
      title: 'Berpengalaman',
      description: 'Lebih dari 10 tahun melayani kesehatan masyarakat'
    },
    {
      icon: '😊',
      title: 'Ramah',
      description: 'Pelayanan yang hangat dan profesional'
    },
    {
      icon: '💰',
      title: 'Terjangkau',
      description: 'Harga yang kompetitif untuk semua kalangan'
    },
    {
      icon: '⚡',
      title: 'Cepat',
      description: 'Pelayanan yang efisien tanpa mengurangi kualitas'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tentang Klinik Taksim Medika
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Klinik Taksim Medika adalah fasilitas kesehatan terpercaya yang berkomitmen memberikan 
            pelayanan medis berkualitas tinggi dengan harga terjangkau. Kami melayani dengan sepenuh hati 
            untuk kesehatan dan kesejahteraan Anda serta keluarga.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;