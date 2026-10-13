import { useState } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { SlideContainer, SlideHeader, SlideFooter, EditButton } from './design-system';

type Keyword = {
  keyword: string;
  msv: string;
  kd: number;
  dec: number | null;
  jan: number | null;
  feb: number | null;
  mar: number | null;
  apr: number | null;
  may: number | null;
  jun: number | null;
  jul: number | null;
<<<<<<< HEAD
  aug: number | null;
  sep: number | null;
  diff: number;
};

const KEYWORDS_INIT: Keyword[] = [
  { keyword: 'remote desktop',                  msv: '74K',   kd: 100, dec: 12,  jan: 15,  feb: 18, mar: 58, apr: 34,  may: 74,  jun: 101, jul: 101, aug: 34,  sep: 101, diff:  -89 },
  { keyword: 'remote desktop software',         msv: '3.6K',  kd: 98,  dec: 11,  jan: 8,   feb: 5,  mar: 13, apr: 50,  may: 21,  jun: 37,  jul: 1,   aug: 38,  sep: 28,  diff:  -17 },
  { keyword: 'remote access',                   msv: '8.1K',  kd: 100, dec: 3,   jan: 10,  feb: 4,  mar: 6,  apr: 3,   may: 3,   jun: 3,   jul: 2,   aug: 3,   sep: 3,   diff:    0 },
  { keyword: 'remote access software',          msv: '3.6K',  kd: 98,  dec: 10,  jan: 10,  feb: 7,  mar: 8,  apr: 16,  may: 12,  jun: 15,  jul: 34,  aug: 101, sep: 101, diff:  -91 },
  { keyword: 'remote support',                  msv: '4.4K',  kd: 100, dec: 10,  jan: 7,   feb: 8,  mar: 31, apr: 25,  may: 11,  jun: 6,   jul: 1,   aug: 12,  sep: 21,  diff:  -11 },
  { keyword: 'remote support software',         msv: '1.9K',  kd: 59,  dec: 9,   jan: 9,   feb: 4,  mar: 8,  apr: 5,   may: 8,   jun: 5,   jul: 5,   aug: 101, sep: 101, diff:  -92 },
  { keyword: 'teamviewer alternative',          msv: '1.9K',  kd: 45,  dec: 4,   jan: 4,   feb: 4,  mar: 4,  apr: 4,   may: 4,   jun: 4,   jul: 1,   aug: 32,  sep: 32,  diff:  -28 },
  { keyword: 'teamviewer pricing',              msv: '1K',    kd: 39,  dec: 8,   jan: 8,   feb: 8,  mar: 6,  apr: 5,   may: 5,   jun: 5,   jul: 5,   aug: 4,   sep: 4,   diff:    4 },
  { keyword: 'logmein alternative',             msv: '210',   kd: 25,  dec: 2,   jan: 2,   feb: 2,  mar: 3,  apr: 5,   may: 25,  jun: 19,  jul: 19,  aug: 16,  sep: 16,  diff:  -14 },
  { keyword: 'logmein pricing',                 msv: '320',   kd: 37,  dec: 7,   jan: 7,   feb: 7,  mar: 9,  apr: 8,   may: 53,  jun: 32,  jul: 32,  aug: 44,  sep: 44,  diff:  -37 },
  { keyword: 'anydesk alternative',             msv: '590',   kd: 28,  dec: 101, jan: 42,  feb: 42, mar: 41, apr: 41,  may: 27,  jun: 30,  jul: 30,  aug: 6,   sep: 6,   diff:   95 },
  { keyword: 'anydesk pricing',                 msv: '590',   kd: 32,  dec: 5,   jan: 5,   feb: 7,  mar: 7,  apr: 7,   may: 7,   jun: 4,   jul: 4,   aug: 4,   sep: 2,   diff:    3 },
  { keyword: 'patch management',                msv: '2.9K',  kd: 37,  dec: 58,  jan: 55,  feb: 58, mar: 21, apr: 14,  may: 10,  jun: 5,   jul: 6,   aug: 6,   sep: 4,   diff:   54 },
  { keyword: 'patch management software',       msv: '1.3K',  kd: 25,  dec: 67,  jan: 62,  feb: 57, mar: 32, apr: 66,  may: 76,  jun: 101, jul: 101, aug: 101, sep: 101, diff:  -34 },
  { keyword: 'autonomous endpoint management',  msv: '170',   kd: 18,  dec: 7,   jan: 8,   feb: 7,  mar: 4,  apr: 4,   may: 4,   jun: 29,  jul: 29,  aug: 7,   sep: 7,   diff:    0 },
];

