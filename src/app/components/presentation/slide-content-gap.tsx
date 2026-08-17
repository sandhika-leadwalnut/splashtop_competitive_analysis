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
    category: 'INDUSTRY RECOGNITION',
    title: 'TeamViewer Tops Frost & Sullivan\'s 2026 AR-Centric Augmented Connected Worker Rankings',
    url: 'https://www.teamviewer.com/en-in/global/company/press/2026/teamviewer-tops-frost-sullivans-2026-ar-centric-augmented-connected-worker-rankings/',
    date: 'Jul-26',
  },
  {
    category: 'IT AUTOMATION',
    title: 'TeamViewer Natural Language Scripting for DEX & IT Automation',
    url: 'https://www.teamviewer.com/en-in/global/company/press/2026/teamviewer-natural-language-scripting-dex-it-automation/',
    date: 'Jul-26',
  },
  {
    category: 'INDUSTRY RECOGNITION',
    title: 'TeamViewer Named Leader in IDC MarketScape Worldwide Digital Employee Experience 2026',
    url: 'https://www.teamviewer.com/en-in/global/company/press/2026/teamviewer-idc-marketscape-worldwide-digital-employee-experience-2026-leader/',
    date: 'Jul-26',
  },
  {
    category: 'AI WORKPLACE',
    title: 'AI Workplace Autonomy – Global Research Study',
    url: 'https://www.teamviewer.com/en-in/global/company/press/2026/ai-workplace-autonomy-global-research/',
    date: 'Jul-26',
  },
  {
    category: 'PARTNERSHIPS',
    title: 'TeamViewer & ServiceNow Launch Strategic Partnership to Accelerate Autonomous IT Operations',
    url: 'https://www.teamviewer.com/en-in/global/company/press/2026/teamviewer-servicenow-launch-strategic-partnership-accelerate-autonomous-it-operations/',
    date: 'Jul-26',
  },
  {
    category: 'INDUSTRY RECOGNITION',
    title: 'TeamViewer Named Best Connected Worker Platform – PAC Innovation Radar 2026',
    url: 'https://www.teamviewer.com/en-in/global/company/press/2026/teamviewer-best-connected-worker-platform-pac-innovation-radar-2026/',
    date: 'Jul-26',
  },
];

const beyondtrustContent: ContentItem[] = [
  {
    category: 'CLOUD SECURITY',
    title: 'Salesforce OAuth Attacks via Trusted Integrations',
    url: 'https://www.beyondtrust.com/blog/entry/salesforce-oauth-attacks-trusted-integrations',
    date: 'Jul-26',
  },
  {
    category: 'ITSM SECURITY',
    title: 'ServiceNow Security Boundaries, ACL Scope & RCA',
    url: 'https://www.beyondtrust.com/blog/entry/servicenow-security-boundaries-acl-scope-rca',
    date: 'Jul-26',
  },
  {
    category: 'AI SECURITY',
    title: 'OpenAI Codex Remote Control & C2 Abuse',
    url: 'https://www.beyondtrust.com/blog/entry/open-ai-codex-remote-control-c2-abuse',
    date: 'Jul-26',
  },
  {
    category: 'ITSM SECURITY',
    title: 'ITSM Security: BeyondTrust + Atlassian Jira Integration',
    url: 'https://www.beyondtrust.com/blog/entry/itsm-security-beyondtrust-atlassian-jira',
    date: 'Jul-26',
  },
  {
    category: 'PRODUCT UPDATE',
    title: 'Privileged Remote Access 26.2',
    url: 'https://www.beyondtrust.com/blog/entry/privileged-remote-access-26-2',
    date: 'Jul-26',
  },
  {
    category: 'VULNERABILITY RESEARCH',
    title: 'Microsoft Vulnerabilities Report',
    url: 'https://www.beyondtrust.com/blog/entry/microsoft-vulnerabilities-report',
    date: 'Jul-26',
  },
];

const anyDeskContent: ContentItem[] = [
  {
    category: 'REMOTE ACCESS',
    title: 'Secure Remote Access Best Practices',
    url: 'https://anydesk.com/blog/secure-remote-access-best-practices',
    date: 'Jul-26',
  },
];

type Tab = 'teamviewer' | 'beyondtrust' | 'anydesk';

const TAB_CONFIG: Record<Tab, { label: string; color: string; activeClass: string; description: string }> = {
  teamviewer: {
    label: 'TeamViewer',
    color: '#2563EB',
    activeClass: 'bg-blue-600 text-white shadow-md',
    description: 'Recent content focused on industry recognition (Frost & Sullivan, IDC MarketScape, PAC), AI workplace autonomy, and strategic ServiceNow partnership.',
  },
  beyondtrust: {
    label: 'BeyondTrust',
    color: '#DC2626',
    activeClass: 'bg-red-600 text-white shadow-md',
    description: 'Recent content covering cloud & AI security threats (Salesforce OAuth, OpenAI Codex C2), ITSM security with Atlassian Jira, and the Microsoft Vulnerabilities Report.',
  },
  anydesk: {
    label: 'AnyDesk',
    color: '#16A34A',
    activeClass: 'bg-green-600 text-white shadow-md',
    description: 'Recent content focusing on secure remote access best practices and enterprise security guidance.',
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
                <h3 className="text-lg font-bold text-gray-900">New Pages Added in Jul 2026</h3>
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
