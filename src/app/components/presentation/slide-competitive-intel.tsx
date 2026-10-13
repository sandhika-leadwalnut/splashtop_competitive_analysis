import { useState } from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { SlideContainer, SlideHeader, SlideFooter } from './design-system';

type Tab = 'teamviewer' | 'beyondtrust' | 'anydesk';

interface Page {
  category: string;
  title: string;
  url: string;
  published: string;
  type?: 'blog' | 'podcast' | 'insight';
}

const teamviewerPages: Page[] = [
  {
    category: 'MANUFACTURING',
    title: 'Manufacturers Live with Fragmentation Until Security Forces Change',
    url: 'https://www.teamviewer.com/en-in/insights/manufacturers-live-with-fragmentation-until-security-forces-change/',
    published: 'Published: Sep 2026',
    type: 'insight',
  },
  {
    category: 'DIGITAL WORKPLACE',
    title: 'Are You Missing the Impact of Digital Friction on Your Business?',
    url: 'https://www.teamviewer.com/en-in/insights/are-you-missing-the-impact-of-digital-friction-on-your-business/',
    published: 'Published: Sep 2026',
    type: 'insight',
  },
  {
    category: 'PRODUCT UPDATE',
    title: 'Introducing TeamViewer Voices',
    url: 'https://www.teamviewer.com/en-in/insights/introducing-teamviewer-voices/',
    published: 'Published: Sep 2026',
    type: 'insight',
  },
  {
    category: 'AI / MCP',
    title: 'Introducing TeamViewer Model Context Protocol Integration',
    url: 'https://www.teamviewer.com/en-in/insights/introducing-teamviewer-model-context-protocol-integration/',
    published: 'Published: Sep 2026',
    type: 'insight',
  },
];

const beyondtrustPages: Page[] = [
  {
    category: 'AI SUPPORT',
    title: 'Beekon: AI-Powered Customer Support',
    url: 'https://www.beyondtrust.com/blog/entry/beekon-ai-powered-customer-support',
    published: 'Published: Sep 2026',
    type: 'blog',
  },
  {
    category: 'SECURITY',
    title: 'Password Cracking 101: Attacks & Defenses Explained',
    url: 'https://www.beyondtrust.com/blog/entry/password-cracking-101-attacks-defenses-explained',
    published: 'Published: Sep 2026',
    type: 'blog',
  },
  {
    category: 'AI SECURITY',
    title: 'Malicious Codex Skills: AI Agent Security',
    url: 'https://www.beyondtrust.com/blog/entry/malicious-codex-skills-ai-agent-security',
    published: 'Published: Sep 2026',
    type: 'blog',
  },
  {
    category: 'AI SECURITY',
    title: 'Frontier AI Security',
    url: 'https://www.beyondtrust.com/blog/entry/frontier-ai-security',
    published: 'Published: Sep 2026',
    type: 'blog',
  },
  {
    category: 'OT SECURITY',
    title: 'OT Remote Access Zero Trust',
    url: 'https://www.beyondtrust.com/blog/entry/ot-remote-access-zero-trust',
    published: 'Published: Sep 2026',
    type: 'blog',
  },
  {
    category: 'VULNERABILITY',
    title: 'Amazon Bedrock AgentCore Python SDK RCE CVEs',
    url: 'https://www.beyondtrust.com/blog/entry/amazon-bedrock-agentcore-python-sdk-rce-cves',
    published: 'Published: Sep 2026',
    type: 'blog',
  },
];

const anydeskPages: Page[] = [
  {
    category: 'REMOTE MANAGEMENT',
    title: 'Remote Device Management Best Practices',
    url: 'https://anydesk.com/blog/remote-device-management-best-practices',
    published: 'Published: Sep 2026',
    type: 'blog',
  },
];