const COLS = '2fr 0.55fr 0.6fr 0.45fr 0.5fr 0.5fr 0.5fr 0.5fr 0.45fr 0.45fr 0.45fr 0.45fr 0.45fr 0.75fr 0.5fr';

function getKdStyle(kd: number) {
  if (kd <= 25) return { bg: '#DCFCE7', text: '#15803D' };
  if (kd <= 45) return { bg: '#FEF9C3', text: '#B45309' };
  return           { bg: '#FEE2E2', text: '#DC2626' };
}

function SparklineCell({ kw }: { kw: Keyword }) {
  const vals: (number | null)[] = [kw.dec, kw.jan, kw.feb, kw.mar, kw.apr, kw.may, kw.jun, kw.jul, kw.aug, kw.sep];
  const W = 60, H = 24, PAD = 3;
  const MAX = 101;

  const toY = (v: number) => PAD + ((v - 1) / (MAX - 1)) * (H - PAD * 2);
  const stepX = (W - PAD * 2) / (vals.length - 1);

  const pts = vals
    .map((v, i) => v !== null ? { x: PAD + i * stepX, y: toY(v) } : null)
    .filter(Boolean) as { x: number; y: number }[];

  if (pts.length < 2) return <span className="text-gray-300 text-xs">—</span>;

  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

  // Color by aug→sep direction (lower rank number = improved)
  let color = '#9CA3AF';
  if (kw.aug !== null && kw.sep !== null) {
    color = kw.sep < kw.aug ? '#16A34A' : kw.sep > kw.aug ? '#DC2626' : '#9CA3AF';
  }

  const last = pts[pts.length - 1];

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <path d={pathD} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={last.x} cy={last.y} r="2.5" fill={color} />
    </svg>
  );
}

function DiffCell({ diff }: { diff: number }) {
  if (diff > 0) return <span className="text-xs font-bold text-green-600">+{diff}</span>;
  if (diff < 0) return <span className="text-xs font-bold text-red-500">{diff}</span>;
  return <span className="text-xs font-semibold text-gray-400">0</span>;
}

function trendDir(kw: Keyword): number {
  if (kw.aug !== null && kw.sep !== null) return kw.aug - kw.sep;
  return 0;
=======
  trend: number; // positive = improved (rank # dropped = better), 0 = stable, negative = dropped
};

