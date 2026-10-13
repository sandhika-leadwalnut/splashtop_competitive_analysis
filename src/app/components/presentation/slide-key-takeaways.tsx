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
<<<<<<< HEAD
    metricBadge: 'ORGANIC TRAFFIC 183.7K | NON-BRANDED 101K',
    metricBg: 'bg-red-500',
    metricText: '183.7K',
    title: 'Sustained Organic Traffic Growth',
    body: 'Reached 183.7K total organic traffic in Sep 2026 (up from 125K Jul 2025, +47.0%). Non-branded grew 30K→101K (+236.7%) Jul 2025–Sep 2026. Consistent upward trend maintained while competitors experience volatility.',
=======
    metricBadge: 'ORGANIC TRAFFIC 184K | NON-BRANDED 86K',
    metricBg: 'bg-red-500',
    metricText: '184K',
    title: 'Sustained Organic Traffic Growth',
    body: 'Reached 184K total organic traffic in Jul 2026 (up from 142K Oct 2025, +29.6%). Non-branded grew 39K→86K (+121%) Oct–Jul. Consistent upward trend maintained while competitors experience volatility.',
>>>>>>> origin/main
  },
  {
    id: 'ai-visibility',
    index: '2',
    icon: Zap,
    iconBg: 'bg-amber-50',
    iconColor: '#F59E0B',
<<<<<<< HEAD
    metricBadge: 'AI KEYWORDS +131.3% | AI TRAFFIC 21.2K',
    metricBg: 'bg-amber-500',
    metricText: '3.1K',
    title: 'AI Overview Dominance Established',
    body: 'AI keywords grew 1,320→3,053 (+131.3%) and AI traffic grew 1,398→21,179 (+1,415%) Jul 2025–Sep 2026. Leading all competitors in AI-driven discovery and engagement.',
=======
    metricBadge: 'AI KEYWORDS +154% | AI TRAFFIC 11.9K',
    metricBg: 'bg-amber-500',
    metricText: '2.8K',
    title: 'AI Overview Dominance Established',
    body: 'AI keywords grew 1,117→2,837 (+154%) and AI traffic reached 11,931 in Jul 2026 (Oct–Jul). Leading all competitors in AI-driven discovery and engagement.',
>>>>>>> origin/main
  },
  {
    id: 'keyword-coverage',
    index: '3',
    icon: Layers,
    iconBg: 'bg-purple-50',
    iconColor: '#8B5CF6',
<<<<<<< HEAD
    metricBadge: 'PAGE-1 KEYWORDS 9K | SEP 2026',
    metricBg: 'bg-purple-500',
    metricText: '9K',
    title: 'Quality Over Quantity Strategy in Action',
    body: 'Page-1 keywords grew 5K→9K (+80%) Jul 2025–Sep 2026. Focused pivot to higher-value, conversion-driven rankings over broad volume, with consistent gains across remote access and IT management categories.',
=======
    metricBadge: 'PAGE-1 KEYWORDS 8K | TOTAL KEYWORDS 36K',
    metricBg: 'bg-purple-500',
    metricText: '8K',
    title: 'Quality Over Quantity Strategy in Action',
    body: 'Page-1 keywords held at 8K while total organic keywords reached 36K in Jul 2026 (Oct–Jul). Focused pivot to higher-value, conversion-driven rankings over broad volume.',
>>>>>>> origin/main
  },
  {
    id: 'backlink-profile',
    index: '4',
    icon: Link,
    iconBg: 'bg-sky-50',
    iconColor: '#0EA5E9',
<<<<<<< HEAD
    metricBadge: 'REFERRING DOMAINS 18.5K | BACKLINKS 0.98M',
    metricBg: 'bg-sky-500',
    metricText: '18.5K',
    title: 'Authority Growth with Profile Consolidation',
    body: 'Referring domains grew 15,640→18,507 (+18.3%) Jul 2025–Sep 2026. Backlinks consolidated from 3.12M→977K (−68.6%) reflecting profile cleanup and quality consolidation, while domain authority continued to grow.',
=======
    metricBadge: 'REFERRING DOMAINS 18.1K | BACKLINKS 0.74M',
    metricBg: 'bg-sky-500',
    metricText: '18K',
    title: 'Authority Growth with Profile Consolidation',
    body: 'Referring domains reached 18,139 with 742,445 backlinks in Jul 2026. Quality domain authority maintained and growing while link profile consolidation continues.',
>>>>>>> origin/main
  },
  {
    id: 'keyword-gaps',
    index: '5',
    icon: AlertTriangle,
    iconBg: 'bg-orange-50',
    iconColor: '#F97316',
<<<<<<< HEAD
    metricBadge: '27 KEYWORD OPPORTUNITIES IDENTIFIED',
    metricBg: 'bg-orange-500',
    metricText: '27',
    title: 'Strategic Keyword Opportunities Mapped',
    body: 'Analysis revealed 2 missing keywords (incl. "linux remote support tool" 90 MSV), 16 untapped high-volume terms (incl. "endpoint security" 9.9K, "it help desk" 8.1K, "mdm software" 8.1K), and 1 weak position where competitors lead.',
=======
    metricBadge: '11 OPPORTUNITY KEYWORDS IDENTIFIED',
    metricBg: 'bg-orange-500',
    metricText: '11',
    title: 'Strategic Keyword Opportunities Mapped',
    body: 'Analysis revealed 2 missing keywords, 6 untapped high-volume terms (including "it support" 40.5K MSV, "endpoint security" 8.1K MSV), and 3 weak positions where competitors lead.',
>>>>>>> origin/main
  },
  {
    id: 'content-gaps',
    index: '6',
    icon: FileText,
    iconBg: 'bg-indigo-50',
    iconColor: '#6366F1',
<<<<<<< HEAD
    metricBadge: 'COMPETITORS: 11 NEW PAGES (SEP)',
    metricBg: 'bg-indigo-500',
    metricText: '11',
    title: 'Competitor Content Acceleration Detected',
    body: 'TeamViewer published 4, BeyondTrust published 6, and AnyDesk published 1 new page in Sep 2026, covering AI integration, OT security, password defense, and remote device management.',
=======
    metricBadge: 'COMPETITORS: 13 NEW PAGES (JUL)',
    metricBg: 'bg-indigo-500',
    metricText: '13',
    title: 'Competitor Content Acceleration Detected',
    body: 'TeamViewer published 6 and BeyondTrust published 6 new pages in Jul 2026, focusing on AI workplace autonomy, industry recognition, cloud/AI security threats, and ITSM security.',
>>>>>>> origin/main
  },
];

export function SlideKeyTakeaways({ onNavigateHome }: { onNavigateHome?: () => void }) {
  return (
    <SlideContainer slideNumber={22} onNavigateHome={onNavigateHome} source="">
      <SlideHeader
        title="Key Takeaways – Overall Performance"
<<<<<<< HEAD
        subtitle="Jul 2025 - Sep 2026"
      />

      <div className="text-xs text-gray-500 mb-4">
        Sep 2026 · Splashtop vs. Competitors
=======
        subtitle="Oct 2025 - Jul 2026"
      />

      <div className="text-xs text-gray-500 mb-4">
        Jul 2026 · Splashtop vs. Competitors
>>>>>>> origin/main
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
