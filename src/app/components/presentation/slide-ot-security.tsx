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

// Remote Support — Oct 2025 → Jun 2026
const TOTAL_KEYWORDS_INIT = {
<<<<<<< HEAD
  splashtop:   [145, 139,  95,  80,  78,  78,  86,  81,  81,  65,  71,  80,  73,  70,  61],
  teamviewer:  [142, 141, 108,  93,  91,  86,  84,  83,  78,  78,  75,  74,  71,  70,  74],
  anydesk:     [136, 130,  96,  83,  79,  81,  83,  77,  66,  62,  63,  49,  49,  51,  51],
  beyondtrust: [156, 138,  91, 104, 100,  73,  74,  73,  73,  64,  71,  58,  51,  67,  53],
  gotomypc:    [ 79,  70,  25,  21,  14,  19,  19,  14,   6,   1,   1,   2,   0,   0,   0],
};
const PAGE_ONE_INIT = {
  splashtop:   [58, 61, 61, 64, 74, 72, 80, 74, 78, 62, 69, 74, 73, 68, 60],
  teamviewer:  [77, 74, 81, 83, 85, 78, 74, 72, 73, 76, 71, 72, 70, 69, 73],
  anydesk:     [68, 75, 72, 75, 75, 75, 78, 71, 60, 61, 61, 46, 47, 51, 50],
  beyondtrust: [88, 67, 64, 84, 90, 64, 66, 61, 65, 61, 68, 57, 49, 65, 52],
  gotomypc:    [ 3,  3,  4,  5,  5,  8,  7,  6,  2,  0,  1,  1,  0,  0,  0],
};
const TRAFFIC_INIT = {
  splashtop:   [ 387,  327,  434,  506,  655,  561,  880,  816,  690,  724,  882,  666,  803, 1061,  573],
  teamviewer:  [ 901,  784, 1157, 1206, 1030, 1037, 1369, 1752, 1651, 1427, 1360, 1409, 1405, 1313, 1112],
  anydesk:     [1432, 1000, 1451, 1406, 1311, 1525, 1543, 1682, 1255, 2011, 1891, 1131, 1511, 1757, 1398],
  beyondtrust: [2655,  447,  554, 2416, 2492,  502,  604,  871,  889,  697,  787,  818,  565, 1176, 2405],
  gotomypc:    [  34,   11,    7,   43,   23,   37,   36,   21,    4,    0,    1,    2,    0,    0,    0],
=======
  splashtop:   [ 80,  78,  78,  86,  81,  81,  65,  71, 80, 73],
  teamviewer:  [ 93,  91,  86,  84,  83,  78,  78,  75, 74, 71],
  anydesk:     [ 83,  79,  81,  83,  77,  66,  62,  63, 49, 49],
  beyondtrust: [104, 100,  73,  74,  73,  73,  64,  71, 58, 51],
  gotomypc:    [ 21,  14,  19,  19,  14,   6,   1,   1, 2,  0],
};
const PAGE_ONE_INIT = {
  splashtop:   [64, 74, 72, 80, 74, 78, 62, 69, 74, 73],
  teamviewer:  [83, 85, 78, 74, 72, 73, 76, 71, 72, 70],
  anydesk:     [75, 75, 75, 78, 71, 60, 61, 61, 46, 47],
  beyondtrust: [84, 90, 64, 66, 61, 65, 61, 68, 57, 49],
  gotomypc:    [ 5,  5,  8,  7,  6,  2,  0,  1, 1,  0],
};
const TRAFFIC_INIT = {
  splashtop:   [ 506,  655,  561,  880,  816,  690,  724,  882, 666, 803],
  teamviewer:  [1206, 1030, 1037, 1369, 1752, 1651, 1427, 1360, 1409, 1405],
  anydesk:     [1406, 1311, 1525, 1543, 1682, 1255, 2011, 1891, 1131, 1511],
  beyondtrust: [2416, 2492,  502,  604,  871,  889,  697,  787, 818, 565],
  gotomypc:    [  43,   23,   37,   36,   21,    4,    0,    1, 2,   0],
>>>>>>> origin/main
};

type TabType = 'keywords' | 'page-one' | 'traffic';