const KEYWORDS_INIT: Keyword[] = [
  { keyword: 'remote desktop',                  msv: '74K',   kd: 100, dec: 12,  jan: 15,  feb: 18, mar: 58, apr: 34,  may: 74,  jun: 101, jul: 101, trend: -89  },
  { keyword: 'remote desktop software',         msv: '3.6K',  kd: 98,  dec: 11,  jan: 8,   feb: 5,  mar: 13, apr: 50,  may: 21,  jun: 37,  jul: 1,   trend:  10  },
  { keyword: 'remote access',                   msv: '8.1K',  kd: 100, dec: 3,   jan: 10,  feb: 4,  mar: 6,  apr: 3,   may: 3,   jun: 3,   jul: 2,   trend:   1  },
  { keyword: 'remote access software',          msv: '3.6K',  kd: 98,  dec: 10,  jan: 10,  feb: 7,  mar: 8,  apr: 16,  may: 12,  jun: 15,  jul: 34,  trend: -24  },
  { keyword: 'remote support',                  msv: '4.4K',  kd: 100, dec: 10,  jan: 7,   feb: 8,  mar: 31, apr: 25,  may: 11,  jun: 6,   jul: 1,   trend:   9  },
  { keyword: 'remote support software',         msv: '1.9K',  kd: 59,  dec: 9,   jan: 9,   feb: 4,  mar: 8,  apr: 5,   may: 8,   jun: 5,   jul: 5,   trend:   4  },
  { keyword: 'teamviewer alternative',          msv: '1.9K',  kd: 45,  dec: 4,   jan: 4,   feb: 4,  mar: 4,  apr: 4,   may: 4,   jun: 4,   jul: 1,   trend:   3  },
  { keyword: 'teamviewer pricing',              msv: '1K',    kd: 39,  dec: 8,   jan: 8,   feb: 8,  mar: 6,  apr: 5,   may: 5,   jun: 5,   jul: 5,   trend:   3  },
  { keyword: 'logmein alternative',             msv: '210',   kd: 25,  dec: 2,   jan: 2,   feb: 2,  mar: 3,  apr: 5,   may: 25,  jun: 19,  jul: 19,  trend: -17  },
  { keyword: 'logmein pricing',                 msv: '320',   kd: 37,  dec: 7,   jan: 7,   feb: 7,  mar: 9,  apr: 8,   may: 53,  jun: 32,  jul: 32,  trend: -25  },
  { keyword: 'anydesk alternative',             msv: '590',   kd: 28,  dec: 101, jan: 42,  feb: 42, mar: 41, apr: 41,  may: 27,  jun: 30,  jul: 30,  trend:  71  },
  { keyword: 'anydesk pricing',                 msv: '590',   kd: 32,  dec: 5,   jan: 5,   feb: 7,  mar: 7,  apr: 7,   may: 7,   jun: 4,   jul: 4,   trend:   1  },
  { keyword: 'patch management',                msv: '2.9K',  kd: 37,  dec: 58,  jan: 55,  feb: 58, mar: 21, apr: 14,  may: 10,  jun: 5,   jul: 6,   trend:  52  },
  { keyword: 'patch management software',       msv: '1.3K',  kd: 25,  dec: 67,  jan: 62,  feb: 57, mar: 32, apr: 66,  may: 76,  jun: 101, jul: 101, trend: -34  },
  { keyword: 'autonomous endpoint management',  msv: '170',   kd: 18,  dec: 7,   jan: 8,   feb: 7,  mar: 4,  apr: 4,   may: 4,   jun: 29,  jul: 101, trend: -94  },
];

function getKdStyle(kd: number) {
  if (kd <= 25) return { bg: '#DCFCE7', text: '#15803D' };  // green – Easy win
  if (kd <= 45) return { bg: '#FEF9C3', text: '#B45309' };  // amber – Moderate
  return           { bg: '#FEE2E2', text: '#DC2626' };       // red   – Competitive
}

function TrendCell({ trend }: { trend: number }) {
  if (trend > 0) return (
    <span className="inline-flex items-center gap-0.5" style={{ color: '#16A34A' }}>
      <TrendingUp className="w-3.5 h-3.5" />
      <span className="text-xs font-bold">+{trend}</span>
    </span>
  );
  if (trend < 0) return (
    <span className="inline-flex items-center gap-0.5" style={{ color: '#DC2626' }}>
      <TrendingDown className="w-3.5 h-3.5" />
      <span className="text-xs font-bold">{trend}</span>
    </span>
  );
  return (
    <span className="inline-flex items-center gap-0.5" style={{ color: '#9CA3AF' }}>
      <Minus className="w-3.5 h-3.5" />
    </span>
  );
>>>>>>> origin/main
}

