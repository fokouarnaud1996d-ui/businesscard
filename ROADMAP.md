# 🛣️ Roadmap - Business Card Generator

**Version actuelle:** v1.0  
**État:** MVP Production-Ready ✅

---

## 📊 Vue d'ensemble

```
Sprint 1 (MVP) ✅          Sprint 2 (Scaling)        Sprint 3 (Extensibility)
├─ Génération PNG          ├─ Export SVG             ├─ Themes
├─ QR Code                 ├─ Export PDF             ├─ Cloud Storage
├─ Formats multiples       ├─ Export Word            ├─ API Integration
├─ UI Tailwind             ├─ Image Background       ├─ Plugin System
├─ localStorage            └─ Templating             └─ Analytics
└─ Tests unitaires
```

---

## 🚀 SPRINT 1 (MVP) ✅ TERMINÉ

### Phase 1.1: Core Features ✅
- [x] Génération de cartes PNG (1004×650px @ 300 DPI)
- [x] QR Code intégré (scannable)
- [x] Formats multiples (single, 2×2, 3×3, 4×3)
- [x] Ajustement automatique police
- [x] Prévisualisation en temps réel
- [x] Download PNG

### Phase 1.2: UI/UX ✅
- [x] Interface Tailwind CDN
- [x] Responsive design (mobile, tablet, desktop)
- [x] Formulaire intuitif
- [x] Icônes et visuels attrayants
- [x] Messages de statut

### Phase 1.3: Persistence ✅
- [x] localStorage (sauvegarde automatique)
- [x] Restauration des données
- [x] Reset form

### Phase 1.4: Testing ✅
- [x] Tests unitaires basiques
- [x] Validation des dimensions
- [x] Vérification QR code

---

## 🔄 SPRINT 2 (Scaling) - PLANIFIÉ Q2 2026

### Phase 2.1: Exports Avancés (Priority 1)
**Effort:** 8 points | **Timeline:** 2 semaines

```javascript
// Pseudo-code pour exports
export async function exportSVG(cardData) {
  // Utilise fabric.js ou canvas2svg
  // Export vectoriel éditable
}

export async function exportPDF(cardData) {
  // Utilise pdfkit ou jsPDF
  // Optimisé pour l'impression
}

export async function exportWord(cardData) {
  // Utilise docx ou mammoth
  // Intégration bureautique
}
```

**Bénéfices:**
- ✅ Éditable dans Illustration/Photoshop (SVG)
- ✅ Prêt pour imprimeur professionnel (PDF)
- ✅ Intégration Microsoft Office (Word)

### Phase 2.2: Background & Themes (Priority 2)
**Effort:** 6 points | **Timeline:** 1 semaine

```javascript
// Architecture Color Themes
const THEMES = {
  'Professional': {
    bgColor: '#FFFFFF',
    textColor: '#000000',
    accentColor: '#C8C8C8'
  },
  'Modern Blue': {
    bgColor: '#F0F4F8',
    textColor: '#1A202C',
    accentColor: '#3182CE'
  },
  'Dark Mode': {
    bgColor: '#1A202C',
    textColor: '#FFFFFF',
    accentColor: '#48BB78'
  }
}

// Background Images
interface BackgroundOption {
  type: 'image' | 'gradient' | 'pattern'
  value: string // URL ou gradient CSS
  opacity: 0..1
  position: 'cover' | 'contain' | 'tile'
}
```

**Options:**
- 🎨 Couleur unie
- 🖼️ Image upload
- 🌈 Gradient prédéfini
- 🔲 Patterns (géométrique, texturés)
- 🌙 Modes sombre/clair auto

### Phase 2.3: Advanced QR (Priority 3)
**Effort:** 4 points | **Timeline:** 1 semaine

- [ ] QR Code coloré
- [ ] Logo dans QR
- [ ] QR Codes différents par planche
- [ ] Validation QR

---

## 🏗️ SPRINT 3 (Extensibility) - PLANIFIÉ Q3 2026

### Phase 3.1: Cloud & Collaboration
**Effort:** 13 points

