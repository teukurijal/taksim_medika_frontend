import React from 'react';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Ahmad Wijaya, Sp.PD',
      specialty: 'Dokter Spesialis Penyakit Dalam',
      experience: '15 tahun pengalaman',
      image: '/api/placeholder/300/300',
      schedule: 'Senin - Jumat, 08:00 - 16:00'
    },
    {
      name: 'Dr. Sari Indah, Sp.A',
      specialty: 'Dokter Spesialis Anak',
      experience: '12 tahun pengalaman',
      image: '/api/placeholder/300/300',
      schedule: 'Selasa - Sabtu, 09:00 - 17:00'
    },
    {
      name: 'Dr. Budi Santoso, Sp.OG',
      specialty: 'Dokter Spesialis Kandungan',
      experience: '18 tahun pengalaman',
      image: '/api/placeholder/300/300',
      schedule: 'Senin - Kamis, 10:00 - 18:00'
    },
    {
      name: 'Dr. Maya Putri, Sp.KG',
      specialty: 'Dokter Spesialis Gigi',
      experience: '10 tahun pengalaman',
      image: '/api/placeholder/300/300',
      schedule: 'Rabu - Minggu, 08:00 - 15:00'
    }
  ];

  return (
    <section id="doctors" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tim Dokter Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dokter-dokter berpengalaman dan profesional yang siap melayani kesehatan Anda 
            dengan dedikasi dan keahlian terbaik.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-6xl">👨‍⚕️</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm mb-3">{doctor.experience}</p>
                <div className="border-t pt-3">
                  <p className="text-gray-500 text-sm mb-3">Jadwal Praktik:</p>
                  <p className="text-gray-700 text-sm">{doctor.schedule}</p>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Buat Janji
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;