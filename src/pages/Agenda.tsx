export default function Agenda() {
  const shows = [
    { data: "2025-06-10", local: "Rua do Rock Club - São Paulo, SP" },
    { data: "2025-06-17", local: "Caverna do Som - Rio de Janeiro, RJ" },
    { data: "2025-06-24", local: "The Underground Stage - Belo Horizonte, MG" },
    { data: "2025-07-01", local: "Mosh Pit Bar - Porto Alegre, RS" },
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">Próximos Shows</h2>
      <ul>
        {shows.map((show, index) => (
          <li key={index} className="mb-4">
            <p className="text-lg font-semibold">{show.data}</p>
            <p className="text-sm text-gray-600">{show.local}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}