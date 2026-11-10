// ════════════════════════════════════════════════════════════════════════
// ALL PUBLICATIONS — used on the Home page (featured: true) and on Research.
//
// To add a publication: copy one block { ... }, paste it at the top of the
// right list, and change the values.
//   oa:        'gold' | 'green' | 'diamond' (leave out if not applicable)
//   url:       link to the published version
//   aam:       link to the accepted author manuscript (optional)
//   abstract:  shown as a fold-out under the title (optional)
//   featured:  true = also shown on the Home page
// ════════════════════════════════════════════════════════════════════════

const me = '<strong>Bernaerts, K.</strong>';
const caluwaerts = '<a href="https://scholar.google.com/citations?hl=en&user=Eyhy4K4AAAAJ" target="_blank" rel="noopener">Caluwaerts, D.</a>';
const blanckaert = '<a href="https://scholar.google.com/citations?user=VhNtu44AAAAJ&hl=nl" target="_blank" rel="noopener">Blanckaert, B.</a>';
const junius = '<a href="https://scholar.google.com/citations?user=kJq4HeoAAAAJ&hl=en" target="_blank" rel="noopener">Junius, N.</a>';
const matthieu = '<a href="https://scholar.google.com/citations?hl=en&user=iyrtL4gAAAAJ" target="_blank" rel="noopener">Matthieu, J.</a>';
const kesberg = '<a href="https://scholar.google.com/citations?hl=en&user=mMw8rIQAAAAJ" target="_blank" rel="noopener">Kesberg, R.</a>';
const smets = '<a href="https://scholar.google.com/citations?hl=en&user=iRXtVgEAAAAJ" target="_blank" rel="noopener">Smets, L.</a>';
const spruyt = '<a href="https://scholar.google.com/citations?hl=en&user=Y0dfefMAAAAJ" target="_blank" rel="noopener">Spruyt, B.</a>';

// PLACEHOLDER — replace with the official abstract of each article.
const ABSTRACT_TODO = '<p><em>[Placeholder: the official abstract of this article goes here.]</em></p>';

const dissertationAbstract = `
<p>The relationship between political polarisation and democracy has become a central concern in political science, yet the nature of this connection remains contested. This dissertation addresses the puzzle by arguing that to understand the democratic implications of polarisation, we must distinguish between different types of polarisation and different types of democratic institutional design. Drawing on a survey experiment in Belgium and the UK, and cross-national data from over 100 countries globally, my dissertation reveals that not all polarisation is equally detrimental. Affective polarisation measured as dislike toward political parties shows little to no negative relationship with democratic attitudes. A more significant concern emerges when polarisation is rooted in societal conflicts such as "wokeness". When divisions manifest as social distance and negative emotions — such as anger or hate — they correlate strongly with increased political intolerance and support for political violence and lower commitment to liberal democracy.</p>
<p>At the same time, my PhD dissertation also demonstrates that democracies are not defenseless against the consequences of polarisation. The findings indicate that political systems built on consensus and power-sharing are associated with lower levels of polarisation compared to majoritarian systems. Crucially, consensus-based institutions can act as a buffer, weakening the link between high levels of polarisation and its most destructive outcomes. Ultimately, my PhD offers a nuanced perspective on political conflict. It moves beyond the narrative that polarisation is uniformly harmful to show that conflict is a normal part of politics. The question should not be how to eliminate division, but how to build robust democratic systems that can channel it productively.</p>`;

export const published = [
  {
    title: 'Polarising alone? The relationship between social contact and affective polarisation in Belgium and the UK',
    authors: `${me} &amp; Junius, N.`,
    venue: 'Acta Politica',
    year: '2026',
    oa: 'green',
    url: 'https://link.springer.com/article/10.1057/s41269-026-00457-2',
    aam: 'https://researchportal.vub.be/en/publications/polarising-alone-the-relationship-between-social-contact-and-affe/',
    abstract: ABSTRACT_TODO,
    featured: true,
  },
  {
    title: 'Hate, not dislike? Understanding anti-democratic attitudes through a multi-dimensional understanding of affective polarization',
    authors: me,
    venue: 'Frontiers in Political Science',
    year: '2026',
    oa: 'gold',
    url: 'https://www.frontiersin.org/journals/political-science/articles/10.3389/fpos.2026.1910557/full',
    abstract: ABSTRACT_TODO,
    featured: true,
  },
  {
    title: 'Affect or emotions? Disaggregating affective polarisation to explain support for liberal democracy in Belgium and the United Kingdom',
    authors: me,
    venue: 'Political Studies Review',
    year: '2026',
    oa: 'green',
    url: 'https://journals.sagepub.com/doi/epub/10.1177/14789299261438223',
    aam: 'https://researchportal.vub.be/en/publications/affect-or-emotions-disaggregating-affective-polarisation-to-expla/',
    abstract: ABSTRACT_TODO,
  },
  {
    title: 'Summary: Friends or foes, does polarisation really undermine democracy? Understanding the two-way relationship between polarisation dynamics and the processes and institutions of democratic contestation',
    authors: me,
    venue: 'Politics of the Low Countries',
    year: '2026',
    oa: 'diamond',
    url: 'https://plc-journal.eu/article/view/25310',
  },
  {
    title: '[Dataset] State of the Unions: survey experiment on various forms of polarisation and democratic consequences in Belgium and the UK',
    authors: `${me}; ${caluwaerts}`,
    venue: 'VUB Institutional Data Repository',
    year: '2026',
    url: 'https://researchportal.vub.be/en/datasets/state-of-the-unions-survey-experiment-on-various-forms-of-polaris/',
  },
  {
    title: 'Friends or foes: does polarisation really undermine democracy? Understanding the two-way relationship between polarisation dynamics and the processes and institutions of democratic contestation',
    authors: me,
    venue: 'VUBPRESS',
    year: '2025 (book)',
    abstract: dissertationAbstract,
  },
  {
    title: 'Fight or unite? Exploring the link between consensus institutions, polarization and political violence in 113 democracies over time (1900–2023)',
    authors: `${me} &amp; ${caluwaerts}`,
    venue: 'International Political Science Review',
    year: '2025',
    oa: 'green',
    url: 'https://journals.sagepub.com/doi/10.1177/01925121251355894',
    aam: 'https://researchportal.vub.be/en/publications/fight-or-unite-exploring-the-link-between-consensus-institutions-/',
    abstract: ABSTRACT_TODO,
    featured: true,
  },
  {
    title: 'Institutional design and polarization. Do consensus democracies fare better in fighting polarization than majoritarian democracies?',
    authors: `${me}, ${blanckaert}; ${caluwaerts}`,
    venue: 'Democratization',
    year: '2023',
    oa: 'gold',
    url: 'https://www.tandfonline.com/doi/full/10.1080/13510347.2022.2117300',
    abstract: ABSTRACT_TODO,
    featured: true,
  },
  {
    title: 'Deliberation and polarization: a multi-disciplinary review',
    authors: `${caluwaerts}, ${me}, ${kesberg}, ${smets}; ${spruyt}`,
    venue: 'Frontiers in Political Science',
    year: '2023',
    oa: 'gold',
    url: 'https://www.frontiersin.org/journals/political-science/articles/10.3389/fpos.2023.1127372/',
    abstract: ABSTRACT_TODO,
  },
];

export const workingPapers = [
  {
    title: 'Beyond the culture wars? Assessing the socio-economic determinants of affective polarization',
    authors: `${me}, ${matthieu}, ${junius}; ${caluwaerts}`,
    year: 'Working paper',
  },
];

export const featured = published.filter((p) => p.featured);
export { dissertationAbstract };