const tabConfig = {
  teamviewer: {
    label: 'TeamViewer',
    pages: teamviewerPages,
    badgeColor: 'bg-blue-600',
    iconBg: 'bg-blue-600',
    accentBorder: 'border-blue-200',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-700',
    dotColor: 'bg-blue-500',
    description: 'Sep 2026 content covering manufacturing fragmentation, digital friction, product updates, and MCP integration.',
    cardType: 'New Insights Pages',
  },
  beyondtrust: {
    label: 'BeyondTrust',
    pages: beyondtrustPages,
    badgeColor: 'bg-red-600',
    iconBg: 'bg-red-600',
    accentBorder: 'border-red-200',
    accentBg: 'bg-red-50',
    accentText: 'text-red-700',
    dotColor: 'bg-red-500',
    description: 'Sep 2026 content covering AI-powered support, password security, AI agent threats, frontier AI, OT remote access, and AWS vulnerability research.',
    cardType: 'New Blog Posts',
  },
  anydesk: {
    label: 'AnyDesk',
    pages: anydeskPages,
    badgeColor: 'bg-green-600',
    iconBg: 'bg-green-600',
    accentBorder: 'border-green-200',
    accentBg: 'bg-green-50',
    accentText: 'text-green-700',
    dotColor: 'bg-green-500',
    description: 'Sep 2026 content covering remote device management best practices.',
    cardType: 'New Blog Posts',
  },
};

export function SlideCompetitiveIntel({ onNavigateHome }: { onNavigateHome?: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>('teamviewer');
  const cfg = tabConfig[activeTab];

  return (
    <SlideContainer slideNumber={20} onNavigateHome={onNavigateHome} source="">
      <SlideHeader
        title="Content Gap"
        subtitle="Key Insights & Strategic Actions"
      />

      {/* ── Tab Row ── */}
      <div className="flex gap-2 mb-4 flex-shrink-0">
        {(['teamviewer', 'beyondtrust', 'anydesk'] as Tab[]).map((tab) => {
          const borderColors: Record<Tab, string> = { teamviewer: 'border-blue-500', beyondtrust: 'border-red-500', anydesk: 'border-green-500' };
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-[13px] font-bold border-2 transition-all duration-200 ${
                activeTab === tab
                  ? `${borderColors[tab]} bg-white text-gray-900 shadow-sm`
                  : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
              }`}
            >
              {tabConfig[tab].label}
            </button>
          );
        })}
      </div>

      {/* ── Content Card ── */}
      <div className={`flex-1 flex flex-col rounded-2xl border ${cfg.accentBorder} ${cfg.accentBg} p-5 overflow-hidden min-h-0`}>

        {/* Card Header */}
        <div className="flex items-start gap-4 mb-5 flex-shrink-0">
          <div className={`w-11 h-11 ${cfg.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-base font-bold text-gray-900">
                New Pages Added in Sep-26
              </h3>
              <span className={`${cfg.badgeColor} text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full tracking-wider`}>
                {cfg.pages.length} NEW PAGES
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{cfg.description}</p>
          </div>
        </div>

        {/* ── Page Grid ── */}
        <div className="flex-1 overflow-y-auto min-h-0 pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="grid grid-cols-2 gap-3">
            {cfg.pages.map((page, idx) => (
              <a
                key={idx}
                href={page.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-xl border border-gray-200 px-4 py-3.5 hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col gap-1"
              >
                {/* Category label */}
                <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">
                  {page.category}
                </span>

                {/* Title */}
                <p className="text-[13px] font-bold text-gray-900 group-hover:text-gray-700 leading-snug pr-5">
                  {page.title}
                </p>

                {/* Published */}
                <span className="text-[10px] text-gray-400 mt-0.5">{page.published}</span>

                {/* External link icon */}
                <ExternalLink className="absolute top-3.5 right-3.5 w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 transition-colors" />

                {/* Type badge for podcast */}
                {page.type === 'podcast' && (
                  <span className="self-start mt-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                    Podcast
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideContainer>
  );
}
