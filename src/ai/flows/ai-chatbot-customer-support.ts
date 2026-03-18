// This file is used to create a Genkit flow that will implement an AI chatbot for customer support.
'use server';
/**
 * @fileOverview Implements an AI chatbot for customer support.
 *
 * - `customerSupportChatbot`: A function that handles customer support questions.
 * - `CustomerSupportChatbotInput`: The input type for the `customerSupportChatbot` function.
 * - `CustomerSupportChatbotOutput`: The return type for the `customerSupportChatbot` function.
 */

import {ai} from '@/ai/genkit';
import {products} from '@/lib/data';
import {z} from 'genkit';

const CustomerSupportChatbotInputSchema = z.object({
  query: z.string().describe('The customer support question.'),
});
export type CustomerSupportChatbotInput = z.infer<typeof CustomerSupportChatbotInputSchema>;

const CustomerSupportChatbotOutputSchema = z.object({
  answer: z.string().describe('The answer to the customer support question.'),
});
export type CustomerSupportChatbotOutput = z.infer<typeof CustomerSupportChatbotOutputSchema>;

export async function customerSupportChatbot(input: CustomerSupportChatbotInput): Promise<CustomerSupportChatbotOutput> {
  return customerSupportChatbotFlow(input);
}

const productInfo = products.map(p => `${p.name}: ${p.description} Available in ${p.packaging.join(', ')} sizes.`).join('\n');

const prompt = ai.definePrompt({
  name: 'customerSupportChatbotPrompt',
  input: {schema: CustomerSupportChatbotInputSchema},
  output: {schema: CustomerSupportChatbotOutputSchema},
  prompt: `You are a customer support chatbot for Soit Sugar Company.
  You can answer questions about the company and its products.

  Here is some information about our products:
  ${productInfo}

  Answer the following question:

  {{query}}
  `,
});

const customerSupportChatbotFlow = ai.defineFlow(
  {
    name: 'customerSupportChatbotFlow',
    inputSchema: CustomerSupportChatbotInputSchema,
    outputSchema: CustomerSupportChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