```javascript
// Infrastructure Cloud
interface CardProject {
  id: string
  name: string
  cards: CardData[]
  createdAt: Date
  sharedWith: string[]
  version: number
}

// Sync Cloud
async function syncToCloud(projectId, cardData) {
  // Firebase/Supabase
  await db.collection('projects').doc(projectId).update({
    cards: cardData,
    lastModified: new Date()
  })
}
```

- [ ] Authentification (Google/GitHub)
- [ ] Stockage cloud (Firebase/Supabase)
- [ ] Partage de projets
- [ ] Historique des versions
- [ ] Collaboration temps réel

### Phase 3.2: Templating System
**Effort:** 8 points

```javascript
interface Template {
  id: string
  name: string
  category: 'professional' | 'creative' | 'minimal'
  layout: CardLayout
  colors: ColorScheme
  preview: string
  downloads: number
}

// Template Marketplace
const TEMPLATES = [
  // Minimalist Pro
  { id: 'minimal-1', name: 'Minimalist White', category: 'minimal' },
  
  // Creative
  { id: 'creative-1', name: 'Gradient Modern', category: 'creative' },
  
  // Business
  { id: 'business-1', name: 'Corporate Blue', category: 'professional' }
]
```

- [ ] Galerie de 20+ templates
- [ ] Éditeur de template WYSIWYG
- [ ] Marketplace communautaire
- [ ] Favoris et collections

### Phase 3.3: Advanced Features
**Effort:** 10 points

- [ ] API RESTful (pour intégrations tiers)
- [ ] Webhooks
- [ ] Plugin system
- [ ] Analytics & tracking
- [ ] Batch operations (150+ cartes)

---

## 📈 Métriques & KPIs

### Actuels (v1.0)
- ✅ 0 depandances externes (CDN only)
- ✅ Bundle size: ~200KB
- ✅ Lighthouse score: 95+
- ✅ Load time: <1s
- ✅ GitHub Pages native

### Cibles (v2.0)
- 📊 Temps génération planche 4×3: <2s
- 📊 Export SVG/PDF: <3s
- 📊 UX satisfaction: 4.5/5 ⭐
- 📊 Utilisateurs mensuels: 1000+
- 📊 Card exports: 50k+/mois

---

## 🏗️ Architecture pour Scalabilité

### Structure de dossiers (v2+)
```
src/
├─ components/
│  ├─ CardEditor.js
│  ├─ PreviewPanel.js
│  ├─ ExportDialog.js
│  └─ ThemeSelector.js
├─ services/
│  ├─ cardGenerator.js
│  ├─ exportService.js
│  ├─ cloudSync.js
│  └─ templateManager.js
├─ store/
│  ├─ cardStore.js (état global)
│  └─ settingsStore.js
├─ utils/
│  ├─ validators.js
│  ├─ formatters.js
│  └─ helpers.js
└─ tests/
   ├─ unit/
   └─ integration/
```

### État Global (Vueх/Pinia)
```javascript
// store/cardStore.js
const state = {
  currentCard: {},
  projects: [],
  recentCards: [],
  preferences: {
    theme: 'light',
    defaultFormat: 'single',
    autoSave: true
  }
}

const mutations = {
  SET_CARD_NAME(state, name) { },
  SET_CARD_QR_URL(state, url) { },
  SAVE_PROJECT(state, project) { },
  LOAD_PROJECT(state, projectId) { }
}
```

---

## 🎯 Prochaines étapes immédiatement

**Semaine 1:**
- [ ] Documenter API interne
- [ ] Setup CI/CD (GitHub Actions)
- [ ] Ajouter plus de tests

**Semaine 2-3:**
- [ ] Commencer Sprint 2.1 (Exports)
- [ ] Créer service layer pour exports
- [ ] Intégrer libraries (jsPDF, fabric.js)

---

## 🤝 Contribution

Les contributions sont bienvenues ! Consultez [CONTRIBUTING.md](./CONTRIBUTING.md)

---

**Dernière mise à jour:** 30 Mars 2026  
**Mainteneur:** Fokou Arnaud
