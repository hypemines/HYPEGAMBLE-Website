import React from 'react';

interface LeaderboardEntry {
  place: number;
  user: string;
  wagered: number;
  prize: number;
}

const fakeData: LeaderboardEntry[] = [
  { place: 4, user: 'J******7', wagered: 154758.01, prize: 1000 },
  { place: 5, user: 'M********N**', wagered: 152982.47, prize: 750 },
  { place: 6, user: 'Z****E*', wagered: 105325.40, prize: 600 },
  { place: 7, user: 'G**B*****', wagered: 92321.94, prize: 450 },
  { place: 8, user: 'H****Y', wagered: 89752.20, prize: 350 },
  { place: 9, user: 'G**L********', wagered: 83335.87, prize: 300 },
  { place: 10, user: 'C*O*******', wagered: 70603.92, prize: 200 },
  // ... add more entries as needed
];

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="none">
    <path fill="currentColor" fillRule="evenodd" d="M2.5.333C2.5.15 2.65 0 2.833 0h7.334c.184 0 .333.15.333.333v.334h1.667c.184 0 .333.149.333.333v2c0 .92-.746 1.667-1.667 1.667h-.56a4.006 4.006 0 0 1-3.106 2.611v2.055h2c.184 0 .333.15.333.334v2c0 .184-.15.333-.333.333H3.833a.333.333 0 0 1-.333-.333v-2c0-.184.15-.334.333-.334h2V7.278a4.006 4.006 0 0 1-3.105-2.611h-.561C1.247 4.667.5 3.92.5 3V1C.5.816.65.667.833.667H2.5V.333Zm8 1h1.333V3a1 1 0 0 1-1 1H10.5V1.333Zm-8 0H1.167V3a1 1 0 0 0 1 1H2.5V1.333Z" clipRule="evenodd" />
  </svg>
);

const Leaderboard: React.FC = () => {
  return (
    <div className="leaderboard-table-section-table-wrapper">
      <div className="leaderboard-table-wrapper no-scrollbar">
        <div className="leaderboard-table-header">
          <div className="custom-table-cell custom-table-header-cell leaderboard-table-header-cell leaderboard-table-header-place justify-content-start">Place</div>
          <div className="custom-table-cell custom-table-header-cell leaderboard-table-header-cell leaderboard-table-header-username justify-content-start">Users</div>
          <div className="custom-table-cell custom-table-header-cell leaderboard-table-header-cell leaderboard-table-header-wagered justify-content-start">Wagered</div>
          <div className="custom-table-cell custom-table-header-cell leaderboard-table-header-cell leaderboard-table-header-prize justify-content-start">Prize</div>
        </div>
        <div className="leaderboard-table position-relative leaderboard-table-decoration">
          {fakeData.map((entry, index) => (
            <div key={entry.place} className={`leaderboard-table-row leaderboard-table-row-normal ${index === fakeData.length - 2 ? 'leaderboard-table-row-second-last' : ''} ${index === fakeData.length - 1 ? 'leaderboard-table-row-last' : ''}`}>
              <div className="leaderboard-table-row-place">{entry.place}</div>
              <div className="leaderboard-table-cell leaderboard-table-cell--user">
                <span className="text-truncate">{entry.user}</span>
              </div>
              <div className="leaderboard-table-cell leaderboard-table-cell--wagered">
                ${Math.floor(entry.wagered).toLocaleString()}
                <span className="leaderboard-table-cell--wagered-decimal">
                  .{(entry.wagered % 1).toFixed(2).slice(2)}
                </span>
              </div>
              <div className="leaderboard-table-cell leaderboard-table-cell--prize">
                <TrophyIcon />
                ${entry.prize.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;