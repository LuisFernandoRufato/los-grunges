export default function Contato() {
  const contatos = [
    { nome: "E-mail", link: "mailto:contato@losgrunges.com", info: "contato@losgrunges.com" },
    { nome: "Instagram", link: "https://www.instagram.com/losgrungesband", info: "@losgrungesband" },
    { nome: "WhatsApp", link: "https://wa.me/5511998765432", info: "(11) 99876-5432" },
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">Entre em contato conosco para shows e parcerias.</h2>
      <ul>
        {contatos.map((contato, index) => (
          <li key={index} className="mb-4">
            <p className="text-lg font-semibold">{contato.nome}</p>
            <a href={contato.link} className="text-blue-600 hover:underline">{contato.info}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}