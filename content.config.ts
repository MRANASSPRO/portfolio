import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const createLinkSchema = () => z.object({
  label: z.string(),
  icon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  target: z.enum(['_blank', '_self']).optional()
})

const createImageSchema = () => z.object({
  src: z.string().editor({ input: 'media' }),
  alt: z.string()
})

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: 'index.yml',
      schema: z.object({
        hero: z.object({
          name: z.string(),
          role: z.string(),
          description: z.string(),
          image: createImageSchema(),
          links: z.array(createLinkSchema()),
          socials: z.array(createLinkSchema())
        }),
        about: z.object({
          title: z.string(),
          paragraphs: z.array(z.string()),
          location: z.string(),
          email: z.string(),
          availability: z.string()
        }),
        experience: z.object({
          title: z.string(),
          items: z.array(z.object({
            position: z.string(),
            company: z.string(),
            date: z.string(),
            achievements: z.array(z.string()),
            tech: z.string().optional()
          }))
        }),
        skills: z.object({
          title: z.string(),
          tabs: z.array(z.object({
            label: z.string(),
            categories: z.array(z.object({
              name: z.string(),
              items: z.array(z.string())
            }))
          }))
        }),
        projects: z.object({
          title: z.string(),
          items: z.array(z.object({
            title: z.string(),
            description: z.string(),
            image: createImageSchema(),
            tags: z.array(z.string()),
            links: z.array(createLinkSchema())
          }))
        }),
        education: z.object({
          title: z.string(),
          items: z.array(z.object({
            degree: z.string(),
            school: z.string(),
            date: z.string(),
            description: z.string().optional()
          }))
        }),
        certifications: z.object({
          title: z.string(),
          items: z.array(z.object({
            name: z.string(),
            date: z.string()
          }))
        }),
        contact: z.object({
          title: z.string(),
          description: z.string(),
          email: z.string(),
          phone: z.string().optional(),
          links: z.array(createLinkSchema())
        })
      })
    })
  }
})
