import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Substitua pela URL real que a Vercel gerou para você (ou seu domínio oficial)
  const baseUrl = 'https://tl-estetica-landing.vercel.app' 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}