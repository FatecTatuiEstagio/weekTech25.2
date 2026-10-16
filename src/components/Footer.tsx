import logoFatec from "../Icon_FatecTwentyYears.png";
import logoGovernoSP from "../Icon_governoSP.png";
import logoCps from "../Icon_cps.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre o Evento", href: "#sobre" },
    { label: "Programação", href: "#programacao" },
    { label: "Edições Anteriores", href: "#edicoes-anteriores" },
  ];

  return (
    <footer className="bg-neutral-950 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <img src={logoFatec} alt="Fatec Tatuí — 20 anos" className="h-12 w-auto object-contain" />
              <img src={logoGovernoSP} alt="Governo do Estado de São Paulo" className="h-12 w-auto object-contain" />
              <img src={logoCps} alt="Centro Paula Souza" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Faculdade de Tecnologia de Tatuí<br />Centro Paula Souza
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {links.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-white">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contato</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Rodovia Mário Batista Mori, 971</li>
              <li>Tatuí/SP - CEP 18280-000</li>
              <li>(15) 3205-7782</li>
              <li><a href="mailto:f132.secdir@fatectatui.edu.br" className="transition-colors hover:text-white">f132.secdir@fatectatui.edu.br</a></li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-6xl border-t border-white/20 pt-6 text-center text-sm text-white/60">
          <p>© {currentYear} Fatec Tatuí - Centro Paula Souza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