export function SlideTargetingKeywordsTrend({ onNavigateHome }: { onNavigateHome?: () => void }) {
  const [keywords, setKeywords] = useState<Keyword[]>(KEYWORDS_INIT.map(k => ({ ...k })));
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit   = () => setIsEditing(true);
  const handleSave   = () => setIsEditing(false);
  const handleCancel = () => { setKeywords(KEYWORDS_INIT.map(k => ({ ...k }))); setIsEditing(false); };

  const handleChange = (rowIdx: number, field: keyof Keyword, value: string) => {
    setKeywords(prev => prev.map((kw, i) => {
      if (i !== rowIdx) return kw;
      if (field === 'keyword' || field === 'msv') return { ...kw, [field]: value };
      const n = value === '' ? null : parseFloat(value);
      return { ...kw, [field]: isNaN(n as number) ? kw[field] : n };
    }));
  };

<<<<<<< HEAD
  const improved = keywords.filter(k => trendDir(k) > 0);
=======
  // ── Insight computations ────────────────────────────────────────────────
  const improved = keywords.filter(k => k.trend > 0);
>>>>>>> origin/main
  const easyWin  = keywords.filter(k => k.kd <= 25);
  const highComp = keywords.filter(k => k.kd > 45);

  return (
<<<<<<< HEAD
    <SlideContainer slideNumber={7} onNavigateHome={onNavigateHome} source="Semrush">
      <SlideHeader
        title="Targeting Keywords Trend"
        subtitle="Dec 2025 – Sep 2026 · Source: Semrush · Country: US"
      />

=======
    <SlideContainer slideNumber={7} onNavigateHome={onNavigateHome} source="GSC">
      <SlideHeader
        title="Targeting Keywords Trend"
        subtitle="Dec 2025 – Jul 2026 · Source: GSC · Country: US"
      />

      {/* Edit button row */}
>>>>>>> origin/main
      <div className="flex justify-end mb-3">
        <EditButton isEditing={isEditing} onEdit={handleEdit} onSave={handleSave} onCancel={handleCancel} />
      </div>

<<<<<<< HEAD
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-bold text-gray-800">Ranking Trend: Dec → Jan → Feb → Mar → Apr → May → Jun → Jul → Aug → Sep</span>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span>Lower rank = better position</span>
          <span className="flex items-center gap-1 text-green-600 font-semibold"><TrendingUp className="w-3 h-3" />Improved</span>
          <span className="flex items-center gap-1 text-red-500 font-semibold"><TrendingDown className="w-3 h-3" />Dropped</span>
          <span className="flex items-center gap-1 text-gray-400 font-semibold"><Minus className="w-3 h-3" />Stable</span>
        </div>
      </div>

      <div className="flex-1 border border-gray-200 rounded-xl overflow-hidden flex flex-col min-h-0">
        {/* Header */}
        <div className="grid bg-gray-50 border-b border-gray-200 px-4 py-2.5" style={{ gridTemplateColumns: COLS }}>
          {['KEYWORD','SV','KD','DEC','JAN 26','FEB 23','MAR 30','APR 27','MAY','JUN','JUL','AUG','SEP','TREND','DIFF'].map(h => (
=======
      {/* Section label + legend */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-bold text-gray-800">Ranking Trend: Dec → Jan → Feb → Mar → Apr → May → Jun → Jul</span>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span>Lower rank = better position</span>
          <span className="flex items-center gap-1 text-green-600 font-semibold"><TrendingUp className="w-3 h-3"/>Improved</span>
          <span className="flex items-center gap-1 text-red-500 font-semibold"><TrendingDown className="w-3 h-3"/>Dropped</span>
          <span className="flex items-center gap-1 text-gray-400 font-semibold"><Minus className="w-3 h-3"/>Stable</span>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 border border-gray-200 rounded-xl overflow-hidden flex flex-col min-h-0">
        {/* Table header */}
        <div className="grid bg-gray-50 border-b border-gray-200 px-4 py-2.5"
             style={{ gridTemplateColumns: '2fr 0.6fr 0.7fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.65fr' }}>
          {['KEYWORD','MSV','KD','DEC','JAN','FEB','MAR','APR','MAY','JUN','JUL','TREND'].map(h => (
>>>>>>> origin/main
            <span key={h} className="text-xs font-bold text-gray-500 tracking-wide uppercase">{h}</span>
          ))}
        </div>

<<<<<<< HEAD
        {/* Body */}
        <div className="overflow-y-auto flex-1">
          {isEditing ? (
=======
        {/* Table body – scrollable */}
        <div className="overflow-y-auto flex-1">
          {isEditing ? (
            // Edit mode rows
>>>>>>> origin/main
            keywords.map((kw, i) => (
              <div
                key={i}
                className={`grid items-center px-4 py-1.5 border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
<<<<<<< HEAD
                style={{ gridTemplateColumns: COLS }}
              >
                <input value={kw.keyword} onChange={e => handleChange(i, 'keyword', e.target.value)} className="text-xs border border-gray-300 rounded px-2 py-1 w-full mr-2" />
                <input value={kw.msv}     onChange={e => handleChange(i, 'msv',     e.target.value)} className="text-xs border border-gray-300 rounded px-2 py-1 w-14" />
                <input type="number" value={kw.kd} onChange={e => handleChange(i, 'kd', e.target.value)} className="text-xs border border-gray-300 rounded px-2 py-1 w-12" />
                {(['dec','jan','feb','mar','apr','may','jun','jul','aug','sep'] as const).map(f => (
                  <input key={f} type="number" value={kw[f] ?? ''} onChange={e => handleChange(i, f, e.target.value)} className="text-xs border border-gray-300 rounded px-2 py-1 w-12" />
                ))}
                <SparklineCell kw={kw} />
                <input type="number" value={kw.diff} onChange={e => handleChange(i, 'diff', e.target.value)} className="text-xs border border-gray-300 rounded px-2 py-1 w-12" />
              </div>
            ))
          ) : (
=======
                style={{ gridTemplateColumns: '2fr 0.6fr 0.7fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.65fr' }}
              >
                <input
                  value={kw.keyword}
                  onChange={e => handleChange(i, 'keyword', e.target.value)}
                  className="text-xs border border-gray-300 rounded px-2 py-1 w-full mr-2"
                />
                <input
                  value={kw.msv}
                  onChange={e => handleChange(i, 'msv', e.target.value)}
                  className="text-xs border border-gray-300 rounded px-2 py-1 w-16"
                />
                <input
                  type="number"
                  value={kw.kd}
                  onChange={e => handleChange(i, 'kd', e.target.value)}
                  className="text-xs border border-gray-300 rounded px-2 py-1 w-14"
                />
                {(['dec','jan','feb','mar','apr','may','jun','jul'] as const).map(f => (
                  <input
                    key={f}
                    type="number"
                    value={kw[f] ?? ''}
                    onChange={e => handleChange(i, f, e.target.value)}
                    className="text-xs border border-gray-300 rounded px-2 py-1 w-14"
                  />
                ))}
                <input
                  type="number"
                  value={kw.trend}
                  onChange={e => handleChange(i, 'trend', e.target.value)}
                  className="text-xs border border-gray-300 rounded px-2 py-1 w-14"
                />
              </div>
            ))
          ) : (
            // View mode rows
>>>>>>> origin/main
            keywords.map((kw, i) => {
              const kdStyle = getKdStyle(kw.kd);
              return (
                <div
                  key={i}
                  className={`grid items-center px-4 py-2 border-b border-gray-100 hover:bg-blue-50/30 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}
<<<<<<< HEAD
                  style={{ gridTemplateColumns: COLS }}
=======
                  style={{ gridTemplateColumns: '2fr 0.6fr 0.7fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.65fr' }}
>>>>>>> origin/main
                >
                  <span className="text-xs font-medium text-gray-800 capitalize">{kw.keyword}</span>
                  <span className="text-xs text-gray-600 font-semibold">{kw.msv}</span>
                  <span>
<<<<<<< HEAD
                    <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: kdStyle.bg, color: kdStyle.text }}>
=======
                    <span
                      className="inline-block text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: kdStyle.bg, color: kdStyle.text }}
                    >
>>>>>>> origin/main
                      {kw.kd}
                    </span>
                  </span>
                  <span className="text-xs text-gray-700 font-medium">{kw.dec ?? '—'}</span>
                  <span className="text-xs text-gray-700 font-medium">{kw.jan ?? '—'}</span>
                  <span className="text-xs text-gray-700 font-medium">{kw.feb ?? '—'}</span>
                  <span className="text-xs text-gray-700 font-medium">{kw.mar ?? '—'}</span>
                  <span className="text-xs text-gray-700 font-medium">{kw.apr ?? '—'}</span>
                  <span className="text-xs text-gray-700 font-medium">{kw.may ?? '—'}</span>
                  <span className="text-xs text-gray-700 font-medium">{kw.jun ?? '—'}</span>
<<<<<<< HEAD
                  <span className="text-xs text-gray-700 font-medium">{kw.jul ?? '—'}</span>
                  <span className="text-xs font-bold text-blue-700">{kw.aug ?? '—'}</span>
                  <span className="text-xs font-bold text-orange-600">{kw.sep ?? '—'}</span>
                  <SparklineCell kw={kw} />
                  <DiffCell diff={kw.diff} />
=======
                  <span className="text-xs font-bold text-blue-700">{kw.jul ?? '—'}</span>
                  <TrendCell trend={kw.trend} />
>>>>>>> origin/main
                </div>
              );
            })
          )}
        </div>
      </div>

<<<<<<< HEAD
=======
      {/* KD Legend */}
>>>>>>> origin/main
      <div className="flex items-center gap-6 mt-2.5 mb-3 justify-end">
        {[
          { bg: '#DCFCE7', text: '#15803D', label: 'KD ≤ 25 — Easy win'    },
          { bg: '#FEF9C3', text: '#B45309', label: 'KD 26–45 — Moderate'   },
          { bg: '#FEE2E2', text: '#DC2626', label: 'KD > 45 — Competitive' },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: l.text }} />
            <span className="text-xs text-gray-500">{l.label}</span>
          </div>
        ))}
      </div>

<<<<<<< HEAD
      <div className="mt-1">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Key Insights</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-xl p-4 border" style={{ backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' }}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 flex-shrink-0" style={{ color: '#16A34A' }} />
              <span className="text-xs font-bold text-green-800">Rankings Improved (Aug → Sep)</span>
            </div>
            <p className="text-xs text-green-700 leading-relaxed">
              <strong>{improved.length} keywords</strong> improved their position Aug → Sep, including{' '}
              <strong>remote desktop software (38 → 28)</strong>,{' '}
              <strong>anydesk pricing (4 → 2)</strong>, and{' '}
              <strong>patch management (6 → 4)</strong>.
            </p>
          </div>

=======
      {/* KEY INSIGHTS */}
      <div className="mt-1">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Key Insights</p>
        <div className="grid grid-cols-3 gap-4">
          {/* Card 1 – Rankings Improved */}
          <div className="rounded-xl p-4 border" style={{ backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' }}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 flex-shrink-0" style={{ color: '#16A34A' }} />
              <span className="text-xs font-bold text-green-800">Rankings Improved Dec → Jul</span>
            </div>
            <p className="text-xs text-green-700 leading-relaxed">
              <strong>{improved.length} keywords</strong> improved their ranking position from Dec → Jul, including{' '}
              <strong>patch management (+52)</strong> and{' '}
              <strong>anydesk alternative (+71 positions)</strong>.
            </p>
          </div>

          {/* Card 2 – Easy Win */}
>>>>>>> origin/main
          <div className="rounded-xl p-4 border" style={{ backgroundColor: '#FEFCE8', borderColor: '#FDE68A' }}>
            <div className="flex items-center gap-2 mb-2">
              <Minus className="w-4 h-4 flex-shrink-0" style={{ color: '#B45309' }} />
              <span className="text-xs font-bold text-amber-800">Easy Win Opportunities</span>
            </div>
            <p className="text-xs text-amber-700 leading-relaxed">
<<<<<<< HEAD
              <strong>{easyWin.length} keywords</strong> have KD ≤ 25 (logmein alternative, patch management software, autonomous endpoint management), offering low-competition gains with{' '}
              <strong>~1.7K combined MSV</strong>.
            </p>
          </div>

=======
              <strong>{easyWin.length} keywords</strong> have KD ≤ 25 (logmein alt, patch mgmt sw, autonomous endpoint mgmt), offering low-competition gains with{' '}
              <strong>~2.5K combined MSV</strong>.
            </p>
          </div>

          {/* Card 3 – High Competition */}
>>>>>>> origin/main
          <div className="rounded-xl p-4 border" style={{ backgroundColor: '#FFF7ED', borderColor: '#FDBA74' }}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-4 h-4 flex-shrink-0" style={{ color: '#DC2626' }} />
              <span className="text-xs font-bold text-orange-800">High Competition Keywords</span>
            </div>
            <p className="text-xs text-orange-700 leading-relaxed">
              <strong>{highComp.length} of {keywords.length} tracked keywords</strong> have KD &gt; 45, including{' '}
<<<<<<< HEAD
              <strong>remote desktop (KD 100, 74K MSV)</strong>. These require sustained content authority to improve rankings.
=======
              <strong>remote desktop (KD 100, 74K MSV)</strong>. These require sustained content authority to
              improve rankings.
>>>>>>> origin/main
            </p>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <SlideFooter source="Source: Semrush" />
=======
      <SlideFooter source="Source: GSC" />
>>>>>>> origin/main
    </SlideContainer>
  );
}
