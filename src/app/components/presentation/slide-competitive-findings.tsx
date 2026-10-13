<<<<<<< HEAD
import { ExternalLink, Globe, Layers, Star, Play } from 'lucide-react';
=======
import { ExternalLink, Shield, Award, Cpu } from 'lucide-react';
>>>>>>> origin/main
import { useState } from 'react';
import {
  SlideContainer,
  SlideHeader,
  SlideFooter,
} from './design-system';

<<<<<<< HEAD
import imgSepTab1 from '@/imports/sep_tab_1-1.png';
import imgSepTab2 from '@/imports/sep_tab_2-2.png';
import imgSepTab3 from '@/imports/sep_tab_3-1.png';
import imgSepTab4 from '@/imports/sep_tab_4.png';
=======
import imgAug1 from '@/imports/aug_1.png';
import imgAug2 from '@/imports/aug_2.png';
import imgAug3 from '@/imports/aug_3.png';
>>>>>>> origin/main


interface Reference {
  label: string;
  url: string;
}

interface Finding {
  id: string;
  icon: any;
  color: string;
  bgColor: string;
  title: string;
  competitor: string;
  pageUrl: string;
  pageUrlDisplay: string;
  summary: string;
  opportunity?: string;
  bullets: string[];
  references: Reference[];
  screenshot: string | string[] | null;
}

