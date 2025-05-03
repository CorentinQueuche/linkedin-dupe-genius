
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ResultPreviewProps {
  content: string;
  onSave?: () => void;
}

const ResultPreview: React.FC<ResultPreviewProps> = ({ content, onSave }) => {
  const { toast } = useToast();
  
  const handleSave = () => {
    if (onSave) {
      onSave();
    }
    toast({
      title: "Sauvegardé",
      description: "Le contenu a été enregistré dans votre bibliothèque.",
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Copié !",
      description: "Le contenu a été copié dans votre presse-papiers.",
    });
  };

  return (
    <div className="p-6 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-linkedin-text mb-4">Aperçu du rendu</h2>
      
      <div className="flex-grow bg-white border border-linkedin-border rounded-md p-4 mb-4 overflow-auto">
        {content ? (
          <div className="whitespace-pre-wrap">{content}</div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center text-linkedin-muted">
            <FileText className="h-12 w-12 mb-4 opacity-50" />
            <p>Oops, aucun contenu généré. Remplissez les champs à gauche puis cliquez sur Dupliquer.</p>
          </div>
        )}
      </div>
      
      <div className="flex space-x-3">
        <Button
          variant="outline"
          className="flex-1 border-linkedin-border text-linkedin-text hover:bg-linkedin-border/20"
          disabled={!content}
          onClick={handleCopy}
        >
          Copier
        </Button>
        <Button
          className="flex-1 bg-linkedin-primary hover:bg-linkedin-primary/90 text-white"
          disabled={!content}
          onClick={handleSave}
        >
          <Save className="mr-2 h-4 w-4" />
          Sauvegarder
        </Button>
      </div>
    </div>
  );
};

export default ResultPreview;
