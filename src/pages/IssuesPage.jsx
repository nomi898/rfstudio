import issue1After from '../assets/ISSUE1_GetStarted_button_after.png'
import issue1Before from '../assets/ISSUE1_GetStarted_button_before.png'
import issue2After from '../assets/ISSUE2_Side_Bar_menu_Disappear_after.png'
import issue2Before from '../assets/ISSUE2_Side_Bar_menu_Disappear_before.png'
import issue3Before from '../assets/ISsue3_layout of Magento tab before.png'
import issue3After from '../assets/ISsue3_layout of Magento_tab_after.png'
import issue4After from '../assets/issue4_partnertab_layout_after.png'
import issue4Before from '../assets/issue4_partnertab_layout_before.png'

const solvedIssues = [
  {
    id: 'header-cta',
    title: 'Mobile header CTA added',
    problem:
      'The original mobile header only showed the logo and menu icon, so users had to open the sidebar or scroll down before finding a contact action.',
    solution:
      'The solved version keeps a visible Get Started button in the mobile header for faster access and better lead generation.',
    beforeLabel: 'Before: CTA hidden in mobile header',
    afterLabel: 'After: Get Started visible in header',
    beforeImage: issue1Before,
    afterImage: issue1After,
  },
  {
    id: 'mobile-menu',
    title: 'Digital Experience menu stays visible',
    problem:
      'In the original mobile sidebar, the Digital Experience dropdown opened but the submenu content disappeared or rendered empty.',
    solution:
      'The solved version uses a stable accordion so Shopify, WooCommerce, and Magento remain visible after expansion.',
    beforeLabel: 'Before: submenu disappears',
    afterLabel: 'After: submenu remains open',
    beforeImage: issue2Before,
    afterImage: issue2After,
  },
  {
    id: 'magento-layout',
    title: 'Magento mobile misalignment fixed',
    problem:
      'The original Adobe Commerce / Magento page drifted to one side on mobile and created an uneven layout with poor text balance.',
    solution:
      'The solved version uses a centered responsive container, balanced padding, and clipped overflow so the page stays aligned.',
    beforeLabel: 'Before: Magento layout misaligned',
    afterLabel: 'After: centered Magento layout',
    beforeImage: issue3Before,
    afterImage: issue3After,
  },
  {
    id: 'partners-layout',
    title: 'Partners illustration no longer overlaps',
    problem:
      'On the original partners layout, the handshake illustration overlapped the copy and broke the reading flow on smaller screens.',
    solution:
      'The solved version stacks content properly and constrains the image so it stays inside the section without covering text.',
    beforeLabel: 'Before: partner image overlap',
    afterLabel: 'After: partner image contained',
    beforeImage: issue4Before,
    afterImage: issue4After,
  },
]

const IssuesPage = () => {
  return (
    <div className="bg-[#f4f4f5] px-4 py-12 text-slate-950 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(135deg,rgba(238,242,255,1),rgba(255,255,255,1))] px-6 py-10 text-center shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:px-8 lg:px-12">
          <div className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-blue-700">
            <span className="h-px w-11 bg-blue-700" />
            Issues Solved
          </div>
          <h1 className="mx-auto mt-6 max-w-5xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-6xl">
            Before and after improvements for the exact UX issues identified
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-slate-600">
            Each comparison below uses the real screenshots you uploaded for the original issue and the solved version.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {solvedIssues.map((issue) => (
            <article
              key={issue.id}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(340px,0.9fr)] lg:items-start">
                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    { label: issue.beforeLabel, tone: 'before', image: issue.beforeImage },
                    { label: issue.afterLabel, tone: 'after', image: issue.afterImage },
                  ].map((panel) => (
                    <div key={panel.label} className="space-y-3">
                      <p
                        className={`text-sm font-black uppercase tracking-[0.18em] ${
                          panel.tone === 'after' ? 'text-blue-700' : 'text-slate-500'
                        }`}
                      >
                        {panel.label}
                      </p>
                      <div className="flex min-h-[28rem] items-center justify-center rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] p-4">
                        <img
                          src={panel.image}
                          alt={panel.label}
                          className="h-auto max-h-[44rem] w-full max-w-[24rem] rounded-[1.7rem] border border-slate-300 object-contain shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950">{issue.title}</h2>
                  <div className="mt-6 rounded-[1.5rem] bg-slate-50 p-5">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Problem</p>
                    <p className="mt-3 text-lg leading-8 text-slate-600">{issue.problem}</p>
                  </div>
                  <div className="mt-4 rounded-[1.5rem] bg-blue-50 p-5">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">Solved</p>
                    <p className="mt-3 text-lg leading-8 text-slate-700">{issue.solution}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IssuesPage