const findings: Finding[] = [
  {
<<<<<<< HEAD
    id: 'teamviewer-homepage-integrations',
    icon: Globe,
    color: '#2563EB',
    bgColor: '#EFF6FF',
    title: 'Highlights Key Integrations on the Homepage',
    competitor: 'TeamViewer',
    pageUrl: 'https://www.teamviewer.com/en-mea/',
    pageUrlDisplay: 'teamviewer.com/en-mea',
    summary:
      'TeamViewer prominently showcases key integrations such as Microsoft Intune, ServiceNow, Freshworks, Jira, Salesforce, Zendesk, Slack, and Microsoft Teams on its homepage, with a direct link to its integrations page. Splashtop has an integrations page but does not currently surface integrations on the homepage.',
    opportunity:
      'Add a dedicated integrations section to the Splashtop homepage featuring key enterprise integrations and linking to the full integrations page to improve discoverability and reinforce enterprise ecosystem compatibility.',
    bullets: [],
    references: [
      {
        label: 'TeamViewer – Homepage (MEA)',
        url: 'https://www.teamviewer.com/en-mea/',
      },
    ],
    screenshot: imgSepTab1,
  },
  {
    id: 'teamviewer-homepage-addons',
    icon: Layers,
    color: '#7C3AED',
    bgColor: '#F5F3FF',
    title: 'Drives Add-On Discovery From the Homepage',
    competitor: 'TeamViewer',
    pageUrl: 'https://www.teamviewer.com/en-mea/',
    pageUrlDisplay: 'teamviewer.com/en-mea',
    summary:
      'TeamViewer prominently showcases add-ons such as Asset Management, Mobile Device Management, Device Monitoring, and Endpoint Protection on its homepage, giving these offerings direct visibility alongside its core remote access portfolio. Splashtop does not currently provide comparable homepage exposure for its add-ons.',
    opportunity:
      'Feature key Splashtop add-ons on the homepage to increase their discoverability and communicate the broader range of solutions available beyond its core remote access and support offerings.',
    bullets: [],
    references: [
      {
        label: 'TeamViewer – Homepage (MEA)',
        url: 'https://www.teamviewer.com/en-mea/',
      },
    ],
    screenshot: imgSepTab2,
  },
  {
    id: 'teamviewer-product-customer-proof',
    icon: Star,
    color: '#059669',
    bgColor: '#ECFDF5',
    title: 'Brings Customer Proof Into Product Pages',
    competitor: 'TeamViewer',
    pageUrl: 'https://www.teamviewer.com/en-mea/products/remote',
    pageUrlDisplay: 'teamviewer.com/en-mea/products/remote',
    summary:
      'TeamViewer features customer success stories directly within its product pages, giving visitors relevant customer proof while evaluating the solution. Splashtop has strong case studies available but does not currently link relevant customer stories from its corresponding product pages.',
    opportunity:
      'Add relevant case study links or customer success sections to key Splashtop product pages to strengthen social proof, support consideration-stage users, and create additional internal linking pathways to existing case studies.',
    bullets: [],
    references: [
      {
        label: 'TeamViewer – Products / Remote',
        url: 'https://www.teamviewer.com/en-mea/products/remote',
      },
    ],
    screenshot: imgSepTab3,
  },
  {
    id: 'ninjaone-video-content-hub',
    icon: Play,
    color: '#D97706',
    bgColor: '#FFFBEB',
    title: 'Has a Dedicated Video Content Hub',
    competitor: 'NinjaOne',
    pageUrl: 'https://www.ninjaone.com/videos/',
    pageUrlDisplay: 'ninjaone.com/videos',
    summary:
      'NinjaOne has built a dedicated IT Video Hub with individual video pages organized across key IT topics such as Remote Access, RMM, Endpoint Management, Security, and Patch Management. The videos are hosted within NinjaOne\'s website experience rather than relying solely on YouTube, creating a structured, owned content layer that is actively being expanded.',
    opportunity:
      'Splashtop currently has limited video content published as standalone website pages beyond product/demo content. Consider starting with high-value existing YouTube videos and creating dedicated website pages for selected videos, organized around priority categories and topics, to expand owned content coverage and create additional opportunities for organic search and AI visibility.',
    bullets: [],
    references: [
      {
        label: 'NinjaOne – Videos',
        url: 'https://www.ninjaone.com/videos/',
      },
    ],
    screenshot: imgSepTab4,
=======
    id: 'homepage-case-study-strategy',
    icon: Cpu,
    color: '#7C3AED',
    bgColor: '#F5F3FF',
    title: 'Homepage Case Study Strategy Highlights Product Portfolio & Customer Success',
    competitor: 'TeamViewer',
    pageUrl: 'https://www.teamviewer.com/en-us/',
    pageUrlDisplay: 'teamviewer.com/en-us',
    summary:
      'TeamViewer\'s homepage features multiple customer case studies across different products, with links to individual stories and a centralized case study hub. Splashtop showcases only a single case study, limiting visibility into its broader product portfolio and customer success.',
    opportunity:
      'Highlight multiple customer success stories for different products and industries on the homepage, with a CTA to the case study hub to improve product discovery, credibility, and engagement.',
    bullets: [
      'Rems-Murr-Kliniken goes paperless with TeamViewer Tensor — showcasing digital transformation in healthcare.',
      'MEDIFOX DAN relies on in-app support for customer care — demonstrating software/healthcare integration.',
      'DB Schenker overcomes logistics challenges with TeamViewer Frontline Pick — highlighting AR-powered field workflows.',
      '"Discover more" CTA links directly to the centralized case study hub, driving deeper product discovery.',
    ],
    references: [
      {
        label: 'TeamViewer – Homepage',
        url: 'https://www.teamviewer.com/en-us/',
      },
    ],
    screenshot: imgAug1,
  },
  {
    id: 'interactive-product-showcase',
    icon: Shield,
    color: '#0EA5E9',
    bgColor: '#F0F9FF',
    title: 'Interactive Product Showcase Improves Product Discovery and User Experience',
    competitor: 'NinjaOne',
    pageUrl: 'https://www.ninjaone.com/',
    pageUrlDisplay: 'ninjaone.com',
    summary:
      'NinjaOne presents its solutions through an interactive, visual showcase with concise messaging, product screenshots, and customer testimonials on the homepage. This creates a more engaging and easier-to-scan experience than Splashtop\'s text-heavy product cards, helping visitors quickly understand each solution\'s value.',
    opportunity:
      'Replace static product cards with an interactive product showcase featuring product visuals, concise value propositions, and customer proof to improve product discovery, engagement, and conversion.',
    bullets: [
      'Interactive tab navigation spans 7 product areas: Endpoint Management, Mobile Device Management, Patch Management, Backup, Remote Control, Service Desk, and Integrations.',
      '"Endpoint Management, Unified" — product screenshot paired with a concise value proposition and a "Learn more" CTA in a single scannable panel.',
      'Vetcor customer proof: "15,000 endpoints managed" prominently displayed alongside the product visual.',
      '"Before, I needed 10–15 different tools... NinjaOne makes life so much easier." — Ernie Turner, Director of IT, Vetcor. Direct customer validation co-located with product screenshots.',
    ],
    references: [
      { label: 'NinjaOne – Homepage', url: 'https://www.ninjaone.com/' },
    ],
    screenshot: imgAug2,
  },
  {
    id: 'product-page-structure-value-trust',
    icon: Award,
    color: '#059669',
    bgColor: '#ECFDF5',
    title: 'Product Page Structure Prioritizes Value and Trust Before Conversion',
    competitor: 'NinjaOne',
    pageUrl: 'https://www.ninjaone.com/patch-management/',
    pageUrlDisplay: 'ninjaone.com/patch-management',
    summary:
      'NinjaOne structures its product page to first communicate key capabilities and customer outcomes, reinforcing them with customer testimonials, third-party recognitions, and review platform ratings before introducing pricing and plan selection. In contrast, Splashtop surfaces plan selection earlier in the page and relies primarily on customer testimonials as its primary trust element.',
    opportunity:
      'Restructure the product page to lead with product value, business outcomes, and diverse third-party validation before introducing pricing and plan selection. This can build visitor confidence earlier in the buying journey and create a stronger path to conversion.',
    bullets: [
      '720% three-year return on investment — quantified ROI positioned prominently before pricing to anchor value.',
      '$1M annual efficiency benefits per 5,000 endpoints — specific financial outcome that resonates with enterprise buyers.',
      '4-month payback on investment — short payback period reinforces fast time-to-value and reduces purchase risk.',
      '"About 25 people are roughly 80% more effective using the platform." — customer quote co-located with outcome stats to validate the numbers with real-world proof.',
    ],
    references: [
      {
        label: 'NinjaOne – Patch Management',
        url: 'https://www.ninjaone.com/patch-management/',
      },
    ],
    screenshot: imgAug3,
>>>>>>> origin/main
  },
];

