<<<<<<< HEAD
import { Globe, Star, Play, Search } from 'lucide-react';
=======
import { Globe, Monitor, Search } from 'lucide-react';
>>>>>>> origin/main
import { ExternalLink } from 'lucide-react';
import { SlideContainer, SlideHeader, SlideFooter } from './design-system';

const kwData = [
<<<<<<< HEAD
  { kw: 'endpoint security',             msv: 9900, kd: 54, st: 0, tv: 0,  ad: 0, bt: 30, lm: 0  },
  { kw: 'it help desk',                  msv: 8100, kd: 45, st: 0, tv: 0,  ad: 0, bt: 0,  lm: 40 },
  { kw: 'mdm software',                  msv: 8100, kd: 44, st: 0, tv: 0,  ad: 0, bt: 0,  lm: 46 },
  { kw: 'it asset management',           msv: 6600, kd: 23, st: 0, tv: 0,  ad: 0, bt: 0,  lm: 58 },
  { kw: 'remote desktop application',    msv: 5400, kd: 56, st: 0, tv: 27, ad: 4, bt: 0,  lm: 0  },
  { kw: 'rmm software',                  msv: 2400, kd: 48, st: 0, tv: 24, ad: 0, bt: 0,  lm: 5  },
  { kw: 'secure remote access',          msv: 2400, kd: 37, st: 0, tv: 0,  ad: 0, bt: 7,  lm: 0  },
  { kw: 'remote desktop connection app', msv: 1600, kd: 48, st: 0, tv: 16, ad: 0, bt: 0,  lm: 0  },
  { kw: 'remote desktop access',         msv: 1000, kd: 62, st: 0, tv: 10, ad: 6, bt: 0,  lm: 0  },
];

const targetPages = [
  'https://www.splashtop.com/blog/endpoint-security',
  'https://www.splashtop.com/blog/help-desk',
  'https://www.splashtop.com/blog/what-is-secure-remote-access',
  'https://www.splashtop.com/blog/mobile-device-management',
  'https://www.splashtop.com/blog/best-platforms-msp-tool-consolidation',
  'https://www.splashtop.com/blog/what-is-remote-monitoring-and-management',
=======
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
>>>>>>> origin/main
];

