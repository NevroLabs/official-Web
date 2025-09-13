
'use client';

import { useEffect, useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Send, Loader2, Upload, File, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

const initialState: ContactFormState = {
    message: '',
};

export default function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.message && !state.issues?.length) {
      toast({
        title: 'Success!',
        description: state.message,
      });
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              Let's Build Together
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear about it. Fill out the form, and our team will get back to you within 24 hours.
            </p>
            <div className='mt-8 space-y-4'>
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Upload className="h-4 w-4 text-primary"/>
                    </div>
                    <div>
                        <h3 className="font-semibold">Project Briefs</h3>
                        <p className="text-muted-foreground">Feel free to upload any project briefs, wireframes, or relevant documents to give us a head start.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <File className="h-4 w-4 text-accent"/>
                    </div>
                    <div>
                        <h3 className="font-semibold">Get a Quote</h3>
                        <p className="text-muted-foreground">Provide as much detail as possible for a more accurate quote and project timeline.</p>
                    </div>
                </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Project Inquiry</CardTitle>
              <CardDescription>
                Tell us about your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="e.g., New E-commerce Website" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Describe your project in detail..." rows={5} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="file">Attach Document</Label>
                  <Input id="file" name="file" type="file" />
                </div>
                {state.issues && state.issues.length > 0 && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      <ul className="list-disc pl-5">
                      {state.issues.map((issue) => (
                        <li key={issue}>{issue}</li>
                      ))}
                      </ul>
                    </AlertDescription>
                  </Alert>
                )}
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
