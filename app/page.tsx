import { FaPhone, FaCheckCircle, FaStar, FaWrench, FaShower, FaFire } from 'react-icons/fa';
import { MdPlumbing } from 'react-icons/md';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HEADER/NAVIGATION */}
      <header className="bg-blue-600 text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MdPlumbing className="text-3xl" />
            <span className="text-xl font-bold">DépannExpress Plomberie</span>
          </div>
          <a href="tel:0600000000" className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition flex items-center gap-2">
            <FaPhone /> Appeler
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Plombier d'urgence à <span className="text-blue-600">Ardres & Calais</span>
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Intervention en moins de 2h · 7j/7 · Devis gratuit par téléphone
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Fuite, WC bouchés, chaudière en panne ?<br />
                On arrive, on répare, vous êtes tranquille.
              </p>
              <div className="flex flex-col gap-4">
                <a href="tel:0600000000" className="bg-blue-600 text-white px-8 py-5 rounded-lg font-bold text-2xl hover:bg-blue-700 transition text-center flex items-center justify-center gap-3 shadow-xl">
                  <FaPhone className="text-3xl" /> 06 00 00 00 00
                </a>
                <p className="text-center text-gray-600 text-sm">
                  Réponse immédiate · Devis gratuit au téléphone
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=600&fit=crop" 
                alt="Plombier professionnel"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Nos interventions rapides
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-xl transition">
              <FaWrench className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Dépannage d'urgence</h3>
              <p className="text-gray-700 mb-4">
                Fuite d'eau, robinet cassé, canalisation bouchée
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> Intervention sous 2h
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> Disponible 24/7
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-xl transition">
              <FaFire className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Réparation & Remplacement</h3>
              <p className="text-gray-700 mb-4">
                Chauffe-eau, chaudière, sanitaires
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> Devis gratuit
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> Pièces garanties 2 ans
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-xl transition">
              <FaShower className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Rénovation salle de bain</h3>
              <p className="text-gray-700 mb-4">
                Installation complète · Douche à l'italienne
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> Sur-mesure
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> Finitions soignées
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Pourquoi 300+ clients nous font confiance ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Intervention rapide (sous 2h en urgence)",
              "Devis gratuit par téléphone",
              "Artisan local depuis 12 ans",
              "Paiement après travaux",
              "Garantie satisfait ou remboursé",
              "Disponible 7j/7"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVIS CLIENTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Ils nous ont fait confiance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {[
              {
                name: "Sophie M.",
                city: "Ardres",
                text: "Fuite dans la cuisine un dimanche soir. Arnaud est venu en 1h30, problème réglé en 20 min. Tarif honnête, je recommande !",
              },
              {
                name: "Karim B.",
                city: "Calais",
                text: "Remplacement de mon chauffe-eau. Travail propre, rapide, prix correct. Enfin un artisan qui répond au téléphone !",
              },
              {
                name: "Claire D.",
                city: "Ardres",
                text: "Installation complète de ma salle de bain. Résultat impeccable, dans les temps. Merci !",
              }
            ].map((review, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-xl">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-bold text-gray-900">— {review.name}, {review.city}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CALL TO ACTION FINAL - APPEL DIRECT */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-5xl font-bold mb-6">
            Une urgence ? Besoin d'un devis ?
          </h2>
          <p className="text-2xl mb-8">
            Appelez maintenant · Réponse en moins de 2 minutes
          </p>
          
          <a href="tel:0600000000" className="inline-block bg-white text-blue-600 px-12 py-6 rounded-xl font-bold text-3xl hover:bg-gray-100 transition shadow-2xl mb-8">
            <div className="flex items-center gap-4">
              <FaPhone className="text-4xl" />
              <span>06 00 00 00 00</span>
            </div>
          </a>

          <div className="space-y-3 text-xl">
            <p className="flex items-center justify-center gap-2">
              <FaCheckCircle /> Disponible 7j/7 de 7h à 21h
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaCheckCircle /> Devis gratuit par téléphone
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaCheckCircle /> Intervention rapide sur Ardres et 20 km alentour
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-2">© 2025 DépannExpress Plomberie · Ardres & Calais</p>
          <p className="text-gray-500 text-sm">Zone d'intervention : Ardres, Calais, Guînes, Licques et alentours (20 km)</p>
        </div>
      </footer>

    </main>
  );
}