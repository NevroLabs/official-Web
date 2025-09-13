'use server';
/**
 * @fileOverview A real-time tech stack analysis AI agent.
 *
 * - analyzeTechStack - A function that handles the tech stack analysis process.
 * - AnalyzeTechStackInput - The input type for the analyzeTechStack function.
 * - AnalyzeTechStackOutput - The return type for the analyzeTechStack function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeTechStackInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A description of the software project.'),
});
export type AnalyzeTechStackInput = z.infer<typeof AnalyzeTechStackInputSchema>;

const AnalyzeTechStackOutputSchema = z.object({
  techStackAnalysis: z.string().describe('The analysis of the tech stack used in the project, represented as a data-driven graphic representation, alongside with project proposals.'),
});
export type AnalyzeTechStackOutput = z.infer<typeof AnalyzeTechStackOutputSchema>;

export async function analyzeTechStack(input: AnalyzeTechStackInput): Promise<AnalyzeTechStackOutput> {
  return analyzeTechStackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeTechStackPrompt',
  input: {schema: AnalyzeTechStackInputSchema},
  output: {schema: AnalyzeTechStackOutputSchema},
  prompt: `You are a software consultant specializing in analyzing technology stacks and creating project proposals.

You will use this information to analyze the tech stack used in the project, and create a data-driven graphic representation to visually showcase the tech stack, and provide project proposals.

Use the following as the primary source of information about the project.

Description: {{{projectDescription}}}`,
});

const analyzeTechStackFlow = ai.defineFlow(
  {
    name: 'analyzeTechStackFlow',
    inputSchema: AnalyzeTechStackInputSchema,
    outputSchema: AnalyzeTechStackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
