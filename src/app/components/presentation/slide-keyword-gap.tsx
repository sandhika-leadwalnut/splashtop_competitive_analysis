import { Search, AlertTriangle, Target, Users } from 'lucide-react';
import { useState } from 'react';
import {
  SlideContainer,
  SlideHeader,
  SlideFooter,
} from './design-system';

<<<<<<< HEAD
// Missing Keywords Data (Sep 2026)
const missingKeywordsData = [
  { keyword: 'linux remote support tool', intent: 'Informational', volume: 90, kd: 25, cpc: 0, cd: 0, ft: 0, pa: 28, cp: 11, cisco: 25, cs: 6 },
  { keyword: 'remote access free trial',  intent: 'Informational', volume: 50, kd: 35, cpc: 0, cd: 0, ft: 0, pa: 2,  cp: 6,  cisco: 1,  cs: 31 },
];

// Untapped Keywords Data (Sep 2026)
const untappedKeywordsData = [
  { keyword: 'advanced file transfer',       intent: 'Informational',             volume: 9900, kd: 24, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 33, cisco: 0,  cs: 0  },
  { keyword: 'android file transfer',        intent: 'Informational',             volume: 8100, kd: 20, cpc: 0, cd: 0, ft: 0, pa: 6,  cp: 0,  cisco: 0,  cs: 0  },
  { keyword: 'business it support',          intent: 'Informational',             volume: 6600, kd: 18, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 7,  cs: 0  },
  { keyword: 'it asset management',          intent: 'Informational',             volume: 6600, kd: 32, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 0,  cs: 61 },
  { keyword: 'it support and services',      intent: 'Informational',             volume: 4400, kd: 29, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 5,  cs: 0  },
  { keyword: 'support services it',          intent: 'Informational',             volume: 4400, kd: 33, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 3,  cs: 0  },
  { keyword: 'it help desk services',        intent: 'Informational',             volume: 3600, kd: 19, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 0,  cs: 4  },
  { keyword: 'it helpdesk',                  intent: 'Informational',             volume: 3600, kd: 28, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 0,  cs: 39 },
  { keyword: 'remote access desktop',        intent: 'Informational',             volume: 3600, kd: 65, cpc: 0, cd: 0, ft: 0, pa: 20, cp: 2,  cisco: 0,  cs: 0  },
  { keyword: 'remote desktop apps',          intent: 'Commercial, Informational', volume: 2900, kd: 51, cpc: 0, cd: 0, ft: 0, pa: 11, cp: 2,  cisco: 0,  cs: 0  },
  { keyword: 'unified endpoint management',  intent: 'Commercial, Informational', volume: 2400, kd: 25, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 0,  cs: 47 },
  { keyword: 'free remote access software',  intent: 'Informational',             volume: 1900, kd: 57, cpc: 0, cd: 0, ft: 0, pa: 1,  cp: 4,  cisco: 0,  cs: 0  },
  { keyword: 'mdm device management',        intent: 'Informational',             volume: 1900, kd: 48, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 0,  cs: 58 },
  { keyword: 'mdm solutions',                intent: 'Informational',             volume: 1900, kd: 43, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 0,  cs: 45 },
  { keyword: 'remote desktop mac',           intent: 'Informational',             volume: 1900, kd: 52, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 8,  cisco: 0,  cs: 0  },
  { keyword: 'secure remote access',         intent: 'Informational',             volume: 1900, kd: 41, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 7,  cs: 0  },
];

