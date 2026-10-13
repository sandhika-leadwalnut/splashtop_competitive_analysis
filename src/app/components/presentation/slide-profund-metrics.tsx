import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import {
  SlideContainer,
  SlideHeader,
  SlideFooter,
  ChartContainer,
  InsightCard,
  InsightsSection,
  EditButton,
  CompetitorFilter,
  CHART_CONFIG,
} from './design-system';

// Remote-access competitive set — matches slides 7–11
const VENDORS = [
  { id: 'splashtop',   name: 'Splashtop',   color: '#3B82F6' },
  { id: 'teamviewer',  name: 'TeamViewer',  color: '#FF7AB6' },
  { id: 'anydesk',     name: 'AnyDesk',     color: '#7ED957' },
  { id: 'beyondtrust', name: 'BeyondTrust', color: '#FFB14A' },
  { id: 'gotomypc',    name: 'GoTo (MyPC)', color: '#EF4444' },
];

// Oct 2025 → Jun 2026 (9 months)
const MONTHS_DISPLAY = ['Jul-25', 'Aug-25', 'Sep-25', 'Oct-25', 'Nov-25', 'Dec-25', 'Jan-26', 'Feb-26', 'Mar-26', 'Apr-26', 'May-26', 'Jun-26', 'Jul-26', 'Aug-26', 'Sep-26'];
const MONTH_KEYS     = ['2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09'];

const formatMonth = (key: string) => {
  const map: Record<string,string> = {
    '2025-07':'Jul-25','2025-08':'Aug-25','2025-09':'Sep-25','2025-10':'Oct-25','2025-11':'Nov-25','2025-12':'Dec-25',
    '2026-01':'Jan-26','2026-02':'Feb-26','2026-03':'Mar-26','2026-04':'Apr-26','2026-05':'May-26','2026-06':'Jun-26','2026-07':'Jul-26','2026-08':'Aug-26','2026-09':'Sep-26',
  };
  return map[key] ?? key;
};

// ── AI Keywords (total AI keyword count) ─────────────────────────────────────
const AI_KEYWORDS_INIT = {
  splashtop:   [1320, 1209, 1140, 1117, 1193, 1483, 1764, 1972, 2403, 2409, 2076, 2468, 2837, 2753, 3053],
  teamviewer:  [1667, 1493, 1504, 1480, 1490, 1580, 1787, 1880, 2715, 3383, 3590, 4635, 6465, 7328, 7602],
  anydesk:     [ 500,  433,  409,  422,  370,  403,  519,  559,  725,  958,  937,  900, 1189, 1454, 1708],
  beyondtrust: [ 544,  525,  510,  515,  516,  603,  744,  747,  901, 1236, 1342, 1301, 1301, 1340, 1528],
  gotomypc:    [  89,   53,   40,   36,   38,   39,   36,   27,   35,   44,   25,   39,   73,  119,  167],
};

// ── Branded AI keywords ───────────────────────────────────────────────────────
const BRANDED_INIT = {
  splashtop:   [  75,  119,   99,   85,  101,  109,  142,  149,  196,  253,  268,  315,  492,  674,  869],
  teamviewer:  [ 700,  699,  716,  685,  678,  615,  733,  694,  730,  981, 1160, 1139, 1453, 1736, 2392],
  anydesk:     [ 243,  228,  232,  227,  208,  194,  231,  241,  244,  318,  319,  378,  604,  812, 1060],
  beyondtrust: [  86,   89,   96,  108,   89,   89,  123,  114,  154,  201,  196,  228,  246,  273,  392],
  gotomypc:    [   3,   14,   14,    8,    7,    6,   14,   10,    6,    8,    6,    8,   24,   60,  103],
};

// ── Non-Branded AI keywords ───────────────────────────────────────────────────
const NON_BRANDED_INIT = {
  splashtop:   [1245, 1090, 1041, 1032, 1092, 1374, 1622, 1823, 2207, 2156, 1808, 2153, 2345, 2079, 2184],
  teamviewer:  [ 967,  794,  788,  795,  812,  965, 1054, 1186, 1985, 2402, 2430, 3496, 5012, 5592, 5210],
  anydesk:     [ 257,  205,  177,  195,  162,  209,  288,  318,  481,  640,  618,  522,  585,  642,  648],
  beyondtrust: [ 458,  436,  414,  407,  427,  514,  621,  633,  747, 1035, 1146, 1073, 1055, 1067, 1136],
  gotomypc:    [  86,   39,   26,   28,   31,   33,   22,   17,   29,   36,   19,   31,   49,   59,   64],
};

