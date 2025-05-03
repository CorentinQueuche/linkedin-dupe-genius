
import React from 'react';
import { Button } from "@/components/ui/button";
import { Library, Settings, Help, LogOut } from "lucide-react";

interface SidebarLinkProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon: Icon, label, active = false, onClick }) => {
  return (
    <Button
      variant="ghost"
      className={`w-full justify-start mb-1 ${active ? 'bg-linkedin-sidebar/80 text-linkedin-text' : 'text-linkedin-muted hover:text-linkedin-text hover:bg-linkedin-sidebar/50'}`}
      onClick={onClick}
    >
      <Icon className="mr-2 h-5 w-5" />
      {label}
    </Button>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="min-h-screen w-64 bg-linkedin-sidebar border-r border-linkedin-border flex flex-col">
      <div className="p-4 border-b border-linkedin-border">
        <h1 className="text-xl font-semibold text-linkedin-text flex items-center">
          <span className="text-linkedin-primary mr-2">Li</span>
          LinkedIn Duplicator
        </h1>
      </div>
      
      <div className="p-4">
        <Button className="w-full bg-linkedin-primary hover:bg-linkedin-primary/90 text-white mb-6">
          Nouveau duplicat
        </Button>
        
        <div className="space-y-1">
          <SidebarLink icon={Library} label="Bibliothèque" active={true} />
          <SidebarLink icon={Settings} label="Paramètres" />
          <SidebarLink icon={Help} label="Aide" />
        </div>
      </div>
      
      <div className="mt-auto p-4 border-t border-linkedin-border">
        <SidebarLink icon={LogOut} label="Déconnexion" />
      </div>
    </div>
  );
};

export default Sidebar;