interface Props { onNavigateHome?: () => void; }

export function SlideOTSecurity({ onNavigateHome }: Props) {
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
        <InsightCard icon={TrendingDown} type="error" title="Splashtop" content={<>From Jul 2025 to Sep 2026, keywords declined <strong>145 → 61 (−57.9%)</strong>, continued category coverage drop.</>} />
        <InsightCard icon={TrendingDown} type="error" title="Competitions" content={<>TeamViewer declined <strong>142 → 70 (−50.7%)</strong>, while AnyDesk dropped <strong>136 → 51 (−62.5%)</strong> in Aug 2026.</>} />
=======
        <InsightCard icon={TrendingDown} type="error" title="Splashtop" content={<>From Oct 2025 to Jul 2026, keywords declined <strong>80 → 73 (−8.8%)</strong>, slight category coverage drop.</>} />
        <InsightCard icon={TrendingDown} type="error" title="Competitions" content={<>TeamViewer declined <strong>93 → 71 (−23.7%)</strong>, while AnyDesk dropped <strong>83 → 49 (−41.0%)</strong> in Jul 2026.</>} />
>>>>>>> origin/main
      </InsightsSection>
    );
    if (activeTab === 'page-one') return (
      <InsightsSection>
<<<<<<< HEAD
        <InsightCard icon={TrendingUp} type="success" title="Splashtop" content={<>From Jul 2025 to Sep 2026, page-1 keywords grew <strong>58 → 60 (+3.4%)</strong>, improving SERP visibility.</>} />
        <InsightCard icon={TrendingDown} type="error" title="Competitions" content={<>TeamViewer declined <strong>77 → 69 (−10.4%)</strong>, while AnyDesk declined <strong>68 → 51 (−25.0%)</strong> in Aug 2026.</>} />
=======
        <InsightCard icon={TrendingUp} type="success" title="Splashtop" content={<>From Oct 2025 to Jul 2026, page-1 keywords grew <strong>64 → 73 (+14.1%)</strong>, improving SERP visibility.</>} />
        <InsightCard icon={TrendingDown} type="error" title="Competitions" content={<>TeamViewer declined <strong>83 → 70 (−15.7%)</strong>, while AnyDesk declined <strong>75 → 47 (−37.3%)</strong> in Jul 2026.</>} />
>>>>>>> origin/main
      </InsightsSection>
    );
    return (
      <InsightsSection>
<<<<<<< HEAD
        <InsightCard icon={TrendingUp} type="success" title="Splashtop" content={<>From Jul 2025 to Sep 2026, traffic grew <strong>387 → 573 (+48.1%)</strong>, showing strong upward growth.</>} />
        <InsightCard icon={TrendingUp} type="success" title="Competitions" content={<>TeamViewer grew <strong>901 → 1,313 (+45.7%)</strong>, while AnyDesk grew <strong>1,432 → 1,757 (+22.7%)</strong>.</>} />
=======
        <InsightCard icon={TrendingUp} type="success" title="Splashtop" content={<>From Oct 2025 to Jul 2026, traffic increased <strong>506 → 803 (+58.7%)</strong>, showing strong upward growth.</>} />
        <InsightCard icon={TrendingUp} type="success" title="Competitions" content={<>TeamViewer grew <strong>1,206 → 1,405 (+16.5%)</strong>, while AnyDesk grew <strong>1,406 → 1,511 (+7.5%)</strong>.</>} />
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
    <SlideContainer slideNumber={10} onNavigateHome={onNavigateHome} source="Ahrefs">
      <SlideHeader title="Remote Support" subtitle="(Jul 2025 - Sep 2026)" />
=======
  const editMonths = ['Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul'];

  return (
    <SlideContainer slideNumber={10} onNavigateHome={onNavigateHome} source="Ahrefs">
      <SlideHeader title="Remote Support" subtitle="(Oct 2025 - Jul 2026)" />
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
            <h3 className="text-sm font-bold text-gray-900 mb-4">Edit Remote Support Data (Oct 2025 – Aug 2026)</h3>
=======
            <h3 className="text-sm font-bold text-gray-900 mb-4">Edit Remote Support Data (Oct 2025 – Jul 2026)</h3>
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