type TabType = 'aiKeywords' | 'branded' | 'nonBranded';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) return null;
  const valid = payload.filter((e: any) => e.value !== null && e.value !== undefined);
  if (!valid.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
      <p className="text-xs font-semibold text-gray-900 mb-2">{formatMonth(label)}</p>
      {valid.map((entry: any, i: number) => (
        <div key={i} className="flex items-center gap-2 text-xs mb-1">
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: entry.color }} />
          <span className="text-gray-700">{entry.name}:</span>
          <span className="font-semibold text-gray-900">{entry.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

export function SlideProfundMetrics({ onNavigateHome }: { onNavigateHome?: () => void }) {
  const [activeTab, setActiveTab] = useState<TabType>('aiKeywords');
  const [visibleVendors, setVisibleVendors] = useState<Set<string>>(new Set(VENDORS.map(v => v.id)));
  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState({
    aiKeywords:  { ...AI_KEYWORDS_INIT  } as Record<string,number[]>,
    branded:     { ...BRANDED_INIT      } as Record<string,number[]>,
    nonBranded:  { ...NON_BRANDED_INIT  } as Record<string,number[]>,
  });

  const toggleVendor = (id: string) => setVisibleVendors(prev => {
    const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s;
  });

  const handleEdit   = () => setIsEditing(true);
  const handleSave   = () => setIsEditing(false);
  const handleCancel = () => {
    setEditableData({
      aiKeywords: { ...AI_KEYWORDS_INIT  },
      branded:    { ...BRANDED_INIT      },
      nonBranded: { ...NON_BRANDED_INIT  },
    });
    setIsEditing(false);
  };

  const handleValueChange = (metric: 'aiKeywords'|'branded'|'nonBranded', vendorId: string, monthIdx: number, value: string) => {
    const n = parseFloat(value) || 0;
    setEditableData(prev => ({
      ...prev,
      [metric]: {
        ...prev[metric],
        [vendorId]: prev[metric][vendorId].map((v, i) => i === monthIdx ? n : v),
      },
    }));
  };

  const mkChartData = (ds: Record<string,number[]>) =>
    MONTH_KEYS.map((key, idx) => {
      const pt: any = { month: key };
      VENDORS.forEach(v => { if (visibleVendors.has(v.id)) pt[v.id] = ds[v.id][idx]; });
      return pt;
    });

  const getChartData = () => {
    switch (activeTab) {
      case 'aiKeywords':  return mkChartData(editableData.aiKeywords);
      case 'branded':     return mkChartData(editableData.branded);
      case 'nonBranded':  return mkChartData(editableData.nonBranded);
    }
  };

  const latestIdx = 14; // Sep 2026

  const getInsights = () => {
    if (activeTab === 'aiKeywords') return (
      <InsightsSection>
        <InsightCard icon={TrendingUp} type="success" title="Splashtop"    content={<>From Jul 2025 to Sep 2026, AI keywords grew <strong>1,320 → 3,053 (+131.3%)</strong>, strong expansion in AI visibility.</>} />
        <InsightCard icon={TrendingUp} type="success" title="Competitions" content={<>TeamViewer grew <strong>1,667 → 7,602 (+355.9%)</strong>, while AnyDesk increased <strong>500 → 1,708 (+241.6%)</strong>.</>} />
      </InsightsSection>
    );
    if (activeTab === 'branded') return (
      <InsightsSection>
        <InsightCard icon={TrendingUp} type="success" title="Splashtop"    content={<>From Jul 2025 to Sep 2026, branded AI keywords grew <strong>75 → 869 (+1,058.7%)</strong>, strongest branded growth in the set.</>} />
        <InsightCard icon={TrendingUp} type="success" title="Competitions" content={<>TeamViewer leads branded at <strong>700 → 2,392 (+241.7%)</strong>, while AnyDesk grew <strong>243 → 1,060 (+336.2%)</strong>.</>} />
      </InsightsSection>
    );
    return (
      <InsightsSection>
        <InsightCard icon={TrendingUp} type="success" title="Splashtop"    content={<>From Jul 2025 to Sep 2026, non-branded AI keywords grew <strong>1,245 → 2,184 (+75.4%)</strong>, discovery-led growth.</>} />
        <InsightCard icon={TrendingUp} type="success" title="Competitions" content={<>TeamViewer grew <strong>967 → 5,210 (+438.8%)</strong>, while BeyondTrust grew <strong>458 → 1,136 (+148.0%)</strong>.</>} />
      </InsightsSection>
    );
  };

  const tabs = [
    { id: 'aiKeywords' as TabType, label: 'AI Keywords' },
    { id: 'branded'    as TabType, label: 'Branded'     },
    { id: 'nonBranded' as TabType, label: 'Non Branded' },
  ];

  const editMonths = ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'];

  return (
    <SlideContainer slideNumber={14} onNavigateHome={onNavigateHome} source="SEMrush">
      <SlideHeader title="AI Overview Keywords" subtitle="(Jul 2025 - Sep 2026)" />

      {!isEditing ? (
        <div className="flex-1 flex flex-col gap-6">
          {/* Tabs */}
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 text-sm font-semibold transition-all duration-200 relative ${
                    activeTab === tab.id
                      ? 'bg-white text-red-600 z-10'
                      : 'bg-gradient-to-b from-gray-100 to-gray-200 text-gray-600 hover:from-gray-200 hover:to-gray-300 hover:text-gray-800'
                  }`}
                  style={{
                    borderRadius: '12px 12px 0 0',
                    marginBottom: '-2px',
                    boxShadow: activeTab === tab.id
                      ? '0 -2px 8px rgba(0,0,0,0.08), 0 2px 0 0 white'
                      : '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <EditButton isEditing={isEditing} onEdit={handleEdit} onSave={handleSave} onCancel={handleCancel} />
          </div>

          {/* Content Area */}
          <div className="flex-1 grid grid-cols-12 gap-6">
            {/* Chart Section */}
            <div className="col-span-8 flex flex-col gap-4">
              <ChartContainer title="" height={420}>
                <div className="h-full flex flex-col">
                  <div className="pb-4 border-b border-gray-200 mb-4">
                    <CompetitorFilter competitors={VENDORS} visibleCompetitors={visibleVendors} onToggle={toggleVendor} />
                  </div>
                  <div className="flex-1">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        key={`${activeTab}-${[...visibleVendors].sort().join('-')}`}
                        data={getChartData()}
                        margin={CHART_CONFIG.margin}
                      >
                        <CartesianGrid {...CHART_CONFIG.cartesianGrid} />
                        <XAxis dataKey="month" {...CHART_CONFIG.xAxis} tickFormatter={formatMonth} />
                        <YAxis {...CHART_CONFIG.yAxis} />
                        <Tooltip content={<CustomTooltip />} />
                        {VENDORS.filter(v => visibleVendors.has(v.id)).map(v => (
                          <Line
                            key={`${activeTab}-${v.id}`}
                            name={v.name}
                            type="monotone"
                            dataKey={v.id}
                            stroke={v.color}
                            {...CHART_CONFIG.line}
                            dot={{ fill: v.color, r: 5, strokeWidth: 2, stroke: '#fff' }}
                            activeDot={{ r: 7, strokeWidth: 2 }}
                          />
                        ))}
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </ChartContainer>
            </div>

            {/* Insights Section */}
            <div className="col-span-4 flex flex-col gap-4">
              {getInsights()}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Edit AI Overview Keywords Data (Oct 2025 – May 2026)</h3>
            <div className="space-y-6">
              {VENDORS.map(vendor => (
                <div key={vendor.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: vendor.color }} />
                    <h4 className="text-sm font-bold text-gray-900">{vendor.name}</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {(['aiKeywords','branded','nonBranded'] as const).map(ds => (
                      <div key={ds}>
                        <div className="text-xs font-semibold text-gray-700 mb-2">
                          {ds==='aiKeywords'?'AI Keywords': ds==='branded'?'Branded':'Non Branded'}:
                        </div>
                        {editMonths.map((mo, idx) => (
                          <div key={mo} className="mb-2">
                            <label className="text-xs text-gray-600 block mb-1">{mo}:</label>
                            <input
                              type="number"
                              value={editableData[ds][vendor.id][idx]}
                              onChange={e => handleValueChange(ds, vendor.id, idx, e.target.value)}
                              className="text-xs border border-gray-300 rounded px-2 py-1 w-full"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <SlideFooter source="Source: Profound" />
    </SlideContainer>
  );
}