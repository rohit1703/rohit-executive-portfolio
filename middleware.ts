const SOCIAL_BOTS = /facebookexternalhit|linkedinbot|twitterbot|whatsapp|slackbot|telegrambot|discordbot/i;

interface ViewOG {
  title: string;
  description: string;
}

const VIEW_OG: Record<string, ViewOG> = {
  '/about': {
    title: 'Rohit Mallavarapu | Builder-Marketer',
    description: 'B2B marketing and partnerships, six years. Now I build the product too: Currly, an AI workflow platform I shipped solo (1,400+ tools, 111+ workflows in production).',
  },
  '/partnerships': {
    title: 'Rohit Mallavarapu | Partnerships, Built From Zero',
    description: 'I build partner channels from zero. ClearTax: 54 partnerships, ₹7M, 20x YoY. Plum: $3M+ in key accounts, promoted twice. And I build the product too.',
  },
  '/marketing': {
    title: 'Rohit Mallavarapu | Marketing Lead & Builder',
    description: 'Sole marketing owner for Grid Dynamics India. 12 events, 4,600+ qualified prospects, brand awareness 20% to 80%. And I build the product — Currly, shipped solo.',
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