export function SlideCompetitiveFindings({ onNavigateHome }: { onNavigateHome?: () => void }) {
  const [selectedFinding, setSelectedFinding] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const active = findings[selectedFinding];

  return (
    <SlideContainer slideNumber={21} onNavigateHome={onNavigateHome} source="">
      <SlideHeader
        title="Web Experience"
        subtitle="Strategic Observations from Competitor Websites"
      />

      <div className="flex-1 flex flex-col gap-3 pb-4 overflow-hidden">

        {/* ── Tab Row ── */}
        <div className="flex-shrink-0">
          {/* Tabs */}
          <div className="flex gap-3 overflow-x-auto pb-1">
            {findings.map((f, idx) => {
              const Icon = f.icon;
              const isSelected = selectedFinding === idx;
              return (
                <button
                  key={f.id}
                  onClick={() => setSelectedFinding(idx)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border-2 transition-all duration-200 flex-shrink-0 ${
                    isSelected
                      ? 'border-red-500 bg-white shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: f.bgColor }}
                  >
                    <Icon className="w-4 h-4" style={{ color: f.color }} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 leading-tight">{f.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: f.color }}>{f.competitor}</p>
                  </div>
                  {isSelected && (
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 ml-1 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Content Panel ── */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col min-h-0">

          {/* Panel Header */}
          <div className="flex-shrink-0 flex items-center justify-between gap-3 px-5 py-3.5 border-b border-gray-100 bg-gray-50/60">
            {(() => {
              const Icon = active.icon;
              return (
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: active.bgColor }}
                  >
                    <Icon className="w-4 h-4" style={{ color: active.color }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{active.title}</h3>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: active.color }}
                    >
                      {active.competitor}
                    </span>
                  </div>
                </div>
              );
            })()}
            <a
              href={active.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 transition-colors flex-shrink-0 max-w-[40%] truncate"
            >
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{active.pageUrlDisplay}</span>
            </a>
          </div>

          {/* Two-column body */}
          <div className="flex-1 flex overflow-hidden min-h-0">

            {/* Left — summary + bullets + references */}
            <div className="w-[40%] flex-shrink-0 flex flex-col px-5 py-4 border-r border-gray-100 overflow-y-auto gap-4">

              {/* Summary / Insight */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5">Insight</p>
                <p className="text-xs text-gray-600 leading-relaxed">{active.summary}</p>
              </div>

              {/* Opportunity */}
              {active.opportunity && (
                <div className="rounded-lg p-3 border" style={{ backgroundColor: `${active.color}0D`, borderColor: `${active.color}33` }}>
                  <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: active.color }}>Opportunity</p>
                  <p className="text-xs leading-relaxed" style={{ color: active.color }}>{active.opportunity}</p>
                </div>
              )}

              {/* References */}
              {active.references.length > 0 && (
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">References</p>
                  <ul className="space-y-2">
                    {active.references.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: active.color }}
                        />
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors leading-relaxed"
                        >
                          {r.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right — Screenshot */}
            <div className="flex-1 bg-gray-50 overflow-y-auto p-4">
              {!active.screenshot ? (
                <div className="h-full flex flex-col items-center justify-center gap-3 text-gray-400">
                  <div className="w-16 h-16 rounded-xl bg-gray-200 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-400">Screenshot not available</p>
                  <a href={active.pageUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">
                    View page →
                  </a>
                </div>
              ) : Array.isArray(active.screenshot) ? (
                <div className="space-y-4">
                  {active.screenshot.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-zoom-in hover:shadow-md transition-shadow border border-gray-100"
                      onClick={() => setLightboxImage(img)}
                    >
                      <img
                        src={img}
                        alt={`${active.title} ${idx + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ))}
                  <p className="text-xs text-gray-400 text-center">Click to enlarge</p>
                </div>
              ) : (
                <>
                  <div
                    className="bg-white rounded-lg shadow-sm overflow-hidden cursor-zoom-in hover:shadow-md transition-shadow border border-gray-100"
                    onClick={() => setLightboxImage(active.screenshot as string)}
                  >
                    <img
                      src={active.screenshot}
                      alt={active.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-400 text-center mt-2">Click to enlarge</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-light w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>
          <div className="max-w-7xl max-h-full overflow-auto">
            <img
              src={lightboxImage}
              alt="Enlarged view"
              className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <SlideFooter />
    </SlideContainer>
  );
}
