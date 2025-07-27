
export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <section className="bg-gray-900 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Isaac Mascena & Associados</h1>
        <p className="text-xl md:text-2xl mb-6">Inteligência jurídica para Negócios e Investimentos</p>
        <a href="https://wa.me/5582999997090" target="_blank" className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">Fale Conosco</a>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto" id="sobre">
        <h2 className="text-3xl font-bold mb-4">Sobre o Escritório</h2>
        <p className="text-lg leading-relaxed">
          Fundado com o propósito de oferecer soluções jurídicas sólidas e personalizadas, o escritório Isaac Mascena & Associados reúne uma equipe altamente qualificada para atender clientes nas áreas mais estratégicas do Direito, com foco especial em negócios e investimentos.
        </p>
      </section>

      <section className="bg-gray-100 py-20 px-6" id="atuacao">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Áreas de Atuação</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg">
            <li>📌 Direito Imobiliário</li>
            <li>📌 Direito Bancário</li>
            <li>📌 Direito Empresarial</li>
            <li>📌 Contratos e Investimentos</li>
            <li>📌 Direito Tributário</li>
            <li>📌 Consultoria Estratégica</li>
          </ul>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto" id="equipe">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossa Equipe</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div><p className="font-semibold">Dr. Isaac Mascena</p><p>Advogado Fundador</p></div>
          <div><p className="font-semibold">Dr. Carlos Ayala</p><p>Direito Empresarial</p></div>
          <div><p className="font-semibold">Dra. Beatriz Reis</p><p>Direito Contratual</p></div>
          <div><p className="font-semibold">Dra. Virgínia Queiroz</p><p>Direito Tributário</p></div>
          <div><p className="font-semibold">Dra. Débora Calheiros</p><p>Direito Imobiliário</p></div>
          <div><p className="font-semibold">Dr. Filipe Lins</p><p>Advogado Virtual Especializado</p></div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20 px-6" id="contato">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Nome" className="w-full p-3 rounded text-black" />
            <input type="email" placeholder="E-mail" className="w-full p-3 rounded text-black" />
            <textarea placeholder="Mensagem" rows={4} className="w-full p-3 rounded text-black" />
            <button type="submit" className="bg-white text-gray-900 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
