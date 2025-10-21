import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Seção 1 – Banner */}
      <section className="banner">
        <h1>Cloud Computing</h1>
      </section>

      {/* Seção 2 – Tipos de Nuvem */}
      <section className="cloud-types">
        <h2>Tipos de Nuvem</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Nuvem Pública</h3>
            <p>
              Recursos e serviços são disponibilizados por provedores públicos, 
              como AWS, Azure e Google Cloud. Ideal para escalabilidade e custo reduzido.
            </p>
          </div>
          <div className="card">
            <h3>Nuvem Privada</h3>
            <p>
              Infraestrutura exclusiva de uma organização, oferecendo maior controle, 
              personalização e segurança sobre os dados e aplicações.
            </p>
          </div>
          <div className="card">
            <h3>Nuvem Híbrida</h3>
            <p>
              Combina nuvens públicas e privadas, permitindo flexibilidade e melhor 
              aproveitamento de recursos de ambas as abordagens.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3 – Modelos de Serviço */}
      <section className="service-models">
        <h2>Modelos de Serviço em Cloud</h2>
        <div className="models-container">
          <div className="model">
            <h3>IaaS (Infrastructure as a Service)</h3>
            <p>
              Fornece infraestrutura de TI como servidores, redes e armazenamento sob demanda. 
              Exemplo: Amazon EC2, Microsoft Azure.
            </p>
          </div>
          <div className="model">
            <h3>PaaS (Platform as a Service)</h3>
            <p>
              Oferece plataformas para desenvolvimento e hospedagem de aplicações, 
              sem necessidade de gerenciar infraestrutura. Exemplo: Google App Engine.
            </p>
          </div>
          <div className="model">
            <h3>SaaS (Software as a Service)</h3>
            <p>
              Entrega de softwares pela internet, acessados via navegador. 
              Exemplo: Gmail, Salesforce, Microsoft 365.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
