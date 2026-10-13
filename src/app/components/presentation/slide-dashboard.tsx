import { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatChartAxisNumber } from '@/app/utils/format';
import {
  SlideContainer, SlideHeader, SlideFooter, ChartContainer,
  InsightCard, InsightsSection, EditButton, CompetitorFilter,
  CustomChartTooltip, CHART_CONFIG, TimeRangeFilter, TimeRange, getTimeRangeOffset,
} from './design-system';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const REMOTE_VENDORS = [
  { id: 'splashtop',   name: 'Splashtop',   color: '#3B82F6' },
  { id: 'teamviewer',  name: 'TeamViewer',  color: '#FF7AB6' },
  { id: 'anydesk',     name: 'AnyDesk',     color: '#7ED957' },
  { id: 'beyondtrust', name: 'BeyondTrust', color: '#FFB14A' },
  { id: 'gotomypc',    name: 'GoTo (MyPC)', color: '#EF4444' },
];

<<<<<<< HEAD
const MONTHS = ['2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09'];
=======
const MONTHS = ['2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07'];
>>>>>>> origin/main

const formatMonth = (m: string) => {
  const [y, mo] = m.split('-');
  return `${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][+mo-1]}-${y.slice(2)}`;
};

// Remote Connection — Oct 2025 → Jun 2026
const TOTAL_KEYWORDS_INIT = {
<<<<<<< HEAD
  splashtop:   [47, 44, 17, 10, 10, 11, 11, 11, 13,  9, 11, 11,  9,  9,  6],
  teamviewer:  [43, 42, 30, 22, 22, 22, 21, 20, 20, 19, 21, 19, 19, 19, 18],
  anydesk:     [42, 42, 24, 20, 19, 17, 19, 17, 15, 17, 12, 10, 12, 13, 13],
  beyondtrust: [15,  7,  3,  4,  2,  3,  5,  5,  5,  5,  4,  1,  2,  1,  1],
  gotomypc:    [30, 32, 14, 13, 13, 10, 13, 12, 12,  1,  3,  5,  3,  3,  2],
};
const PAGE_ONE_INIT = {
  splashtop:   [ 6,  6,  9,  7,  7,  8,  8,  9, 11,  8, 10, 10,  9,  8,  5],
  teamviewer:  [22, 22, 22, 21, 21, 21, 21, 20, 20, 19, 20, 19, 19, 19, 18],
  anydesk:     [18, 18, 19, 18, 16, 16, 18, 16, 14, 16, 12, 10, 12, 13, 13],
  beyondtrust: [ 0,  0,  1,  2,  1,  2,  4,  4,  5,  5,  3,  1,  2,  1,  1],
  gotomypc:    [10, 10, 11,  8, 13,  9,  8,  6,  7,  0,  1,  3,  3,  3,  2],
};
const TRAFFIC_INIT = {
  splashtop:   [ 54,  37,  50,  26,  36,  60,  49,  63, 111,  51,  55,  60,  46,  54,  12],
  teamviewer:  [134, 187, 130, 139, 275, 270, 200, 228, 325, 318, 290, 321, 311, 319, 249],
  anydesk:     [ 83, 110, 109, 127,  87, 187, 142, 261, 568, 201, 261, 493, 544, 602, 383],
  beyondtrust: [  0,   1,   1,   1,   1,   3,   7,   7,  10,  16,  11,   3,   8,   6,   7],
  gotomypc:    [ 19,  17,  26,  18,  46,  37,  53,  42,  18,   5,  10,  26,   8,  19,   8],
=======
  splashtop:   [10, 10, 11, 11, 11, 13,  9, 11, 11,  9],
  teamviewer:  [22, 22, 22, 21, 20, 20, 19, 21, 19, 19],
  anydesk:     [20, 19, 17, 19, 17, 15, 17, 12, 10, 12],
  beyondtrust: [ 4,  2,  3,  5,  5,  5,  5,  4, 1,  2],
  gotomypc:    [13, 13, 10, 13, 12, 12,  1,  3, 5,  3],
};
const PAGE_ONE_INIT = {
  splashtop:   [ 7,  7,  8,  8,  9, 11,  8, 10, 10,  9],
  teamviewer:  [21, 21, 21, 21, 20, 20, 19, 20, 19, 19],
  anydesk:     [18, 16, 16, 18, 16, 14, 16, 12, 10, 12],
  beyondtrust: [ 2,  1,  2,  4,  4,  5,  5,  3, 1,  2],
  gotomypc:    [ 8, 13,  9,  8,  6,  7,  0,  1, 3,  3],
};
const TRAFFIC_INIT = {
  splashtop:   [ 26,  36,  60,  49,  63, 111,  51,  55, 60,  46],
  teamviewer:  [139, 275, 270, 200, 228, 325, 318, 290, 321, 311],
  anydesk:     [127,  87, 187, 142, 261, 568, 201, 261, 493, 544],
  beyondtrust: [  1,   1,   3,   7,   7,  10,  16,  11, 3,   8],
  gotomypc:    [ 18,  46,  37,  53,  42,  18,   5,  10, 26,   8],
>>>>>>> origin/main
};

