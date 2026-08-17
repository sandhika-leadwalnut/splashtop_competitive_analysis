import { Globe, Monitor, Search } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { SlideContainer, SlideHeader, SlideFooter } from './design-system';

const kwData = [
  { kw: 'remote desktop',           msv: 90500, kd: 79, st: 0, tv: 8,  ad: 19, bt: 0,  lm: 0 },
  { kw: 'desktop remote access',    msv: 8100,  kd: 82, st: 0, tv: 14, ad: 2,  bt: 0,  lm: 0 },
  { kw: 'endpoint security',        msv: 8100,  kd: 54, st: 0, tv: 0,  ad: 0,  bt: 23, lm: 0 },
  { kw: 'identity access management',msv: 3600, kd: 48, st: 0, tv: 0,  ad: 0,  bt: 33, lm: 0 },
  { kw: 'remote monitoring',        msv: 2400,  kd: 62, st: 0, tv: 6,  ad: 0,  bt: 0,  lm: 0 },
  { kw: 'zero trust solutions',     msv: 1900,  kd: 52, st: 0, tv: 0,  ad: 0,  bt: 13, lm: 0 },
  { kw: 'remote access to computer',msv: 1900,  kd: 57, st: 0, tv: 3,  ad: 5,  bt: 0,  lm: 0 },
  { kw: 'digital employee experience',msv: 1900, kd: 27, st: 0, tv: 31, ad: 0, bt: 0,  lm: 0 },
];

const targetPages = [
  'https://www.splashtop.com/solutions/remote-desktop',
  'https://www.splashtop.com/blog/endpoint-security',
  'https://www.splashtop.com/blog/remote-access-computer',
];

export function SlideNextSteps({ onNavigateHome }: { onNavigateHome?: () => void }) {
  return (
    <SlideContainer slideNumber={23} onNavigateHome={onNavigateHome} source="">
      <SlideHeader title="Next Steps" subtitle="Recommended Actions" />

      <div className="flex-1 overflow-y-auto pb-4 space-y-4">

        {/* 1. Homepage Enhancements */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-sm font-bold text-white">Homepage Enhancements</h3>
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-700 mb-4 leading-relaxed">
              Improve the homepage experience by strengthening product discovery, showcasing the breadth of the product portfolio, and reinforcing credibility through customer success stories and interactive content.
            </p>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Recommended Actions</p>
            <ul className="space-y-1.5 mb-4">
              {[
                'Showcase multiple customer success stories across different products and industries.',
                'Add a CTA linking to the complete case study library.',
                'Introduce an interactive product showcase with concise messaging, product screenshots, and customer proof.',
              ].map((action, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-500" />
                  {action}
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">References</p>
              <ul className="space-y-1.5">
                {['https://www.teamviewer.com/en-us/', 'https://www.ninjaone.com/'].map((url) => (
                  <li key={url} className="flex items-center gap-2 text-xs">
                    <ExternalLink className="w-3 h-3 text-blue-400 flex-shrink-0" />
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors break-all">
                      {url.replace('https://', '')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Product Page Enhancements */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-violet-500 to-violet-600 px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Monitor className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-sm font-bold text-white">Product Page Enhancements</h3>
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-700 mb-4 leading-relaxed">
              Optimize product pages to communicate value before conversion by improving content hierarchy, product visualization, and trust-building elements.
            </p>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Recommended Actions</p>
            <ul className="space-y-1.5 mb-4">
              {[
                'Present key capabilities and business outcomes before pricing and plan selection.',
                'Add diverse trust signals such as analyst recognitions, review platform ratings, and industry awards.',
                'Incorporate more product screenshots and workflow visuals throughout feature sections.',
              ].map((action, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-violet-500" />
                  {action}
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Reference</p>
              <div className="flex items-center gap-2 text-xs">
                <ExternalLink className="w-3 h-3 text-violet-400 flex-shrink-0" />
                <a href="https://www.ninjaone.com/patch-management/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors break-all">
                  ninjaone.com/patch-management/
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Strengthen Content Coverage */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-sm font-bold text-white">Strengthen Content Coverage for High-Priority Remote Access &amp; Security Topics</h3>
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-700 mb-4 leading-relaxed">
              Expand content coverage across Remote Desktop, Endpoint Security, Identity &amp; Access Management, and Remote Monitoring to address high-value keyword gaps and improve visibility in strategic solution areas. Focus on improving keyword targeting, content depth, internal linking, and entity coverage.
            </p>

            {/* Keyword Table */}
            <div className="overflow-x-auto mb-4 rounded-lg border border-gray-200">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-bold text-gray-600 uppercase tracking-wide">Keyword</th>
                    <th className="text-center py-2 px-3 font-bold text-gray-600 uppercase tracking-wide">MSV</th>
                    <th className="text-center py-2 px-3 font-bold text-gray-600 uppercase tracking-wide">KD</th>
                    <th className="text-center py-2 px-3 font-bold text-blue-600 uppercase tracking-wide">ST</th>
                    <th className="text-center py-2 px-3 font-bold text-pink-600 uppercase tracking-wide">TV</th>
                    <th className="text-center py-2 px-3 font-bold text-green-600 uppercase tracking-wide">AD</th>
                    <th className="text-center py-2 px-3 font-bold text-purple-600 uppercase tracking-wide">BT</th>
                    <th className="text-center py-2 px-3 font-bold text-orange-600 uppercase tracking-wide">LM</th>
                  </tr>
                </thead>
                <tbody>
                  {kwData.map((row) => (
                    <tr key={row.kw} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-2 px-3 text-gray-700 capitalize">{row.kw}</td>
                      <td className="py-2 px-3 text-center font-semibold text-gray-900">{row.msv.toLocaleString()}</td>
                      <td className="py-2 px-3 text-center font-semibold text-gray-900">{row.kd}</td>
                      <td className={`py-2 px-3 text-center font-bold ${row.st === 0 ? 'text-red-500' : 'text-blue-600'}`}>{row.st}</td>
                      <td className="py-2 px-3 text-center font-semibold text-pink-600">{row.tv}</td>
                      <td className="py-2 px-3 text-center font-semibold text-green-600">{row.ad}</td>
                      <td className="py-2 px-3 text-center font-semibold text-purple-600">{row.bt}</td>
                      <td className="py-2 px-3 text-center font-semibold text-orange-600">{row.lm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Target Pages */}
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Target Pages</p>
              <ul className="space-y-1.5">
                {targetPages.map((url) => (
                  <li key={url} className="flex items-center gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-orange-500" />
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors break-all">
                      {url.replace('https://www.', '')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      <SlideFooter />
    </SlideContainer>
  );
}
