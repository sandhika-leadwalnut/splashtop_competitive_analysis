import { FileText, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import {
  SlideContainer,
  SlideHeader,
  SlideFooter,
} from './design-system';

interface ContentItem {
  category: string;
  title: string;
  url: string;
  date: string;
}

const teamviewerContent: ContentItem[] = [
  {
    category: 'MANUFACTURING',
    title: 'Manufacturers Live with Fragmentation Until Security Forces Change',
    url: 'https://www.teamviewer.com/en-in/insights/manufacturers-live-with-fragmentation-until-security-forces-change/',
    date: 'Sep-26',
  },
  {
    category: 'DIGITAL WORKPLACE',
    title: 'Are You Missing the Impact of Digital Friction on Your Business?',
    url: 'https://www.teamviewer.com/en-in/insights/are-you-missing-the-impact-of-digital-friction-on-your-business/',
    date: 'Sep-26',
  },
  {
    category: 'PRODUCT UPDATE',
    title: 'Introducing TeamViewer Voices',
    url: 'https://www.teamviewer.com/en-in/insights/introducing-teamviewer-voices/',
    date: 'Sep-26',
  },
  {
    category: 'AI / MCP',
    title: 'Introducing TeamViewer Model Context Protocol Integration',
    url: 'https://www.teamviewer.com/en-in/insights/introducing-teamviewer-model-context-protocol-integration/',
    date: 'Sep-26',
  },
];

const beyondtrustContent: ContentItem[] = [
  {
    category: 'AI SUPPORT',
    title: 'Beekon: AI-Powered Customer Support',
    url: 'https://www.beyondtrust.com/blog/entry/beekon-ai-powered-customer-support',
    date: 'Sep-26',
  },
  {
    category: 'SECURITY',
    title: 'Password Cracking 101: Attacks & Defenses Explained',
    url: 'https://www.beyondtrust.com/blog/entry/password-cracking-101-attacks-defenses-explained',
    date: 'Sep-26',
  },
  {
    category: 'AI SECURITY',
    title: 'Malicious Codex Skills: AI Agent Security',
    url: 'https://www.beyondtrust.com/blog/entry/malicious-codex-skills-ai-agent-security',
    date: 'Sep-26',
  },
  {
    category: 'AI SECURITY',
    title: 'Frontier AI Security',
    url: 'https://www.beyondtrust.com/blog/entry/frontier-ai-security',
    date: 'Sep-26',
  },
  {
    category: 'OT SECURITY',
    title: 'OT Remote Access Zero Trust',
    url: 'https://www.beyondtrust.com/blog/entry/ot-remote-access-zero-trust',
    date: 'Sep-26',
  },
  {
    category: 'VULNERABILITY',
    title: 'Amazon Bedrock AgentCore Python SDK RCE CVEs',
    url: 'https://www.beyondtrust.com/blog/entry/amazon-bedrock-agentcore-python-sdk-rce-cves',
    date: 'Sep-26',
  },
];

const anyDeskContent: ContentItem[] = [
  {
    category: 'REMOTE MANAGEMENT',
    title: 'Remote Device Management Best Practices',
    url: 'https://anydesk.com/blog/remote-device-management-best-practices',
    date: 'Sep-26',
  },
];

type Tab = 'teamviewer' | 'beyondtrust' | 'anydesk';

const TAB_CONFIG: Record<Tab, { label: string; color: string; activeClass: string; description: string }> = {
  teamviewer: {
    label: 'TeamViewer',
    color: '#2563EB',
    activeClass: 'bg-blue-600 text-white shadow-md',
    description: 'Sep 2026 content covering manufacturing fragmentation, digital friction impact, product updates (TeamViewer Voices), and MCP integration.',
  },
  beyondtrust: {
    label: 'BeyondTrust',
    color: '#DC2626',
    activeClass: 'bg-red-600 text-white shadow-md',
    description: 'Sep 2026 content covering AI-powered support, password security, AI agent threats (Codex), frontier AI, OT remote access zero trust, and AWS AgentCore vulnerability research.',
  },
  anydesk: {
    label: 'AnyDesk',
    color: '#16A34A',
    activeClass: 'bg-green-600 text-white shadow-md',
    description: 'Sep 2026 content covering remote device management best practices.',
  },
};

const CONTENT_MAP: Record<Tab, ContentItem[]> = {
  teamviewer: teamviewerContent,
  beyondtrust: beyondtrustContent,
  anydesk: anyDeskContent,
};

const BG_MAP: Record<Tab, string> = {
  teamviewer: 'from-blue-50 to-blue-100',
  beyondtrust: 'from-red-50 to-red-100',
  anydesk: 'from-green-50 to-green-100',
};

const ICON_MAP: Record<Tab, string> = {
  teamviewer: 'bg-blue-600',
  beyondtrust: 'bg-red-600',
  anydesk: 'bg-green-600',
};

const BADGE_MAP: Record<Tab, string> = {
  teamviewer: 'bg-blue-600',
  beyondtrust: 'bg-red-600',
  anydesk: 'bg-green-600',
};

const CARD_MAP: Record<Tab, string> = {
  teamviewer: 'hover:border-blue-300',
  beyondtrust: 'hover:border-red-300',
  anydesk: 'hover:border-green-300',
};

const CARD_TITLE_MAP: Record<Tab, string> = {
  teamviewer: 'group-hover:text-blue-600',
  beyondtrust: 'group-hover:text-red-600',
  anydesk: 'group-hover:text-green-600',
};

const LINK_MAP: Record<Tab, string> = {
  teamviewer: 'group-hover:text-blue-600',
  beyondtrust: 'group-hover:text-red-600',
  anydesk: 'group-hover:text-green-600',
};

export function SlideContentGap({ onNavigateHome }: { onNavigateHome?: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>('teamviewer');

  const currentContent = CONTENT_MAP[activeTab];
  const config = TAB_CONFIG[activeTab];

  return (
    <SlideContainer slideNumber={19} onNavigateHome={onNavigateHome} source="">
      <SlideHeader title="Content Gap" subtitle="" />

      <div className="flex-1 flex flex-col gap-4 pb-4">
        {/* Tab Navigation */}
        <div className="flex items-start gap-2">
          {(Object.keys(TAB_CONFIG) as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg ${
                activeTab === tab
                  ? TAB_CONFIG[tab].activeClass
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {TAB_CONFIG[tab].label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className={`flex-1 bg-gradient-to-br ${BG_MAP[activeTab]} rounded-xl p-6 flex flex-col`}>
          {/* Header Section */}
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-12 h-12 ${ICON_MAP[activeTab]} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-bold text-gray-900">New Pages Added in Sep 2026</h3>
                <span className={`px-3 py-1 ${BADGE_MAP[activeTab]} text-white text-xs font-bold rounded-full`}>
                  {currentContent.length} NEW {currentContent.length === 1 ? 'PAGE' : 'PAGES'}
                </span>
              </div>
              <p className="text-sm text-gray-700">{config.description}</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-2 gap-4">
              {currentContent.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white rounded-lg p-4 border border-gray-200 ${CARD_MAP[activeTab]} hover:shadow-md transition-all group`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {item.category}
                    </span>
                    <ExternalLink className={`w-3.5 h-3.5 text-gray-400 ${LINK_MAP[activeTab]} transition-colors flex-shrink-0`} />
                  </div>
                  <h4 className={`text-sm font-bold text-gray-900 mb-2 leading-snug ${CARD_TITLE_MAP[activeTab]} transition-colors`}>
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500">Published: {item.date}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideContainer>
  );
}