// Multi-Competitor Comparison Data / Weak Keywords (Sep 2026)
const multiCompetitorData = [
  { keyword: 'remote file transfer software', intent: 'Informational', volume: 40, kd: 18, ft: 28, pa: 6, cp: 3, cisco: 13, cs: 5 },
=======
// Missing Keywords Data (Jul 2026)
const missingKeywordsData = [
  { keyword: 'remote file transfer',    intent: 'Informational', volume: 140, kd: 20, cpc: 0, cd: 0, ft: 0, pa: 15, cp: 2,  cisco: 11, cs: 8 },
  { keyword: 'linux remote assistance', intent: 'Informational', volume: 50,  kd: 26, cpc: 0, cd: 0, ft: 0, pa: 24, cp: 20, cisco: 7,  cs: 5 },
];

// Untapped Keywords Data (Jul 2026)
const untappedKeywordsData = [
  { keyword: 'remote desktop',                          intent: 'Informational, Navigational',  volume: 90500, kd: 79, cpc: 0, cd: 0, ft: 0, pa: 8,  cp: 19, cisco: 0,  cs: 0  },
  { keyword: 'it support',                              intent: 'Informational',                volume: 40500, kd: 46, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 3,  cs: 0  },
  { keyword: 'advanced file transfer',                  intent: 'Informational',                volume: 9900,  kd: 13, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 31, cisco: 57, cs: 0  },
  { keyword: 'it support services',                     intent: 'Informational',                volume: 9900,  kd: 21, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 2,  cs: 0  },
  { keyword: 'desktop remote access',                   intent: 'Informational',                volume: 8100,  kd: 82, cpc: 0, cd: 0, ft: 0, pa: 14, cp: 2,  cisco: 0,  cs: 0  },
  { keyword: 'endpoint security',                       intent: 'Informational',                volume: 8100,  kd: 54, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 23, cs: 0  },
  { keyword: 'it help desk',                            intent: 'Informational',                volume: 8100,  kd: 22, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 0,  cs: 4  },
  { keyword: 'it support and services',                 intent: 'Commercial',                   volume: 5400,  kd: 32, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 3,  cs: 0  },
  { keyword: 'identity access management',              intent: 'Informational',                volume: 3600,  kd: 48, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 33, cs: 0  },
  { keyword: 'it help desk services',                   intent: 'Informational',                volume: 3600,  kd: 27, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 0,  cs: 3  },
  { keyword: 'it helpdesk',                             intent: 'Informational',                volume: 3600,  kd: 30, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 22, cs: 0  },
  { keyword: 'remote access desktop',                   intent: 'Informational',                volume: 3600,  kd: 86, cpc: 0, cd: 0, ft: 0, pa: 11, cp: 3,  cisco: 0,  cs: 0  },
  { keyword: 'endpoint security solutions',             intent: 'Commercial, Informational',    volume: 2900,  kd: 44, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 43, cs: 0  },
  { keyword: 'free remote desktop software',            intent: 'Informational',                volume: 2900,  kd: 44, cpc: 0, cd: 0, ft: 0, pa: 1,  cp: 0,  cisco: 0,  cs: 0  },
  { keyword: 'free remote access software',             intent: 'Informational',                volume: 2400,  kd: 47, cpc: 0, cd: 0, ft: 0, pa: 1,  cp: 6,  cisco: 0,  cs: 13 },
  { keyword: 'free remote desktop',                     intent: 'Informational',                volume: 2400,  kd: 56, cpc: 0, cd: 0, ft: 0, pa: 1,  cp: 9,  cisco: 0,  cs: 0  },
  { keyword: 'identity and access management solutions',intent: 'Informational',                volume: 2400,  kd: 48, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 35, cs: 0  },
  { keyword: 'it helpdesk services',                    intent: 'Commercial',                   volume: 2400,  kd: 19, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 0,  cs: 4  },
  { keyword: 'it services and support',                 intent: 'Commercial',                   volume: 2400,  kd: 37, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 4,  cs: 0  },
  { keyword: 'mdm solutions',                           intent: 'Informational',                volume: 2400,  kd: 42, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 47, cs: 0  },
  { keyword: 'remote desktop connection software',      intent: 'Informational',                volume: 2400,  kd: 51, cpc: 0, cd: 0, ft: 0, pa: 1,  cp: 3,  cisco: 0,  cs: 0  },
  { keyword: 'remote login',                            intent: 'Transactional',                volume: 2400,  kd: 74, cpc: 0, cd: 0, ft: 0, pa: 4,  cp: 0,  cisco: 0,  cs: 20 },
  { keyword: 'remote monitoring',                       intent: 'Informational',                volume: 2400,  kd: 62, cpc: 0, cd: 0, ft: 0, pa: 6,  cp: 0,  cisco: 0,  cs: 0  },
  { keyword: 'digital employee experience',             intent: 'Informational',                volume: 1900,  kd: 27, cpc: 0, cd: 0, ft: 0, pa: 31, cp: 0,  cisco: 0,  cs: 0  },
  { keyword: 'remote access to computer',               intent: 'Informational',                volume: 1900,  kd: 57, cpc: 0, cd: 0, ft: 0, pa: 3,  cp: 5,  cisco: 0,  cs: 0  },
  { keyword: 'unified endpoint management',             intent: 'Informational',                volume: 1900,  kd: 28, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 0,  cs: 36 },
  { keyword: 'what is endpoint security',               intent: 'Informational',                volume: 1900,  kd: 36, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 22, cs: 0  },
  { keyword: 'what is remote desktop connection',       intent: 'Informational',                volume: 1900,  kd: 49, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 10, cisco: 0,  cs: 0  },
  { keyword: 'zero trust solutions',                    intent: 'Commercial, Informational',    volume: 1900,  kd: 52, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 13, cs: 0  },
  { keyword: 'ai security solutions',                   intent: 'Informational',                volume: 1600,  kd: 51, cpc: 0, cd: 0, ft: 0, pa: 0,  cp: 0,  cisco: 1,  cs: 0  },
];

// Multi-Competitor Comparison Data / Weak Keywords (Jul 2026)
const multiCompetitorData = [
  { keyword: 'remote file transfer software', intent: 'Informational', volume: 50, kd: 21, ft: 24, pa: 15, cp: 1, cisco: 21, cs: 4 },
>>>>>>> origin/main
];

export function SlideKeywordGap({ onNavigateHome }: { onNavigateHome?: () => void }) {
  const [activeTab, setActiveTab] = useState<'missing' | 'untapped' | 'multiCompetitor'>('missing');

  const getCurrentData = () => {
    switch (activeTab) {
      case 'missing': return missingKeywordsData;
      case 'untapped': return untappedKeywordsData;
      case 'multiCompetitor': return multiCompetitorData;
    }
  };

  const getTabIcon = () => {
    switch (activeTab) {
      case 'missing': return AlertTriangle;
      case 'untapped': return Target;
      case 'multiCompetitor': return Users;
    }
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case 'missing': return 'Missing Keywords';
      case 'untapped': return 'Untapped Keywords';
      case 'multiCompetitor': return 'Weak Keywords';
    }
  };

  const getTabDescription = () => {
    switch (activeTab) {
      case 'missing': return 'Critical gaps in Splashtop\'s content strategy';
      case 'untapped': return 'High-potential keywords with minimal competition';
      case 'multiCompetitor': return 'Competitive keyword comparison with ranking positions';
    }
  };

  const IconComponent = getTabIcon();

  return (
    <SlideContainer slideNumber={20} onNavigateHome={onNavigateHome}>
      <SlideHeader
        title="Keyword Gap"
      />
      
      <div className="flex-1 flex flex-col gap-4 pb-4">
        {/* Main Tab Navigation - Curved Folder Style */}
        <div className="flex items-start gap-1">
          <button
            onClick={() => setActiveTab('missing')}
            className={`px-8 py-3 text-sm font-semibold transition-all duration-200 relative ${
              activeTab === 'missing'
                ? 'bg-white text-red-600 z-10'
                : 'bg-gradient-to-b from-gray-100 to-gray-200 text-gray-600 hover:from-gray-200 hover:to-gray-300 hover:text-gray-800'
            }`}
            style={{
              borderRadius: '12px 12px 0 0',
              marginBottom: '-2px',
              boxShadow: activeTab === 'missing'
                ? '0 -2px 8px rgba(0, 0, 0, 0.08), 0 2px 0 0 white'
                : '0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          >
            Missing Keywords
          </button>
          <button
            onClick={() => setActiveTab('untapped')}
            className={`px-8 py-3 text-sm font-semibold transition-all duration-200 relative ${
              activeTab === 'untapped'
                ? 'bg-white text-red-600 z-10'
                : 'bg-gradient-to-b from-gray-100 to-gray-200 text-gray-600 hover:from-gray-200 hover:to-gray-300 hover:text-gray-800'
            }`}
            style={{
              borderRadius: '12px 12px 0 0',
              marginBottom: '-2px',
              boxShadow: activeTab === 'untapped'
                ? '0 -2px 8px rgba(0, 0, 0, 0.08), 0 2px 0 0 white'
                : '0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          >
            Untapped Keywords
          </button>
          <button
            onClick={() => setActiveTab('multiCompetitor')}
            className={`px-8 py-3 text-sm font-semibold transition-all duration-200 relative ${
              activeTab === 'multiCompetitor'
                ? 'bg-white text-red-600 z-10'
                : 'bg-gradient-to-b from-gray-100 to-gray-200 text-gray-600 hover:from-gray-200 hover:to-gray-300 hover:text-gray-800'
            }`}
            style={{
              borderRadius: '12px 12px 0 0',
              marginBottom: '-2px',
              boxShadow: activeTab === 'multiCompetitor'
                ? '0 -2px 8px rgba(0, 0, 0, 0.08), 0 2px 0 0 white'
                : '0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          >
            Weak Keywords
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-200">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                activeTab === 'untapped' ? 'bg-blue-50' : 'bg-red-50'
              }`}>
                <IconComponent className={`w-6 h-6 ${
                  activeTab === 'untapped' ? 'text-blue-500' : 'text-red-500'
                }`} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{getTabTitle()}</h3>
                <p className="text-sm text-gray-600">{getTabDescription()}</p>
              </div>
            </div>

            {/* Table */}
            <div className="bg-gray-50 rounded-lg overflow-hidden flex-1">
              <div className="overflow-x-auto h-full max-h-[500px] overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-200 sticky top-0 z-20">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Keyword</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">
                        {activeTab === 'multiCompetitor' ? 'Intent' : 'Intents'}
                      </th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-900">
                        {activeTab === 'multiCompetitor' ? 'Volume' : 'Volume'}
                      </th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-900">KD</th>
                      {(activeTab === 'missing' || activeTab === 'untapped') && (
                        <>
                          <th className="px-3 py-3 text-center font-semibold text-gray-900 bg-red-50">ST</th>
                          <th className="px-3 py-3 text-center font-semibold text-gray-900 bg-orange-50">TV</th>
                          <th className="px-3 py-3 text-center font-semibold text-gray-900 bg-purple-50">AD</th>
                          <th className="px-3 py-3 text-center font-semibold text-gray-900 bg-blue-50">BT</th>
                          <th className="px-3 py-3 text-center font-semibold text-gray-900 bg-gray-100">LM</th>
                        </>
                      )}
                      {activeTab === 'multiCompetitor' && (
                        <>
                          <th className="px-3 py-3 text-center font-semibold text-gray-900 bg-red-50">ST</th>
                          <th className="px-3 py-3 text-center font-semibold text-gray-900 bg-orange-50">TV</th>
                          <th className="px-3 py-3 text-center font-semibold text-gray-900 bg-purple-50">AD</th>
                          <th className="px-3 py-3 text-center font-semibold text-gray-900 bg-blue-50">BT</th>
                          <th className="px-3 py-3 text-center font-semibold text-gray-900 bg-gray-100">LM</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {getCurrentData().map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-900">{row.keyword}</td>
                        <td className="px-4 py-3 text-gray-600 text-sm">{row.intent}</td>
                        <td className="px-4 py-3 text-center text-gray-900 font-medium">{row.volume.toLocaleString()}</td>
                        <td className="px-4 py-3 text-center text-gray-600">{row.kd}</td>
                        {(activeTab === 'missing' || activeTab === 'untapped') && 'ft' in row && (
                          <>
                            <td className="px-3 py-3 text-center font-semibold bg-red-50 text-red-700">{row.ft}</td>
                            <td className="px-3 py-3 text-center font-semibold bg-orange-50 text-orange-700">{(row as any).pa}</td>
                            <td className="px-3 py-3 text-center font-semibold bg-purple-50 text-purple-700">{(row as any).cp}</td>
                            <td className="px-3 py-3 text-center font-semibold bg-blue-50 text-blue-700">{(row as any).cisco}</td>
                            <td className="px-3 py-3 text-center font-semibold bg-gray-50 text-gray-700">{(row as any).cs}</td>
                          </>
                        )}
                        {activeTab === 'multiCompetitor' && 'ft' in row && (
                          <>
                            <td className="px-3 py-3 text-center font-semibold bg-red-50 text-red-700">{row.ft}</td>
                            <td className="px-3 py-3 text-center font-semibold bg-orange-50 text-orange-700">{(row as any).pa}</td>
                            <td className="px-3 py-3 text-center font-semibold bg-purple-50 text-purple-700">{(row as any).cp}</td>
                            <td className="px-3 py-3 text-center font-semibold bg-blue-50 text-blue-700">{(row as any).cisco}</td>
                            <td className="px-3 py-3 text-center font-semibold bg-gray-50 text-gray-700">{(row as any).cs}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SlideFooter source="Source: Semrush Keyword Gap Tool" />
    </SlideContainer>
  );
}