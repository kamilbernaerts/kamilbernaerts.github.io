// ════════════════════════════════════════════════════════════════════════
// ALL PUBLICATIONS — used on the Home page (featured: true) and on Research.
//
// To add a publication: copy one block { ... }, paste it at the top of the
// right list, and change the values.
//   oa:        'gold' | 'green' | 'diamond' (leave out if not applicable)
//   url:       link to the published version
//   aam:       link to the accepted author manuscript (optional)
//   abstract:  paste the abstract between the two backticks: abstract: `...`
//              It then appears as a fold-out under the title. Leave the
//              backticks empty (``) and no fold-out is shown. For several
//              paragraphs, leave a blank line between them.
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
    abstract: `How does everyday social contact shape affective polarisation? Drawing on original survey data in Belgium and the United Kingdom (N = 2.000), we explore how different degrees and kinds of social contact relate to affective polarisation. While some consider social contact as a driver of polarisation others consider it to be a remedy. Our results provide evidence for the former argument: individuals who are less lonely, more engaged in their communities, and more socially connected tend to be more affectively polarised. However, our results also suggest that the kind of social contact matters. In the UK, we find that bridging ties - contact with people of a different background - are associated with lower levels of affective polarisation once the overall degree of social contact is controlled for. Nevertheless, the general finding remains: polarisation is higher among those with more frequent social contacts, irrespective of the nature of those connections. This indicates that the degree and kind of social contact have an independent, additive effect on affective polarisation. They do not condition one another but rather operate through different social mechanisms.`,
    featured: true,
  },
  {
    title: 'Hate, not dislike? Understanding anti-democratic attitudes through a multi-dimensional understanding of affective polarization',
    authors: me,
    venue: 'Frontiers in Political Science',
    year: '2026',
    oa: 'gold',
    url: 'https://www.frontiersin.org/journals/political-science/articles/10.3389/fpos.2026.1910557/full',
    abstract: `Rising affective polarization (AP) in Western democracies raises concerns about anti-democratic attitudes like political intolerance and support for violence. As prior findings in the field have yielded contrasting results, this paper argues that a more nuanced understanding of AP is needed to better understand this relationship. It does so by examining horizontal AP—polarization toward ordinary citizens rather than toward political parties—anchored in pro- and anti-woke positions, using original survey data from Belgium and the UK (N = 2,000). Within this horizontal form of AP, three distinct measures are then compared: dislike, social distance, and negative emotions (hate, anger and frustration). First, it examines the association between dislike and social distance and anti-democratic attitudes. Second, it includes negative emotions as a potential mediator. Key findings reveal that political intolerance is mostly driven by social distance (and less so by dislike), while its relation with support for violence runs almost entirely through negative emotions. These results suggest anti-democratic attitudes stem more from avoiding and hating opponents rather than simply disliking them, indicating that emotional intensity matters more than basic negative sentiment.`,
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
    abstract: `While democratic support remains robust, support for liberal-democratic institutions has markedly declined across established democracies. Affective polarisation features prominently in theoretical accounts of this erosion, yet empirical investigations yield contradictory findings. This study posits that such inconsistencies stem from conceptual and measurement limitations in conventional operationalisations of affective polarisation. Drawing on an original survey experiment in Belgium and the United Kingdom (N = 2000), I advance a multidimensional approach transcending political parties to examine polarisation across a salient societal cleavage (“wokeness”) while differentiating between dislike, social distance, and negative emotions. My analysis yields three contributions: first, conventional measures of affective polarisation demonstrate limited explanatory capacity regarding liberal-democratic support: if anything, they are weakly positively related to support for liberal democracy. Second, negative emotional responses towards a specified actor consistently relate to diminished liberal-democratic support across all experimental conditions and national contexts. Third, dislike and social distance directed specifically towards anti-democratic actors relate to more liberal-democratic support (and vice versa), revealing the crucial importance of taking into account the standpoint on democracy by those whom respondents polarise against. These findings invite theoretical reconsideration of affective polarisation’s relationship with democracy and empirical reoperationalisation of the measure of affective polarisation.`,
  },
  {
    title: 'Summary: Friends or foes, does polarisation really undermine democracy? Understanding the two-way relationship between polarisation dynamics and the processes and institutions of democratic contestation',
    authors: me,
    venue: 'Politics of the Low Countries',
    year: '2026',
    oa: 'diamond',
    url: 'https://plc-journal.eu/article/view/25310',
    abstract: `The relationship between polarisation and democracy has become a central concern in political science, yet the nature of this connection remains contested. This dissertation addresses the puzzle by arguing that to understand the democratic implications of polarisation, we must distinguish between different types of polarisation and different types of democratic institutional design. It finds that only societal polarisation in the form of social distance and negative emotions relates with anti-democratic attitudes, and that consensus democracies can act as a buffer, weakening the link between high levels of polarisation and its most destructive outcomes. In short, it reminds us that polarisation is not uniformly harmful and that conflict is a normal part of democracy.`
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
    abstract: `Political violence poses an alarming threat to contemporary democracies and is often attributed to rising polarization. This paper investigates how democratic institutions moderate the relationship between identity-based polarization and violence, hypothesizing that this relationship depends upon a country’s institutional structure. Studying 113 democracies over time (1900−2023), we find that while identity-based polarization is associated with political violence, democracies with a federal structure and a rigid constitution show a significantly weaker relationship between polarization and violence. These results offer a rare positive perspective within polarization studies, showing that violence – polarization’s worst threat to democratic peaceful coexistence – is related to the institutional organization of conflict in society.`,
    featured: true,
  },
  {
    title: 'Institutional design and polarization. Do consensus democracies fare better in fighting polarization than majoritarian democracies?',
    authors: `${me}, ${blanckaert}; ${caluwaerts}`,
    venue: 'Democratization',
    year: '2023',
    oa: 'gold',
    url: 'https://www.tandfonline.com/doi/full/10.1080/13510347.2022.2117300',
    abstract: `It is often claimed that we are living in an age of increasing polarization. Political views, opinions, and worldviews become increasingly irreconcilable (idea-based polarization), while at the same time society appears to be getting fractured in antagonistic, opposing camps (identity-based polarization). However, a closer look at international datasets reveals that these forms of polarization do not affect all democracies to the same extent. Levels of identity-based and idea-based polarization strongly vary across countries. The question then becomes what can explain these diverging levels of polarization. In this paper, we hypothesize that the institutional design of a country impacts polarization, and that consensus democracies would display lower levels of polarization. Based on a quantitative analysis of the Comparative Political Dataset and Varieties of Democracy data in 36 countries over time (2000–2019), our results show that institutions did matter to a great extent, and in the hypothesized direction. Countries with consensus institutions, and more in particular PR electoral systems, multiparty coalitions, and federalism did exhibit lower levels of both issue-based and identity-based polarization, thereby confirming our expectations. Moreover, we found that consensus democracies tend to be better at coping with identity-based polarization, while the effect on idea-based polarization is smaller.`,
    featured: true,
  },
  {
    title: 'Deliberation and polarization: a multi-disciplinary review',
    authors: `${caluwaerts}, ${me}, ${kesberg}, ${smets}; ${spruyt}`,
    venue: 'Frontiers in Political Science',
    year: '2023',
    oa: 'gold',
    url: 'https://www.frontiersin.org/journals/political-science/articles/10.3389/fpos.2023.1127372/',
    abstract: `In recent years, deliberative democracy has drawn attention as a potential way of fighting polarization. Allowing citizens to exchange arguments and viewpoints on political issues in group, can have strong conflict-mitigating effects: it can foster opinion changes (thereby overcoming idea-based polarization), and improve relations between diametrically opposed groups (thereby tackling affective forms of polarization, such as affective polarization). However, these results conflict with social psychological and communication studies which find that communicative encounters between groups can lead to further polarization and even group think. The question therefore arises under which conditions deliberative interactions between citizens can decrease polarization. Based on a multidisciplinary systematic review of the literature, which includes a wide diversity of communicative encounters ranging from short classroom discussions to multi-weekend citizen assemblies, this paper reports several findings. First, we argue that the effects of communicative encounters on polarization are conditional on how those types of communication were conceptualized across disciplines. More precisely, we find depolarizing effects when group discussions adhere to a deliberative democracy framework, and polarizing effects when they do not. Second we find that the depolarizing effects depend on several design factors that are often implemented in deliberative democracy studies. Finally, our analysis shows that that much more work needs to be done to unravel and test the exact causal mechanism(s) underlying the polarization-reducing effects of deliberation. Many potential causal mechanisms were identified, but few studies were able to adjudicate how deliberation affects polarization.`,
  },
];

export const workingPapers = [
  {
    title: 'Rethinking polarisation: how its conflictual origins explain a contested relation with democracy',
    authors: me,
    venue: 'Politics of the Low Countries',
    year: 'Under review',
  },
  {
    title: 'From out party to out community: how solidarity orientations shape political intolerance under affective polarisation',
    authors: `Thijssen, P. &amp; ${me}`,
    year: 'Working paper',
  },
  {
    title: 'From party dislike to citizen attitudes: rethinking affective polarization',
    authors: `Russo, L. &amp; ${me}`,
    year: 'Working paper',
  },
  {
    title: 'Polarized at whom? The importance of directional affective polarisation in explaining support for liberal democracy',
    authors: me,
    year: 'Working paper',
  },
  {
    title: 'Smarty-pants vs simpletons? Exploring affective polarisation between education-based groups',
    authors: `${me} &amp; Kavadias, L.`,
    year: 'Working paper',
  },
  {
    title: 'Beyond the culture wars? Assessing the socio-economic determinants of affective polarization',
    authors: `${me}, ${matthieu}, ${junius}; ${caluwaerts}`,
    year: 'Working paper',
  },
];

export const featured = published.filter((p) => p.featured);
export { dissertationAbstract };
