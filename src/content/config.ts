import { z, defineCollection } from "astro:content";

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    heroImage: z.string(),
    heroAlt: z.string(),
    stack: z.array(z.string()).default([]),
    problem: z.string(),
    // May contain inline HTML such as <strong>
    result: z.string(),
    demoUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;

export const collections = {
    projects: defineCollection({ type: 'content', schema: projectSchema }),
};
