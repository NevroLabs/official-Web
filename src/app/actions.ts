
'use server';

import { z } from 'zod';
import { analyzeTechStack } from '@/ai/flows/real-time-tech-stack-analysis';
import { generateProjectProposals } from '@/ai/flows/generate-project-proposals';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Contact Form
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function submitContactForm(
  state: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const result = contactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!result.success) {
    return {
      message: 'Invalid form data.',
      issues: result.error.issues.map((issue) => issue.path[0] + ': ' + issue.message),
    };
  }

  try {
    const docRef = await addDoc(collection(db, "contact-submissions"), {
      ...result.data,
      submittedAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    return {
      message: 'An error occurred while saving your message. Please try again.',
      issues: ['Firestore Error'],
    };
  }
  
  // Note: File upload handling would require a separate, more complex setup.

  return { message: `Thanks, ${result.data.name}! We've received your message.` };
}


// Tech Visualizer - Analysis
export type TechAnalysisState = {
  message?: string;
  analysis?: string | null;
  issues?: string[];
};

const analysisSchema = z.object({
  projectDescription: z.string().min(20, { message: 'Please provide a more detailed project description (at least 20 characters).' }),
});

export async function getTechStackAnalysis(
  state: TechAnalysisState,
  formData: FormData
): Promise<TechAnalysisState> {
    const validatedFields = analysisSchema.safeParse({
        projectDescription: formData.get('projectDescription'),
    });

    if (!validatedFields.success) {
        return {
            issues: validatedFields.error.flatten().fieldErrors.projectDescription,
        }
    }

  try {
    const result = await analyzeTechStack({ projectDescription: validatedFields.data.projectDescription });
    return { message: 'Analysis successful.', analysis: result.techStackAnalysis };
  } catch (error) {
    console.error(error);
    return { message: 'An error occurred during analysis.', analysis: null };
  }
}

// Tech Visualizer - Proposals
export type ProjectProposalsState = {
    message?: string;
    proposals?: string[];
};

export async function getProjectProposals(): Promise<ProjectProposalsState> {
  const technologyTrends = "Current trends include serverless architecture, progressive web apps, AI-driven development, multi-cloud strategies, and cross-platform mobile frameworks like React Native and Flutter, with a strong focus on cybersecurity and data privacy.";
  try {
    const result = await generateProjectProposals({ technologyTrends });
    return { message: 'Proposals generated successfully.', proposals: result.projectProposals };
  } catch (error) {
    console.error(error);
    return { message: 'An error occurred while generating proposals.' };
  }
}
