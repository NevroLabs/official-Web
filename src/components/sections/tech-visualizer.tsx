
'use client';

import { useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { getTechStackAnalysis, getProjectProposals, TechAnalysisState, ProjectProposalsState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Wand2, Lightbulb, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

function SubmitButton({ children, ...props }: { children: React.ReactNode } & React.ComponentProps<typeof Button>) {
  const { pending } = useFormStatus();
  return (
    <Button {...props} disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      {children}
    </Button>
  );
}

export default function TechVisualizer() {
  const [analysisState, formAction] = useActionState<TechAnalysisState, FormData>(getTechStackAnalysis, { analysis: null });
  const [proposalsState, setProposalsState] = useState<ProjectProposalsState>({});
  const [isGeneratingProposals, setIsGeneratingProposals] = useState(false);

  const handleGenerateProposals = async () => {
    setIsGeneratingProposals(true);
    setProposalsState({});
    const result = await getProjectProposals();
    setProposalsState(result);
    setIsGeneratingProposals(false);
  };
  
  return (
    <section id="tech-visualizer" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            AI-Powered Innovation Hub
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Leverage our generative AI to analyze project needs and discover new opportunities. Describe your project to get a tech stack analysis, or generate innovative project proposals based on current trends.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Tech Stack Analysis */}
          <Card className="bg-gradient-to-br from-card to-background">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <Wand2 className="text-accent" />
                Real-Time Tech Stack Analysis
              </CardTitle>
              <CardDescription>
                Describe your project, and our AI will suggest a technology stack and provide a visual representation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="projectDescription">Project Description</Label>
                  <Textarea placeholder="e.g., 'A social media app for pet owners with photo sharing and event scheduling.'" id="projectDescription" name="projectDescription" rows={5} />
                  {analysisState?.issues && <p className="text-sm text-destructive">{analysisState.issues[0]}</p>}
                </div>
                <SubmitButton>
                  Analyze Project
                </SubmitButton>
              </form>
              {analysisState?.analysis && (
                 <Alert className="mt-6 border-accent">
                    <Wand2 className="h-4 w-4 !text-accent" />
                    <AlertTitle className="font-headline text-accent">Analysis Complete</AlertTitle>
                    <AlertDescription className="mt-2 whitespace-pre-wrap font-code">
                      {analysisState.analysis}
                    </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Project Proposal Generator */}
          <Card className="bg-gradient-to-br from-card to-background">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <Lightbulb className="text-primary" />
                Generate Project Proposals
              </CardTitle>
              <CardDescription>
                Stuck for ideas? Let our AI generate innovative project proposals based on the latest technology trends.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col space-y-4">
                    <Button onClick={handleGenerateProposals} disabled={isGeneratingProposals}>
                        {isGeneratingProposals ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lightbulb className="mr-2 h-4 w-4" />}
                        Generate Proposals
                    </Button>
                    
                    {proposalsState.proposals && proposalsState.proposals.length > 0 && (
                        <Alert className="mt-6 border-primary">
                            <Lightbulb className="h-4 w-4 !text-primary" />
                            <AlertTitle className="font-headline text-primary">Generated Proposals</AlertTitle>
                            <AlertDescription>
                            <ul className="mt-2 list-disc space-y-2 pl-5">
                                {proposalsState.proposals.map((proposal, index) => (
                                    <li key={index}>{proposal}</li>
                                ))}
                                </ul>
                            </AlertDescription>
                        </Alert>
                    )}
                    {proposalsState.message && !proposalsState.proposals && (
                         <Alert variant="destructive">
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                {proposalsState.message}
                            </AlertDescription>
                        </Alert>
                    )}
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