export function SlideNextSteps({ onNavigateHome }: { onNavigateHome?: () => void }) {
  return (
    <SlideContainer slideNumber={23} onNavigateHome={onNavigateHome} source="">
<<<<<<< HEAD
      <SlideHeader title="Next Steps" subtitle="Sep 2026 — Recommended Actions" />

      <div className="flex-1 overflow-y-auto pb-4 space-y-4">

        {/* 1. Strengthen Homepage Product & Ecosystem Discovery */}
=======
      <SlideHeader title="Next Steps" subtitle="Recommended Actions" />

      <div className="flex-1 overflow-y-auto pb-4 space-y-4">

        {/* 1. Homepage Enhancements */}
>>>>>>> origin/main
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
<<<<<<< HEAD
            <h3 className="text-sm font-bold text-white">Strengthen Homepage Product &amp; Ecosystem Discovery</h3>
          </div>
          <div className="p-5">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-1">Insight</p>
              <p className="text-xs text-gray-700 leading-relaxed">
                TeamViewer prominently showcases both key integrations and add-ons on its homepage, making its broader ecosystem and product offerings more discoverable. Splashtop currently has these offerings available but does not provide similar homepage exposure.
              </p>
            </div>

            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Recommended Actions</p>
            <ul className="space-y-1.5 mb-4">
              {[
                'Add a consolidated homepage section highlighting key integrations and add-ons.',
                'Link to the respective pages to support deeper product and ecosystem discovery.',
=======
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
>>>>>>> origin/main
              ].map((action, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-500" />
                  {action}
                </li>
              ))}
            </ul>
<<<<<<< HEAD

            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Reference</p>
              <div className="flex items-center gap-2 text-xs">
                <ExternalLink className="w-3 h-3 text-blue-400 flex-shrink-0" />
                <a href="https://www.teamviewer.com/en-mea/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors break-all">
                  teamviewer.com/en-mea/
                </a>
              </div>
=======
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
>>>>>>> origin/main
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* 2. Integrate Customer Proof Across Product Journeys */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Star className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-sm font-bold text-white">Integrate Customer Proof Across Product Journeys</h3>
          </div>
          <div className="p-5">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">Insight</p>
              <p className="text-xs text-gray-700 leading-relaxed">
                TeamViewer surfaces relevant customer success stories directly on its product pages, while Splashtop has existing case studies that are not currently linked from corresponding product pages.
              </p>
            </div>

            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Recommended Actions</p>
            <ul className="space-y-1.5 mb-4">
              {[
                'Add relevant case study links to key Splashtop product pages.',
                'Prioritize stories that closely align with the product and customer use case.',
                'Strengthen internal linking between the existing case study pages.',
              ].map((action, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-green-500" />
=======
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
>>>>>>> origin/main
                  {action}
                </li>
              ))}
            </ul>
<<<<<<< HEAD

            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Reference</p>
              <div className="flex items-center gap-2 text-xs">
                <ExternalLink className="w-3 h-3 text-green-400 flex-shrink-0" />
                <a href="https://www.teamviewer.com/en-mea/products/remote" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors break-all">
                  teamviewer.com/en-mea/products/remote
=======
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Reference</p>
              <div className="flex items-center gap-2 text-xs">
                <ExternalLink className="w-3 h-3 text-violet-400 flex-shrink-0" />
                <a href="https://www.ninjaone.com/patch-management/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors break-all">
                  ninjaone.com/patch-management/
>>>>>>> origin/main
                </a>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* 3. Build an Owned Video Content Layer */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-sm font-bold text-white">Build an Owned Video Content Layer</h3>
          </div>
          <div className="p-5">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
              <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Insight</p>
              <p className="text-xs text-gray-700 leading-relaxed">
                NinjaOne has a dedicated video hub with individual pages organized around key IT topics, while Splashtop currently has limited standalone video content on its website.
              </p>
            </div>

            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Recommended Actions</p>
            <ul className="space-y-1.5 mb-4">
              {[
                'Start with high-value existing YouTube videos and create dedicated website pages for selected content.',
                'Organize these pages around priority categories and topics to build the foundation for a scalable video hub.',
              ].map((action, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-amber-500" />
                  {action}
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Reference</p>
              <div className="flex items-center gap-2 text-xs">
                <ExternalLink className="w-3 h-3 text-amber-400 flex-shrink-0" />
                <a href="https://www.ninjaone.com/videos/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors break-all">
                  ninjaone.com/videos/
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Expand Coverage Across High-Value Competitive Keyword Gaps */}
=======
        {/* 3. Strengthen Content Coverage */}
>>>>>>> origin/main
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
<<<<<<< HEAD
            <h3 className="text-sm font-bold text-white">Expand Coverage Across High-Value Competitive Keyword Gaps</h3>
          </div>
          <div className="p-5">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
              <p className="text-xs font-bold text-orange-700 uppercase tracking-wide mb-1">Insight</p>
              <p className="text-xs text-gray-700 leading-relaxed">
                Splashtop has no visibility across several high-volume keywords where multiple competitors are already ranking, creating opportunities across MDM, IT management, endpoint security, and support-related topics.
              </p>
            </div>

            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Recommended Actions</p>
            <ul className="space-y-1.5 mb-4">
              {[
                'Prioritize high-volume gaps such as endpoint security, IT help desk, MDM software, IT asset management, remote desktop application, and RMM software.',
                'Map these keywords to relevant existing pages and identify where dedicated content is needed to address the search intent.',
                'Consolidate closely related opportunities such as remote file transfer, remote file transfer software, Linux remote support tool, and Linux remote assistance where appropriate.',
              ].map((action, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-orange-500" />
                  {action}
                </li>
              ))}
            </ul>

            {/* Keyword Table */}
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Keyword Opportunities</p>
=======
            <h3 className="text-sm font-bold text-white">Strengthen Content Coverage for High-Priority Remote Access &amp; Security Topics</h3>
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-700 mb-4 leading-relaxed">
              Expand content coverage across Remote Desktop, Endpoint Security, Identity &amp; Access Management, and Remote Monitoring to address high-value keyword gaps and improve visibility in strategic solution areas. Focus on improving keyword targeting, content depth, internal linking, and entity coverage.
            </p>

            {/* Keyword Table */}
>>>>>>> origin/main
            <div className="overflow-x-auto mb-4 rounded-lg border border-gray-200">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-bold text-gray-600 uppercase tracking-wide">Keyword</th>
<<<<<<< HEAD
                    <th className="text-center py-2 px-3 font-bold text-gray-600 uppercase tracking-wide">Volume</th>
                    <th className="text-center py-2 px-3 font-bold text-gray-600 uppercase tracking-wide">KD</th>
                    <th className="text-center py-2 px-3 font-bold text-red-600 uppercase tracking-wide">Splashtop</th>
                    <th className="text-center py-2 px-3 font-bold text-pink-600 uppercase tracking-wide">TeamViewer</th>
                    <th className="text-center py-2 px-3 font-bold text-green-600 uppercase tracking-wide">AnyDesk</th>
                    <th className="text-center py-2 px-3 font-bold text-purple-600 uppercase tracking-wide">BeyondTrust</th>
                    <th className="text-center py-2 px-3 font-bold text-orange-600 uppercase tracking-wide">LogMeIn</th>
=======
                    <th className="text-center py-2 px-3 font-bold text-gray-600 uppercase tracking-wide">MSV</th>
                    <th className="text-center py-2 px-3 font-bold text-gray-600 uppercase tracking-wide">KD</th>
                    <th className="text-center py-2 px-3 font-bold text-blue-600 uppercase tracking-wide">ST</th>
                    <th className="text-center py-2 px-3 font-bold text-pink-600 uppercase tracking-wide">TV</th>
                    <th className="text-center py-2 px-3 font-bold text-green-600 uppercase tracking-wide">AD</th>
                    <th className="text-center py-2 px-3 font-bold text-purple-600 uppercase tracking-wide">BT</th>
                    <th className="text-center py-2 px-3 font-bold text-orange-600 uppercase tracking-wide">LM</th>
>>>>>>> origin/main
                  </tr>
                </thead>
                <tbody>
                  {kwData.map((row) => (
                    <tr key={row.kw} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-2 px-3 text-gray-700 capitalize">{row.kw}</td>
                      <td className="py-2 px-3 text-center font-semibold text-gray-900">{row.msv.toLocaleString()}</td>
                      <td className="py-2 px-3 text-center font-semibold text-gray-900">{row.kd}</td>
<<<<<<< HEAD
                      <td className={`py-2 px-3 text-center font-bold ${row.st === 0 ? 'text-red-500' : 'text-red-600'}`}>{row.st || '—'}</td>
                      <td className="py-2 px-3 text-center font-semibold text-pink-600">{row.tv || '—'}</td>
                      <td className="py-2 px-3 text-center font-semibold text-green-600">{row.ad || '—'}</td>
                      <td className="py-2 px-3 text-center font-semibold text-purple-600">{row.bt || '—'}</td>
                      <td className="py-2 px-3 text-center font-semibold text-orange-600">{row.lm || '—'}</td>
=======
                      <td className={`py-2 px-3 text-center font-bold ${row.st === 0 ? 'text-red-500' : 'text-blue-600'}`}>{row.st}</td>
                      <td className="py-2 px-3 text-center font-semibold text-pink-600">{row.tv}</td>
                      <td className="py-2 px-3 text-center font-semibold text-green-600">{row.ad}</td>
                      <td className="py-2 px-3 text-center font-semibold text-purple-600">{row.bt}</td>
                      <td className="py-2 px-3 text-center font-semibold text-orange-600">{row.lm}</td>
>>>>>>> origin/main
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
