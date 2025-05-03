
import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import DuplicatorEditor from '@/components/editor/DuplicatorEditor';
import ResultPreview from '@/components/preview/ResultPreview';

const Index = () => {
  const [generatedContent, setGeneratedContent] = useState('');

  // Mock function to simulate AI content generation
  const handleDuplicate = (sourceContent: string, originalPost: string, tone: string) => {
    // In a real app, this would call an API to generate content
    console.log("Generating with:", { sourceContent, originalPost, tone });
    
    // Simple logic to create a mock result
    if (sourceContent && originalPost) {
      const greeting = tone === 'tutoiement' ? 'tu' : 'vous';
      
      // Create a simple template that mimics AI generation
      const generatedText = `🔥 NOUVEAU CONTENU ADAPTÉ 🔥\n\n${
        originalPost.split(' ').slice(0, 3).join(' ')}...\n\n${
        sourceContent.substring(0, 100)}${sourceContent.length > 100 ? '...' : ''}\n\n👉 Comme ${
        greeting} pouvez le voir, ce contenu a été adapté à partir de votre source et suit la structure du post d'origine.\n\n#LinkedInDuplicator #ContentCreation`;
      
      setGeneratedContent(generatedText);
    } else {
      setGeneratedContent('');
    }
  };

  return (
    <div className="flex min-h-screen bg-linkedin-background">
      <Sidebar />
      
      <div className="flex-1 flex overflow-hidden">
        <div className="w-1/2 border-r border-linkedin-border overflow-y-auto">
          <DuplicatorEditor onDuplicate={handleDuplicate} />
        </div>
        
        <div className="w-1/2 overflow-y-auto">
          <ResultPreview content={generatedContent} />
        </div>
      </div>
    </div>
  );
};

export default Index;