type TabType = 'keywords' | 'page-one' | 'traffic';

interface Props { onNavigateHome?: () => void; }

export function SlideDashboard({ onNavigateHome }: Props) {
  const [activeTab, setActiveTab] = useState<TabType>('keywords');
  const [timeRange, setTimeRange] = useState<TimeRange>('all');
  const [visible, setVisible] = useState<Set<string>>(new Set(REMOTE_VENDORS.map(v => v.id)));
  const [editableData, setEditableData] = useState(() => ({
    keywords: JSON.parse(JSON.stringify(TOTAL_KEYWORDS_INIT)) as Record<string,number[]>,
    pageOne:  JSON.parse(JSON.stringify(PAGE_ONE_INIT))       as Record<string,number[]>,
    traffic:  JSON.parse(JSON.stringify(TRAFFIC_INIT))        as Record<string,number[]>,
  }));
  const [isEditing, setIsEditing] = useState(false);

  const toggle = (id: string) => setVisible(prev => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });
  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);
  const handleCancel = () => {
    setEditableData({
      keywords: JSON.parse(JSON.stringify(TOTAL_KEYWORDS_INIT)),
      pageOne:  JSON.parse(JSON.stringify(PAGE_ONE_INIT)),
      traffic:  JSON.parse(JSON.stringify(TRAFFIC_INIT)),
    });
    setIsEditing(false);
  };
  const handleValueChange = (ds: 'keywords'|'pageOne'|'traffic', id: string, idx: number, val: string) => {
    const n = parseFloat(val); if (isNaN(n)) return;
    setEditableData(prev => ({ ...prev, [ds]: { ...prev[ds], [id]: prev[ds][id].map((v,i) => i===idx ? n : v) } }));
  };

  const tro = getTimeRangeOffset(timeRange);
  const mkData = (ds: Record<string,number[]>) => MONTHS.slice(tro).map((month, i) => {
    const pt: any = { month };
    REMOTE_VENDORS.forEach(v => { if (visible.has(v.id)) pt[v.id] = ds[v.id][i+tro] ?? null; });
    return pt;
  });

  const kwData = mkData(editableData.keywords);
  const p1Data = mkData(editableData.pageOne);
  const trData = mkData(editableData.traffic);

  const trafficYMax = (() => {
    let max = 0;
    trData.forEach(pt => REMOTE_VENDORS.forEach(v => { if (visible.has(v.id) && pt[v.id] != null) max = Math.max(max, pt[v.id]); }));
    return Math.ceil(max * 1.15);
  })();

  const getChartData = () => activeTab === 'keywords' ? kwData : activeTab === 'page-one' ? p1Data : trData;
<<<<<<< HEAD
  const latestIdx = 14; // Sep 2026
=======
  const latestIdx = 9; // Jul 2026
