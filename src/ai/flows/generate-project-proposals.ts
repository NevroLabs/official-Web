// This is a server-side file.
'use server';

/**
 * @fileOverview Generates project proposals based on current technology trends.
 *
 * - generateProjectProposals - A function that generates project proposals.
 * - GenerateProjectProposalsInput - The input type for the generateProjectProposals function.
 * - GenerateProjectProposalsOutput - The return type for the generateProjectProposals function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectProposalsInputSchema = z.object({
  technologyTrends: z
    .string()
    .describe(
      'A summary of current technology trends to base project proposals on.'
    ),
});
export type GenerateProjectProposalsInput = z.infer<
  typeof GenerateProjectProposalsInputSchema
>;

const GenerateProjectProposalsOutputSchema = z.object({
  projectProposals: z
    .array(z.string())
    .describe('An array of project proposals based on the technology trends.'),
});
export type GenerateProjectProposalsOutput = z.infer<
  typeof GenerateProjectProposalsOutputSchema
>;

export async function generateProjectProposals(
  input: GenerateProjectProposalsInput
): Promise<GenerateProjectProposalsOutput> {
  return generateProjectProposalsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectProposalsPrompt',
  input: {schema: GenerateProjectProposalsInputSchema},
  output: {schema: GenerateProjectProposalsOutputSchema},
  prompt: `You are an AI project proposal generator. You will generate project proposals based on the current technology trends provided.

Current Technology Trends: {{{technologyTrends}}}

Generate at least 3 project proposals.`,
});

const generateProjectProposalsFlow = ai.defineFlow(
  {
    name: 'generateProjectProposalsFlow',
    inputSchema: GenerateProjectProposalsInputSchema,
    outputSchema: GenerateProjectProposalsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
