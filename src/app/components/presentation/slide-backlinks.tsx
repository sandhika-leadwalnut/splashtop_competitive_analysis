import { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatNumber } from '@/app/utils/format';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import {
  SlideContainer, SlideHeader, SlideFooter, ChartContainer,
  InsightCard, InsightsSection, CompetitorFilter, EditButton,
  CHART_CONFIG, TimeRangeFilter, TimeRange, getTimeRangeOffset,
} from './design-system';

// ── Remote-access competitive set (matches slides 7–11, 14, 15) ─────────────
const VENDORS = [
  { id: 'splashtop',   name: 'Splashtop',   color: '#3B82F6' },
  { id: 'teamviewer',  name: 'TeamViewer',  color: '#FF7AB6' },
  { id: 'anydesk',     name: 'AnyDesk',     color: '#7ED957' },
  { id: 'beyondtrust', name: 'BeyondTrust', color: '#FFB14A' },
  { id: 'gotomypc',    name: 'GoTo (MyPC)', color: '#EF4444' },
];

// Oct 2025 → Jun 2026
<<<<<<< HEAD
const MONTH_KEYS = ['2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09'];

const formatMonth = (key: string) => {
  const map: Record<string, string> = {
    '2025-07': 'Jul-25', '2025-08': 'Aug-25', '2025-09': 'Sep-25', '2025-10': 'Oct-25', '2025-11': 'Nov-25', '2025-12': 'Dec-25',
    '2026-01': 'Jan-26', '2026-02': 'Feb-26', '2026-03': 'Mar-26', '2026-04': 'Apr-26', '2026-05': 'May-26', '2026-06': 'Jun-26', '2026-07': 'Jul-26', '2026-08': 'Aug-26', '2026-09': 'Sep-26',
=======
const MONTH_KEYS = ['2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07'];

const formatMonth = (key: string) => {
  const map: Record<string, string> = {
    '2025-10': 'Oct-25', '2025-11': 'Nov-25', '2025-12': 'Dec-25',
    '2026-01': 'Jan-26', '2026-02': 'Feb-26', '2026-03': 'Mar-26', '2026-04': 'Apr-26', '2026-05': 'May-26', '2026-06': 'Jun-26', '2026-07': 'Jul-26',
>>>>>>> origin/main
  };
  return map[key] ?? key;
};

// ── Referring Domains ────────────────────────────────────────────────────────
const REFERRING_DOMAINS_INIT: Record<string, number[]> = {
<<<<<<< HEAD
  splashtop:   [ 15640,  15611,  15570,  15946,  16955,  17078,  17107,  17310,  17851,  18038,  18318,  18019,  18139,  18204,  18507],
  teamviewer:  [128586, 127854, 125112, 123670, 122588, 119354, 117016, 116775, 118221, 118292, 118554, 117697, 117832, 117596, 117501],
  anydesk:     [ 41666,  41427,  40716,  40731,  40316,  39093,  38476,  38556,  39014,  38950,  39143,  39019,  39233,  39224,  39553],
  beyondtrust: [ 16407,  15941,  15601,  15880,  16786,  16330,  15835,  15881,  16027,  16062,  16273,  16027,  16017,  16087,  16207],
  gotomypc:    [  4551,   4468,   4468,   4581,   4450,   4501,   4380,   4232,   4205,   4191,   4140,   4059,   3984,   3931,   4007],
=======
  splashtop:   [ 15946,  16955,  17078,  17107,  17310,  17851,  18038,  18318,  18019,  18139],
  teamviewer:  [123670, 122588, 119354, 117016, 116775, 118221, 118292, 118554, 117697, 117832],
  anydesk:     [ 40731,  40316,  39093,  38476,  38556,  39014,  38950,  39143,  39019,  39233],
  beyondtrust: [ 15880,  16786,  16330,  15835,  15881,  16027,  16062,  16273,  16027,  16017],
  gotomypc:    [  4581,   4450,   4501,   4380,   4232,   4205,   4191,   4140,   4059,   3984],
>>>>>>> origin/main
};

// ── Backlinks ────────────────────────────────────────────────────────────────
const BACKLINKS_INIT: Record<string, number[]> = {
<<<<<<< HEAD
  splashtop:   [ 3117486,  2701506,  2250581,  1843951,  1385376,  1173208,  1154055,  1123979,  1018559,   864630,   740907,   728714,   742445,   742328,   977509],
  teamviewer:  [20320154, 19426183, 19045984, 18841453, 18312611, 17975354, 18053149, 17932864, 17781816, 17036080, 16175174, 16001392, 16387588, 16186374, 16147935],
  anydesk:     [ 5999370,  7127092,  8023727,  8985522,  9999336, 10570441, 11060227, 10935451, 10403413,  9713870,  8916321,  7522056,  6343664,  5296566,  4707203],
  beyondtrust: [  240929,   234100,   563934,   792939,   804609,   788689,   786337,   788440,   792394,   396918,   224819,   204985,   217014,   231332,   242699],
  gotomypc:    [   92742,   101744,   101921,    89053,    88209,    85758,    84712,    79873,    76063,    69388,    58120,    39228,    37850,    36230,    36597],
=======
  splashtop:   [ 1843951,  1385376,  1173208,  1154055,  1123979,  1018559,   864630,   740907,   728714,   742445],
  teamviewer:  [18841453, 18312611, 17975354, 18053149, 17932864, 17781816, 17036080, 16175174, 16001392, 16387588],
  anydesk:     [ 8985522,  9999336, 10570441, 11060227, 10935451, 10403413,  9713870,  8916321,  7522056,  6343664],
  beyondtrust: [  792939,   804609,   788689,   786337,   788440,   792394,   396918,   224819,   204985,   217014],
  gotomypc:    [   89053,    88209,    85758,    84712,    79873,    76063,    69388,    58120,    39228,    37850],
>>>>>>> origin/main
};

type TabType = 'referringDomains' | 'backlinks';

const CustomTooltip = ({ active, payload, label, isBacklinks }: any) => {
  if (!active || !payload?.length) return null;
  const valid = payload.filter((e: any) => e.value !== null && e.value !== undefined);
  if (!valid.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
      <p className="text-xs font-semibold text-gray-900 mb-2">{formatMonth(label)}</p>
      {valid.map((entry: any, i: number) => (
        <div key={i} className="flex items-center gap-2 text-xs mb-1">
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: entry.color }} />
          <span className="text-gray-700">{entry.name}:</span>
          <span className="font-semibold text-gray-900">
            {isBacklinks ? formatNumber(entry.value) : entry.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export function SlideBacklinks({ onNavigateHome }: { onNavigateHome?: () => void }) {
  const [activeTab,    setActiveTab]    = useState<TabType>('referringDomains');
  const [timeRange,    setTimeRange]    = useState<TimeRange>('all');
  const [visibleVendors, setVisibleVendors] = useState<Set<string>>(new Set(VENDORS.map(v => v.id)));
  const [isEditing,    setIsEditing]    = useState(false);

  const [editableData, setEditableData] = useState<{
    referringDomains: Record<string, number[]>;
    backlinks:        Record<string, number[]>;
  }>(() => ({
    referringDomains: JSON.parse(JSON.stringify(REFERRING_DOMAINS_INIT)),
    backlinks:        JSON.parse(JSON.stringify(BACKLINKS_INIT)),
  }));

  const handleEdit   = () => setIsEditing(true);
  const handleSave   = () => setIsEditing(false);
  const handleCancel = () => {
    setEditableData({
      referringDomains: JSON.parse(JSON.stringify(REFERRING_DOMAINS_INIT)),
      backlinks:        JSON.parse(JSON.stringify(BACKLINKS_INIT)),
    });
    setIsEditing(false);
  };

  const handleValueChange = (ds: TabType, vendorId: string, idx: number, value: string) => {
    const n = parseFloat(value); if (isNaN(n)) return;
    setEditableData(prev => ({
      ...prev,
      [ds]: { ...prev[ds], [vendorId]: prev[ds][vendorId].map((v, i) => i === idx ? n : v) },
    }));
  };

  const toggleVendor = (id: string) => setVisibleVendors(prev => {
    const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s;
  });

  const tro = getTimeRangeOffset(timeRange);

  const mkData = (ds: Record<string, number[]>) =>
    MONTH_KEYS.slice(tro).map((key, i) => {
      const pt: any = { month: key };
      VENDORS.forEach(v => { if (visibleVendors.has(v.id)) pt[v.id] = ds[v.id]?.[i + tro] ?? null; });
      return pt;
    });

  const rdChartData = mkData(editableData.referringDomains);
  const blChartData = mkData(editableData.backlinks);

  const yMax = (data: any[]) => {
    let max = 0;
    data.forEach(pt => VENDORS.forEach(v => { if (visibleVendors.has(v.id) && pt[v.id] != null) max = Math.max(max, pt[v.id]); }));
    return Math.ceil(max * 1.15);
  };

  const getChartData = () => activeTab === 'referringDomains' ? rdChartData : blChartData;

  const tabs = [
    { id: 'referringDomains' as TabType, label: 'Referring Domains' },
    { id: 'backlinks'        as TabType, label: 'Total Backlinks'   },
  ];

  const getInsights = () => {
    if (activeTab === 'referringDomains') return (
      <InsightsSection>
<<<<<<< HEAD
        <InsightCard icon={TrendingUp}   type="success" title="Splashtop"    content={<>From Jul 2025 to Sep 2026, referring domains grew <strong>15.6K → 18.5K (+18.3%)</strong>, consistent authority growth.</>} />
        <InsightCard icon={TrendingDown} type="error"   title="Competitions" content={<>TeamViewer declined <strong>128.6K → 117.5K (−8.6%)</strong>, while AnyDesk declined <strong>41.7K → 39.6K (−5.1%)</strong>.</>} />
=======
        <InsightCard icon={TrendingUp}   type="success" title="Splashtop"    content={<>From Oct 2025 to Jul 2026, referring domains grew <strong>15.9K → 18.1K (+13.8%)</strong>, consistent authority growth.</>} />
        <InsightCard icon={TrendingDown} type="error"   title="Competitions" content={<>TeamViewer declined <strong>123.7K → 117.8K (−4.8%)</strong>, while AnyDesk slightly declined <strong>40.7K → 39.2K (−3.7%)</strong>.</>} />
>>>>>>> origin/main
      </InsightsSection>
    );
    return (
      <InsightsSection>
<<<<<<< HEAD
        <InsightCard icon={TrendingDown} type="error"   title="Splashtop"    content={<>From Jul 2025 to Sep 2026, backlinks declined <strong>3.12M → 0.98M (−68.6%)</strong>, indicating link profile consolidation.</>} />
        <InsightCard icon={TrendingDown} type="error"   title="Competitions" content={<>TeamViewer declined <strong>20.3M → 16.1M (−20.5%)</strong>, while AnyDesk declined <strong>6.0M → 4.7M (−21.5%)</strong>.</>} />
=======
        <InsightCard icon={TrendingDown} type="error"   title="Splashtop"    content={<>From Oct 2025 to Jul 2026, backlinks declined <strong>1.84M → 0.74M (−59.8%)</strong>, indicating link profile consolidation.</>} />
        <InsightCard icon={TrendingDown} type="error"   title="Competitions" content={<>TeamViewer declined <strong>18.8M → 16.4M (−12.8%)</strong>, while AnyDesk declined <strong>9.0M → 6.3M (−29.9%)</strong>.</>} />
>>>>>>> origin/main
      </InsightsSection>
    );
  };

  const getPerformanceSummary = () => {
<<<<<<< HEAD
    const latestIdx = 14; // Sep 2026
=======
    const latestIdx = 9; // Jul 2026
>>>>>>> origin/main
    const ds = activeTab === 'referringDomains' ? editableData.referringDomains : editableData.backlinks;
    const fmt = (v: number) => formatNumber(v);
    const ordinal = (n: number) => n===2?'2nd':n===3?'3rd':`${n}th`;

    const rankings = VENDORS.map(v => ({ id: v.id, name: v.name, value: ds[v.id]?.[latestIdx] ?? 0 }))
      .sort((a, b) => b.value - a.value);

    const splash = rankings.find(r => r.id === 'splashtop'); if (!splash) return null;
    const pos = rankings.findIndex(r => r.id === 'splashtop') + 1;

    if (pos === 1) {
      const gap = splash.value - rankings[1].value;
      return (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-4 shadow-sm">
          <div className="space-y-1">
            <div className="flex justify-between"><span className="text-sm text-green-900">Top Performer - <span className="font-bold">Splashtop</span></span><span className="text-sm text-green-900 font-semibold">{fmt(splash.value)}</span></div>
            <div className="flex justify-between"><span className="text-sm text-green-800">2nd position - {rankings[1].name}</span><span className="text-sm text-green-800 font-semibold">{fmt(rankings[1].value)}</span></div>
            <div className="flex justify-between"><span className="text-sm text-green-900 font-semibold">Lead:</span><span className="text-sm text-green-900 font-semibold">+{fmt(gap)} ({((gap/splash.value)*100).toFixed(1)}% ahead)</span></div>
          </div>
        </div>
      );
    }
    const first = rankings[0]; const gap = first.value - splash.value;
    return (
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-300 rounded-xl p-4 shadow-sm">
        <div className="space-y-1">
          <div className="flex justify-between"><span className="text-sm text-orange-900">Top Performer - <span className="font-bold">{first.name}</span></span><span className="text-sm text-orange-900 font-semibold">{fmt(first.value)}</span></div>
          <div className="flex justify-between"><span className="text-sm text-orange-800">{ordinal(pos)} position - Splashtop</span><span className="text-sm text-orange-800 font-semibold">{fmt(splash.value)}</span></div>
          <div className="flex justify-between"><span className="text-sm text-orange-900 font-semibold">Gap to #1:</span><span className="text-sm text-orange-900 font-semibold">{fmt(gap)} ({((gap/first.value)*100).toFixed(1)}% behind)</span></div>
        </div>
      </div>
    );
  };

<<<<<<< HEAD
  const editMonths = ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'];
=======
  const editMonths = ['Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul'];
>>>>>>> origin/main

  return (
    <SlideContainer slideNumber={18} onNavigateHome={onNavigateHome}>
      <SlideHeader
        title="Backlink Performance"
<<<<<<< HEAD
        subtitle="(Jul 2025 - Sep 2026) • Location: WW"
=======
        subtitle="(Oct 2025 - Jul 2026) • Location: WW"
>>>>>>> origin/main
      />

      {!isEditing ? (
        <div className="flex-1 flex flex-col gap-6">
          {/* Tabs + TimeRange */}
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
            <TimeRangeFilter value={timeRange} onChange={setTimeRange} />
          </div>

          {/* Content */}
          <div className="flex-1 grid grid-cols-12 gap-6">
            {/* Chart — 8 cols */}
            <div className="col-span-8 flex flex-col gap-4">
              <ChartContainer
                title=""
                actions={<EditButton isEditing={isEditing} onEdit={handleEdit} onSave={handleSave} onCancel={handleCancel} />}
                height={420}
              >
                <div className="h-full flex flex-col">
                  <div className="pb-4 border-b border-gray-200 mb-4">
                    <CompetitorFilter
                      competitors={VENDORS}
                      visibleCompetitors={visibleVendors}
                      onToggle={toggleVendor}
                    />
                  </div>
                  <div className="flex-1">
                    <ResponsiveContainer
                      width="100%"
                      height="100%"
                    >
                      <LineChart key={`${activeTab}-${tro}-${Array.from(visibleVendors).sort().join('-')}`} data={getChartData()} margin={CHART_CONFIG.margin}>
                        <CartesianGrid {...CHART_CONFIG.cartesianGrid} />
                        <XAxis
                          dataKey="month"
                          {...CHART_CONFIG.xAxis}
                          tickFormatter={formatMonth}
                          interval={0}
                        />
                        <YAxis
                          {...CHART_CONFIG.yAxis}
                          domain={activeTab === 'backlinks' ? [0, yMax(blChartData)] : [0, yMax(rdChartData)]}
                          tickFormatter={v => formatNumber(v)}
                        />
                        <Tooltip content={(props: any) => <CustomTooltip {...props} isBacklinks={activeTab === 'backlinks'} />} />
                        {VENDORS.filter(v => visibleVendors.has(v.id)).map(vendor => (
                          <Line
                            key={`${activeTab}-${vendor.id}`}
                            name={vendor.name}
                            type="monotone"
                            dataKey={vendor.id}
                            stroke={vendor.color}
                            {...CHART_CONFIG.line}
                            dot={{ fill: vendor.color, r: 5, strokeWidth: 2, stroke: '#fff' }}
                            activeDot={{ r: 7, strokeWidth: 2 }}
                          />
                        ))}
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </ChartContainer>
            </div>

            {/* Insights — 4 cols */}
            <div className="col-span-4 flex flex-col gap-4">
              {getInsights()}
              {getPerformanceSummary()}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Edit Backlink Data (Oct 2025 – May 2026)</h3>
            <div className="space-y-6">
              {VENDORS.map(vendor => (
                <div key={vendor.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: vendor.color }} />
                    <h4 className="text-sm font-bold text-gray-900">{vendor.name}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {(['referringDomains', 'backlinks'] as TabType[]).map(ds => (
                      <div key={ds}>
                        <div className="text-xs font-semibold text-gray-700 mb-2">
                          {ds === 'referringDomains' ? 'Referring Domains' : 'Backlinks'}:
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

      <SlideFooter source="Source: Semrush" />
    </SlideContainer>
  );
}