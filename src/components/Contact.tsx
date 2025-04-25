
const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Get In Touch</h2>
        <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="text-center mb-8">
            <p className="text-xl mb-4">Contact Details:</p>
            <p className="text-gray-600">📍 TIRUNELVELLI</p>
            <p className="text-gray-600">📱 9150109613</p>
            <p className="text-gray-600">✉️ karthickraja1652@gmail.com</p>
          </div>
          <div className="text-center">
            <p className="text-lg mb-4">Extra-Curricular Activities:</p>
            <div className="flex justify-center gap-4">
              <span className="bg-gray-100 px-4 py-2 rounded-full">Badminton</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Swimming</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
