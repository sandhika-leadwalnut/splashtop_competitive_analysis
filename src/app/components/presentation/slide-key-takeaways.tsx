import { TrendingUp, Zap, Globe, Eye, Layers, Link, AlertTriangle, FileText } from 'lucide-react';
import { SlideContainer, SlideHeader, SlideFooter } from './design-system';

interface Takeaway {
  id: string;
  index: string;
  icon: any;
  iconBg: string;
  iconColor: string;
  metricBadge: string;
  metricBg: string;
  metricText: string;
  title: string;
  body: string;
}

const takeaways: Takeaway[] = [
  {
    id: 'traffic-growth',
    index: '1',
    icon: TrendingUp,
    iconBg: 'bg-red-50',
    iconColor: '#EF4444',
    metricBadge: 'ORGANIC TRAFFIC 184K | NON-BRANDED 86K',
    metricBg: 'bg-red-500',
    metricText: '184K',
    title: 'Sustained Organic Traffic Growth',
    body: 'Reached 184K total organic traffic in Jul 2026 (up from 142K Oct 2025, +29.6%). Non-branded grew 39K→86K (+121%) Oct–Jul. Consistent upward trend maintained while competitors experience volatility.',
  },
  {
    id: 'ai-visibility',
    index: '2',
    icon: Zap,
    iconBg: 'bg-amber-50',
    iconColor: '#F59E0B',
    metricBadge: 'AI KEYWORDS +154% | AI TRAFFIC 11.9K',
    metricBg: 'bg-amber-500',
    metricText: '2.8K',
    title: 'AI Overview Dominance Established',
    body: 'AI keywords grew 1,117→2,837 (+154%) and AI traffic reached 11,931 in Jul 2026 (Oct–Jul). Leading all competitors in AI-driven discovery and engagement.',
  },
  {
    id: 'keyword-coverage',
    index: '3',
    icon: Layers,
    iconBg: 'bg-purple-50',
    iconColor: '#8B5CF6',
    metricBadge: 'PAGE-1 KEYWORDS 8K | TOTAL KEYWORDS 36K',
    metricBg: 'bg-purple-500',
    metricText: '8K',
    title: 'Quality Over Quantity Strategy in Action',
    body: 'Page-1 keywords held at 8K while total organic keywords reached 36K in Jul 2026 (Oct–Jul). Focused pivot to higher-value, conversion-driven rankings over broad volume.',
  },
  {
    id: 'backlink-profile',
    index: '4',
    icon: Link,
    iconBg: 'bg-sky-50',
    iconColor: '#0EA5E9',
    metricBadge: 'REFERRING DOMAINS 18.1K | BACKLINKS 0.74M',
    metricBg: 'bg-sky-500',
    metricText: '18K',
    title: 'Authority Growth with Profile Consolidation',
    body: 'Referring domains reached 18,139 with 742,445 backlinks in Jul 2026. Quality domain authority maintained and growing while link profile consolidation continues.',
  },
  {
    id: 'keyword-gaps',
    index: '5',
    icon: AlertTriangle,
    iconBg: 'bg-orange-50',
    iconColor: '#F97316',
    metricBadge: '11 OPPORTUNITY KEYWORDS IDENTIFIED',
    metricBg: 'bg-orange-500',
    metricText: '11',
    title: 'Strategic Keyword Opportunities Mapped',
    body: 'Analysis revealed 2 missing keywords, 6 untapped high-volume terms (including "it support" 40.5K MSV, "endpoint security" 8.1K MSV), and 3 weak positions where competitors lead.',
  },
  {
    id: 'content-gaps',
    index: '6',
    icon: FileText,
    iconBg: 'bg-indigo-50',
    iconColor: '#6366F1',
    metricBadge: 'COMPETITORS: 13 NEW PAGES (JUL)',
    metricBg: 'bg-indigo-500',
    metricText: '13',
    title: 'Competitor Content Acceleration Detected',
    body: 'TeamViewer published 6 and BeyondTrust published 6 new pages in Jul 2026, focusing on AI workplace autonomy, industry recognition, cloud/AI security threats, and ITSM security.',
  },
];

export function SlideKeyTakeaways({ onNavigateHome }: { onNavigateHome?: () => void }) {
  return (
    <SlideContainer slideNumber={22} onNavigateHome={onNavigateHome} source="">
      <SlideHeader
        title="Key Takeaways – Overall Performance"
        subtitle="Oct 2025 - Jul 2026"
      />

      <div className="text-xs text-gray-500 mb-4">
        Jul 2026 · Splashtop vs. Competitors
      </div>

      <div className="flex-1 grid grid-cols-2 gap-4 pb-4 min-h-0 overflow-y-auto">
        {takeaways.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.id}
              className="relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: t.iconColor }}
              />

              <div className="p-5 flex flex-col gap-3 pt-6">
                {/* Number + Icon row */}
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: t.iconColor }}
                  >
                    {t.index}
                  </div>
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${t.iconColor}15` }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: t.iconColor }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-900 leading-snug">{t.title}</h3>

                {/* Metric Badge */}
                <div className="flex-shrink-0">
                  <span
                    className="text-xs font-bold uppercase tracking-wide"
                    style={{ color: t.iconColor }}
                  >
                    {t.metricBadge}
                  </span>
                </div>

                {/* Body */}
                <p className="text-xs text-gray-600 leading-relaxed">{t.body}</p>
              </div>
            </div>
          );
        })}
      </div>

      <SlideFooter />
    </SlideContainer>
  );
}
