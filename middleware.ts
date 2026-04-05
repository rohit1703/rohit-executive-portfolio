const SOCIAL_BOTS = /facebookexternalhit|linkedinbot|twitterbot|whatsapp|slackbot|telegrambot|discordbot/i;

interface ViewOG {
  title: string;
  description: string;
}

const VIEW_OG: Record<string, ViewOG> = {
  '/about': {
    title: 'Rohit Mallavarapu | Executive Portfolio',
    description: 'Global marketing leader and partnerships strategist. $7M+ revenue, 20x YoY growth, 100+ Fortune 1000 relationships. From startup spark to NASDAQ stage.',
  },
  '/partnerships': {
    title: 'Rohit Mallavarapu | Partnerships Leader',
    description: 'Building partner ecosystems from zero to $7M+ revenue. 54+ BFSI partnerships, 50+ strategic alliances, 20x YoY growth.',
  },
  '/marketing': {
    title: 'Rohit Mallavarapu | Marketing Leader',
    description: 'Driving brand strategy, demand generation, and AI-led growth. Glassdoor turnaround, 4000+ qualified prospects, 300% budget efficiency.',
  },
};

export default function middleware(request: Request) {
  const ua = request.headers.get('user-agent') || '';
  const url = new URL(request.url);
  const path = url.pathname;
  const viewOG = VIEW_OG[path];

  if (!SOCIAL_BOTS.test(ua) || !viewOG) {
    return;
  }

  const baseUrl = 'https://rohit-executive-portfolio.vercel.app';
  const imageUrl = `${baseUrl}/wa.jpg`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${viewOG.title}</title>
  <meta name="description" content="${viewOG.description}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${baseUrl}${path}" />
  <meta property="og:title" content="${viewOG.title}" />
  <meta property="og:description" content="${viewOG.description}" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${viewOG.title}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${viewOG.title}" />
  <meta name="twitter:description" content="${viewOG.description}" />
  <meta name="twitter:image" content="${imageUrl}" />
  <link rel="canonical" href="${baseUrl}${path}" />
</head>
<body>
  <p>${viewOG.description}</p>
  <a href="${baseUrl}${path}">View Portfolio</a>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

export const config = {
  matcher: ['/(about|partnerships|marketing)'],
};
