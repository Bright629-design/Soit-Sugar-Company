'use server';

/**
 * @fileOverview Implements the AI chatbot flow for product-related questions.
 *
 * - aiChatbotForProductQA - A function that handles product-related questions using an AI chatbot.
 * - AIChatbotForProductQAInput - The input type for the aiChatbotForProductQA function.
 * - AIChatbotForProductQAOutput - The return type for the aiChatbotForProductQA function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatbotForProductQAInputSchema = z.object({
  question: z.string().describe('The question about the product.'),
});
export type AIChatbotForProductQAInput = z.infer<typeof AIChatbotForProductQAInputSchema>;

const AIChatbotForProductQAOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about the product.'),
});
export type AIChatbotForProductQAOutput = z.infer<typeof AIChatbotForProductQAOutputSchema>;

export async function aiChatbotForProductQA(input: AIChatbotForProductQAInput): Promise<AIChatbotForProductQAOutput> {
  return aiChatbotForProductQAFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatbotForProductQAPrompt',
  input: {schema: AIChatbotForProductQAInputSchema},
  output: {schema: AIChatbotForProductQAOutputSchema},
  prompt: `You are a customer support chatbot for Soit Sugar Company, a sugarcane processing factory in Kenya. Answer questions about the company's products such as the specifications, packaging sizes, etc.\n\nQuestion: {{{question}}}`,
});

const aiChatbotForProductQAFlow = ai.defineFlow(
  {
    name: 'aiChatbotForProductQAFlow',
    inputSchema: AIChatbotForProductQAInputSchema,
    outputSchema: AIChatbotForProductQAOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
