import { Mail, Phone, Smartphone, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#fdf5f7] border-t border-[#e9dadd]">
      {/* Newsletter */}
      <div className="bg-[#d46d94] text-white px-6 py-6">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
          {/* Texto */}
          <div className="flex items-center gap-4">
            <Mail className="w-8 h-8" />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">NOSSAS NOVIDADES</p>
              <p className="text-sm">
                Inscreva-se para receber em primeira mão!
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-center">
            <input
              type="email"
              placeholder="Digite seu melhor e-mail"
              className="flex-1 rounded-full px-4 py-2 text-sm text-white placeholder-white bg-[#d46d94]/20 border border-white focus:outline-none w-full sm:w-[250px]"
            />
            <button className="bg-white text-[#d46d94] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#f9f9f9]">
              INSCREVER-SE
            </button>
          </div>
        </div>
      </div>

      {/* Links e infos */}
      <div className="max-w-[1300px] mx-auto px-6 py-10 grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-[#2f2f2f]">
        {/* Institucional */}
        <div>
          <p className="font-semibold mb-4">INSTITUCIONAL</p>
          <ul className="space-y-2">
            <li>Sobre</li>
            <li>Como comprar</li>
            <li>Pagamento</li>
            <li>Prazos e Envio</li>
            <li>Troca e Devolução</li>
            <li>Reembolso</li>
            <li>Termos de Uso</li>
            <li>Privacidade</li>
            <li>Minha Conta</li>
            <li>Contato</li>
          </ul>
        </div>

        {/* Atendimento */}
        <div>
          <p className="font-semibold mb-4">ATENDIMENTO</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              (47) 99170-4642
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (47) 99170-4642
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              contato@nanylencois.com.br
            </li>
            <li>Atendimento 24h</li>
            <li>Página de Contato</li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <p className="font-semibold mb-4">SIGA NOSSAS REDES</p>
          <div className="flex gap-4">
            <a href="#">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="border-t text-xs text-center bg-[#fff] text-[#7a7a7a] py-4">
        © 2025 Nany Lençois - Todos os direitos reservados.
      </div>
    </footer>
  );
}
