
# Design System - LinkedIn Duplicator 

Ce document sert de référence pour maintenir une cohérence visuelle dans l'application LinkedIn Duplicator. Il n'est pas accessible au public et est destiné uniquement à l'équipe de développement.

## 🎨 Palette de couleurs

### Couleurs principales
- **Couleur d'accent principale**: `#EB3235` (rouge vif)
- **Couleur de fond générale**: `#F7F6F9`
- **Couleur panneau latéral**: `#FAFAFA`
- **Texte standard**: `#333333`
- **Bordures et séparateurs**: `#E0E0E0`
- **Icônes et éléments discrets**: `#A1A1AA`

### État des boutons
- **Hover**: 10% plus foncé que la couleur principale
- **Active/Pressed**: 15% plus foncé que la couleur principale
- **Disabled**: 50% d'opacité

## 📝 Typographie

### Police principale
- **Famille**: Satoshi
- **Poids**: Regular (400), Medium (500), Bold (700)
- **Espacement des lettres**:
  - H1: `-0.7em`
  - H2: `-0.5em`
  - H3: `-0.3em`
  - Corps de texte: `0`

### Hiérarchie typographique
- **H1**: 32px, Bold, espacement -0.7em
- **H2**: 24px, Bold, espacement -0.5em
- **H3**: 20px, Medium, espacement -0.3em
- **Texte standard**: 16px, Regular
- **Texte secondaire**: 14px, Regular
- **Petit texte**: 12px, Regular

## 🧱 Composants

### Boutons

#### Bouton CTA (Appel à l'action)
- **Fond**: Dégradé pastel du haut (100%, couleur légèrement plus claire que #EB3235) vers le bas (80%, #EB3235)
- **Bordure**: 1px solid #EB3235
- **Ombre interne**: Blanc avec Y=10px et blur léger
- **Texte**: Blanc
- **Padding**: 12px 24px
- **Border-radius**: 6px

```jsx
<Button variant="cta">Dupliquer</Button>
```

#### Bouton Secondaire
- **Fond**: Blanc
- **Bordure**: 1px solid #E0E0E0
- **Texte**: #333333
- **Hover**: Gris très clair (#F5F5F5)
- **Padding**: 12px 24px
- **Border-radius**: 6px

```jsx
<Button variant="secondary">Annuler</Button>
```

#### Bouton Ghost (transparent)
- **Fond**: Transparent
- **Texte**: #333333
- **Hover**: Gris très clair avec faible opacité
- **Padding**: 12px 24px

```jsx
<Button variant="ghost">Voir plus</Button>
```

### Champs de formulaire

#### Input text
- **Fond**: Blanc
- **Bordure**: 1px solid #E0E0E0
- **Focus**: Bordure #EB3235
- **Padding**: 12px 16px
- **Border-radius**: 6px

```jsx
<Input placeholder="Entrez votre texte" />
```

#### Textarea
- **Fond**: Blanc
- **Bordure**: 1px solid #E0E0E0
- **Focus**: Bordure #EB3235
- **Min-height**: 120px
- **Padding**: 12px 16px
- **Border-radius**: 6px

```jsx
<Textarea placeholder="Contenu multilignes" />
```

### Cards

#### Card standard
- **Fond**: Blanc
- **Bordure**: 1px solid #E0E0E0
- **Border-radius**: 8px
- **Padding**: 24px
- **Shadow**: légère ombre (0px 2px 4px rgba(0, 0, 0, 0.05))

```jsx
<Card>
  <CardHeader>
    <CardTitle>Titre de la carte</CardTitle>
    <CardDescription>Description de la carte</CardDescription>
  </CardHeader>
  <CardContent>Contenu de la carte</CardContent>
  <CardFooter>Pied de la carte</CardFooter>
</Card>
```

## 📏 Espacement

- **4px**: Espacement minimal (xs)
- **8px**: Petit espacement (sm)
- **16px**: Espacement standard (md)
- **24px**: Grand espacement (lg)
- **32px**: Très grand espacement (xl)
- **48px**: Espacement entre sections (2xl)

## 🧠 Principes de design

### Layout
- Interface en 3 colonnes :
  - Barre latérale gauche pour la navigation (largeur fixe: 250px)
  - Panneau central pour les inputs (largeur flexible)
  - Aperçu à droite du résultat généré (largeur fixe: 400px)

### Réactivité
- **Mobile**: Layout en accordéon vertical
- **Tablet**: 2 colonnes (navigation réduite + contenu)
- **Desktop**: 3 colonnes complètes

### Accessibilité
- Ratio de contraste minimum de 4.5:1 pour le texte
- Focus visible pour la navigation au clavier
- Texte alternatif pour toutes les images
- Structure de heading hiérarchique

## 🖼️ Exemples d'utilisation

### Exemple de page typique
```jsx
<div className="flex min-h-screen">
  {/* Sidebar */}
  <Sidebar />
  
  {/* Contenu principal */}
  <main className="flex-grow p-6 bg-linkedin-background">
    <h1 className="text-3xl font-bold tracking-tighter mb-6">Titre de la page</h1>
    
    <Card>
      <CardHeader>
        <CardTitle>Section principale</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Champ texte" className="mb-4" />
        <Textarea placeholder="Description détaillée" />
      </CardContent>
      <CardFooter>
        <Button variant="cta" className="mr-2">Action principale</Button>
        <Button variant="secondary">Action secondaire</Button>
      </CardFooter>
    </Card>
  </main>
  
  {/* Aperçu */}
  <aside className="w-[400px] border-l border-linkedin-border p-6">
    <h2 className="text-xl font-semibold mb-4">Aperçu</h2>
    {/* Contenu de l'aperçu */}
  </aside>
</div>
```

---

Ce document sera mis à jour au fur et à mesure que le design system évolue.
