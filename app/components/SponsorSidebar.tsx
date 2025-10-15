export default function SponsorSidebar() {
  const sponsors = [
    { id: 1, name: 'Sponsor 1', logo: '🏆' },
    { id: 2, name: 'Sponsor 2', logo: '⚽' },
    { id: 3, name: 'Sponsor 3', logo: '🎯' },
    { id: 4, name: 'Sponsor 4', logo: '🏀' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800 mb-4">SPONSORLARIMIZ</h3>
      {sponsors.map((sponsor) => (
        <div
          key={sponsor.id}
          className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition"
        >
          <div className="text-5xl mb-2">{sponsor.logo}</div>
          <p className="text-sm font-medium text-gray-700">{sponsor.name}</p>
        </div>
      ))}
      
      {/* Ad Banner */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-white text-center">
        <p className="text-sm font-bold mb-2">REKLAM ALANI</p>
        <p className="text-xs">Reklam vermek için iletişime geçin</p>
      </div>
    </div>
  );
}

