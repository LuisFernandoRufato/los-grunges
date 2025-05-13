export default function Agenda() {
  const shows = [
    { data: "28-06-2025", local: "Nociva Pub Bar - Sorocaba, SP" },
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