>>>>>>> origin/main

  const getInsights = () => {
    if (activeTab === 'keywords') return (
      <InsightsSection>
<<<<<<< HEAD
        <InsightCard icon={TrendingDown} type="error" title="Splashtop" content={<>From Jul 2025 to Sep 2026, keywords declined <strong>47 → 6 (−87.2%)</strong>, while TeamViewer leads at <strong>18</strong>.</>} />
        <InsightCard icon={TrendingDown} type="error" title="Competitions" content={<>TeamViewer declined <strong>43 → 18 (−58.1%)</strong>, while AnyDesk declined <strong>42 → 13 (−69.0%)</strong> in Sep 2026.</>} />
=======
        <InsightCard icon={TrendingDown} type="error" title="Splashtop" content={<>From Oct 2025 to Jul 2026, keywords declined <strong>10 → 9 (−10%)</strong>, while TeamViewer leads at <strong>19</strong>.</>} />
        <InsightCard icon={TrendingDown} type="error" title="Competitions" content={<>TeamViewer declined <strong>22 → 19 (−13.6%)</strong>, while AnyDesk declined <strong>20 → 12 (−40%)</strong> in Jul 2026.</>} />
>>>>>>> origin/main
      </InsightsSection>
    );
    if (activeTab === 'page-one') return (
      <InsightsSection>
<<<<<<< HEAD
        <InsightCard icon={TrendingDown} type="error" title="Splashtop" content={<>From Jul 2025 to Sep 2026, page-1 keywords declined <strong>6 → 5 (−16.7%)</strong>, top-SERP regression.</>} />
        <InsightCard icon={TrendingDown} type="error" title="Competitions" content={<>TeamViewer declined <strong>22 → 18 (−18.2%)</strong>, while AnyDesk declined <strong>18 → 13 (−27.8%)</strong> in Sep 2026.</>} />
=======
        <InsightCard icon={TrendingUp} type="success" title="Splashtop" content={<>From Oct 2025 to Jul 2026, page-1 keywords grew <strong>7 → 9 (+28.6%)</strong>, top-SERP improvement.</>} />
        <InsightCard icon={TrendingDown} type="error" title="Competitions" content={<>TeamViewer declined <strong>21 → 19 (−9.5%)</strong>, while AnyDesk declined <strong>18 → 12 (−33.3%)</strong> in Jul 2026.</>} />
>>>>>>> origin/main
      </InsightsSection>
    );
    return (
      <InsightsSection>
<<<<<<< HEAD
        <InsightCard icon={TrendingDown} type="error" title="Splashtop" content={<>From Jul 2025 to Sep 2026, traffic declined <strong>54 → 12 (−77.8%)</strong>, with a Mar peak of <strong>111</strong>.</>} />
        <InsightCard icon={TrendingUp} type="success" title="Competitions" content={<>TeamViewer grew <strong>134 → 249 (+85.8%)</strong>, while AnyDesk declined <strong>83 → 383 (+361.4%)</strong> in Sep 2026.</>} />
=======
        <InsightCard icon={TrendingUp} type="success" title="Splashtop" content={<>From Oct 2025 to Jul 2026, traffic grew <strong>26 → 46 (+76.9%)</strong>, showing strong percentage gain.</>} />
        <InsightCard icon={TrendingUp} type="success" title="Competitions" content={<>TeamViewer grew <strong>139 → 311 (+123.7%)</strong>, while AnyDesk surged <strong>127 → 544 (+328.3%)</strong> in Jul 2026.</>} />
>>>>>>> origin/main
      </InsightsSection>
    );
  };

  const getPerformanceSummary = () => {
    const ds = activeTab === 'keywords' ? editableData.keywords : activeTab === 'page-one' ? editableData.pageOne : editableData.traffic;
    const fmt = (v: number) => activeTab === 'traffic' ? `${(v/1000).toFixed(1)}K` : v.toLocaleString();
    const ordinal = (n: number) => n===2?'2nd':n===3?'3rd':`${n}th`;
    const rankings = REMOTE_VENDORS.map(v => ({ id:v.id, name:v.name, value: ds[v.id]?.[latestIdx] ?? 0 })).sort((a,b) => b.value-a.value);
    const splash = rankings.find(r => r.id==='splashtop'); if (!splash) return null;
    const pos = rankings.findIndex(r => r.id==='splashtop') + 1;
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

  const renderChart = () => {
    const data = getChartData();
    const vis = REMOTE_VENDORS.filter(v => visible.has(v.id));
    if (activeTab === 'traffic') return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart key={`traffic-${tro}-${[...visible].sort().join('-')}`} data={data} margin={CHART_CONFIG.margin}>
          <CartesianGrid {...CHART_CONFIG.cartesianGrid} />
          <XAxis dataKey="month" {...CHART_CONFIG.xAxis} tickFormatter={formatMonth} />
          <YAxis domain={[0, trafficYMax]} {...CHART_CONFIG.yAxis} tickFormatter={formatChartAxisNumber} />
          <Tooltip content={(props) => <CustomChartTooltip {...props} monthFormatter={formatMonth} />} />
          {vis.map(v => <Line key={`traffic-${v.id}`} name={v.name} type="monotone" dataKey={v.id} stroke={v.color} {...CHART_CONFIG.line} dot={{ fill:v.color, r:5, strokeWidth:2, stroke:'#fff' }} activeDot={{ r:7, strokeWidth:2 }} />)}
        </LineChart>
      </ResponsiveContainer>
    );
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart key={`${activeTab}-${tro}-${[...visible].sort().join('-')}`} data={data} margin={CHART_CONFIG.margin}>
          <CartesianGrid {...CHART_CONFIG.cartesianGrid} />
          <XAxis dataKey="month" {...CHART_CONFIG.xAxis} tickFormatter={formatMonth} />
          <YAxis {...CHART_CONFIG.yAxis} />
          <Tooltip content={(props) => <CustomChartTooltip {...props} monthFormatter={formatMonth} />} />
          {vis.map(v => <Line key={`${activeTab}-${v.id}`} name={v.name} type="monotone" dataKey={v.id} stroke={v.color} {...CHART_CONFIG.line} dot={{ fill: v.color, r:5, strokeWidth:2, stroke:'#fff' }} activeDot={{ r:7, strokeWidth:2 }} />)}
        </LineChart>
      </ResponsiveContainer>
    );
  };

  const tabs = [
    { id: 'keywords' as TabType, label: 'Total Keywords' },
    { id: 'page-one' as TabType, label: 'Page 1 Keywords' },
    { id: 'traffic'  as TabType, label: 'Cumulative Traffic' },
  ];

