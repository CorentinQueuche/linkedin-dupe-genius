
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

interface DuplicatorEditorProps {
  onDuplicate: (sourceContent: string, originalPost: string, tone: string) => void;
}

const DuplicatorEditor: React.FC<DuplicatorEditorProps> = ({ onDuplicate }) => {
  const [sourceContent, setSourceContent] = useState('');
  const [originalPost, setOriginalPost] = useState('');
  const [tone, setTone] = useState('tutoiement');
  
  const handleDuplicate = () => {
    onDuplicate(sourceContent, originalPost, tone);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-linkedin-text tracking-tighter-h2">Contenu Source</h2>
          <Button variant="ghost" size="sm" className="text-linkedin-muted hover:text-linkedin-text">
            <Upload className="h-4 w-4 mr-1" />
            Importer
          </Button>
        </div>
        <Textarea
          className="min-h-[150px] border-linkedin-border focus:border-linkedin-primary"
          placeholder="Collez ici le contenu source à adapter"
          value={sourceContent}
          onChange={(e) => setSourceContent(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-linkedin-text tracking-tighter-h2">Publication d'origine</h2>
          <Button variant="ghost" size="sm" className="text-linkedin-muted hover:text-linkedin-text">
            <Upload className="h-4 w-4 mr-1" />
            Importer
          </Button>
        </div>
        <Textarea
          className="min-h-[150px] border-linkedin-border focus:border-linkedin-primary"
          placeholder="Collez ici la publication LinkedIn originale"
          value={originalPost}
          onChange={(e) => setOriginalPost(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-linkedin-text tracking-tighter-h2 mb-3">Style d'adresse</h2>
        <RadioGroup 
          value={tone} 
          onValueChange={setTone}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="tutoiement" id="tutoiement" className="border-linkedin-primary text-linkedin-primary" />
            <Label htmlFor="tutoiement">Tutoiement</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="vouvoiement" id="vouvoiement" className="border-linkedin-primary text-linkedin-primary" />
            <Label htmlFor="vouvoiement">Vouvoiement</Label>
          </div>
        </RadioGroup>
      </div>

      <Button 
        onClick={handleDuplicate}
        variant="cta"
        className="w-full py-6 text-lg"
      >
        Dupliquer
      </Button>
    </div>
  );
};

export default DuplicatorEditor;
