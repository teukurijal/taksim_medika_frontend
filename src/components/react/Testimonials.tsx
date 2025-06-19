import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ibu Sari Wulandari',
      rating: 5,
      comment: 'Pelayanan yang sangat baik dan ramah. Dokternya profesional dan mudah dihubungi. Sangat puas dengan layanan di Klinik Taksim Medika.',
      avatar: '👩'
    },
    {
      name: 'Bapak Ahmad Hidayat',
      rating: 5,
      comment: 'Klinik yang bersih dan nyaman. Harga terjangkau tapi kualitas pelayanan tidak murahan. Recommended untuk keluarga.',
      avatar: '👨'
    },
    {
      name: 'Ibu Maya Sari',
      rating: 5,
      comment: 'Proses booking yang mudah dan cepat. Tidak perlu antri lama, pelayanan tepat waktu. Terima kasih Klinik Taksim Medika!',
      avatar: '👩‍💼'
    },
    {
      name: 'Bapak Joko Susilo',
      rating: 4,
      comment: 'Dokter anak di sini sangat sabar dan ramah dengan anak-anak. Anak saya tidak takut lagi ke dokter setelah berobat di sini.',
      avatar: '👨‍💻'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni Pasien
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman pasien yang telah merasakan pelayanan terbaik dari Klinik Taksim Medika.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-lg p-8 inline-block">
            <div className="flex justify-center items-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Pasien Puas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">4.8</div>
                <div className="text-gray-600">Rating Google</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-gray-600">Tahun Berpengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;