<<<<<<< HEAD
  const editMonths = ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'];

  return (
    <SlideContainer slideNumber={11} onNavigateHome={onNavigateHome} source="Ahrefs">
      <SlideHeader title="Remote Connection" subtitle="(Jul 2025 - Sep 2026)" />
=======
  const editMonths = ['Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul'];

  return (
    <SlideContainer slideNumber={11} onNavigateHome={onNavigateHome} source="Ahrefs">
      <SlideHeader title="Remote Connection" subtitle="(Oct 2025 - Jul 2026)" />
>>>>>>> origin/main
      {!isEditing ? (
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-1">
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 text-sm font-semibold transition-all duration-200 relative ${activeTab===tab.id ? 'bg-white text-red-600 z-10' : 'bg-gradient-to-b from-gray-100 to-gray-200 text-gray-600 hover:from-gray-200 hover:to-gray-300 hover:text-gray-800'}`}
                  style={{ borderRadius:'12px 12px 0 0', marginBottom:'-2px', boxShadow: activeTab===tab.id ? '0 -2px 8px rgba(0,0,0,0.08), 0 2px 0 0 white' : '0 1px 3px rgba(0,0,0,0.1)' }}>
                  {tab.label}
                </button>
              ))}
            </div>
            <TimeRangeFilter value={timeRange} onChange={setTimeRange} />
          </div>
          <div className="flex-1 grid grid-cols-12 gap-6">
            <div className="col-span-8 flex flex-col gap-4">
              <ChartContainer title="" actions={<EditButton isEditing={isEditing} onEdit={handleEdit} onSave={handleSave} onCancel={handleCancel} />} height={420}>
                <div className="h-full flex flex-col">
                  <div className="pb-4 border-b border-gray-200 mb-4"><CompetitorFilter competitors={REMOTE_VENDORS} visibleCompetitors={visible} onToggle={toggle} /></div>
                  <div className="flex-1">{renderChart()}</div>
                </div>
              </ChartContainer>
            </div>
            <div className="col-span-4 flex flex-col gap-4">{getInsights()}{getPerformanceSummary()}</div>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
<<<<<<< HEAD
            <h3 className="text-sm font-bold text-gray-900 mb-4">Edit Remote Connection Data (Oct 2025 – Aug 2026)</h3>
=======
            <h3 className="text-sm font-bold text-gray-900 mb-4">Edit Remote Connection Data (Oct 2025 – Jul 2026)</h3>
>>>>>>> origin/main
            <div className="space-y-6">
              {REMOTE_VENDORS.map(v => (
                <div key={v.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: v.color }} /><h4 className="text-sm font-bold text-gray-900">{v.name}</h4></div>
                  <div className="grid grid-cols-3 gap-4">
                    {(['keywords','pageOne','traffic'] as const).map(ds => (
                      <div key={ds}>
                        <div className="text-xs font-semibold text-gray-700 mb-2">{ds==='keywords'?'Total Keywords':ds==='pageOne'?'Page 1 KWs':'Traffic'}:</div>
                        {editMonths.map((mo, idx) => (
                          <div key={mo} className="mb-2">
                            <label className="text-xs text-gray-600 block mb-1">{mo}:</label>
                            <input type="number" value={editableData[ds][v.id][idx]} onChange={e => handleValueChange(ds, v.id, idx, e.target.value)} className="text-xs border border-gray-300 rounded px-2 py-1 w-full" />
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
      <SlideFooter source="Source: Ahrefs" />
    </SlideContainer>
  );
}
