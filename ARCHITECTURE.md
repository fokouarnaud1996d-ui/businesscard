# 🏗️ Architecture Technique

## Vue d'ensemble

```
┌─────────────────────────────────────────┐
│     NAVIGATEUR (GitHub Pages)           │
│  ┌─────────────────────────────────────┐│
│  │     HTML5 + CSS3 + JavaScript       ││
│  │  ┌────────────────────────────────┐││
│  │  │    Vue 3 Application           │││
│  │  │  (App.js Component)            │││
│  │  ├─────────────────────────────────┤││
│  │  │ • State Management (data)      │││
│  │  │ • Événements (v-on)            │││
│  │  │ • Binding (v-model)            │││
│  │  └────────────────────────────────┘││
│  │         ↓                            ││
│  │  ┌────────────────────────────────┐││
│  │  │  Canvas API (Rendering)        │││
│  │  │  • drawImage()                 │││
│  │  │  • fillRect(), strokeLine()    │││
│  │  │  • fillText()                  │││
│  │  └────────────────────────────────┘││
│  │         ↓                            ││
│  │  ┌────────────────────────────────┐││
│  │  │  Export (HTML5 Download API)   │││
│  │  │  • canvas.toDataURL()          │││
│  │  │  • Blob + Link.download        │││
│  │  └────────────────────────────────┘││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

---

## Stack Technologique

### Frontend
| Layer | Technology | Raison |
|-------|-----------|--------|
| **UI Framework** | Vue 3 (CDN) | Réactif, simple, sans build |
| **Styling** | TailwindCSS (CDN) | Utility, responsive, rapide |
| **Canvas** | HTML5 Canvas API | Génération images native |
| **QR Code** | qrcode.js (CDN) | Lightweight, standalone |
| **Export** | html2canvas (CDN) | Conversion canvas → image |
| **Hosting** | GitHub Pages | Static, gratuit, rapide |

### Bases de données
- **localStorage** : Sauvegarde préfs utilisateur (v2)
- **Pas de backend** : App 100% client-side

### Build
- **Zero-build** : Tout en CDN
- **Bundles** : Via jsDelivr/unpkg
- **Bundle size** : ~500KB (includes all deps)

---

## Structure de fichiers

```
businesscard/
│
├── index.html                    # Single Page App
│
├── src/
│   ├── main.js                  # Bootstrap Vue 3
│   │
│   ├── App.js                   # Root component
│   │   ├── template             # Template HTML
│   │   ├── data()               # Reactive state
│   │   └── methods              # logique
│   │
│   ├── utils/                   # [Sprint 2+]
│   │   ├── cardGenerator.js     # Logique génération
│   │   ├── qrcodeGenerator.js   # QR dynamique
│   │   ├── exportUtils.js       # PNG/SVG/PDF
│   │   └── validation.js        # Validation inputs
│   │
│   ├── store/                   # [Sprint 2+]
│   │   └── cardStore.js         # Pinia store
│   │
│   └── tests/
│       ├── unit.test.js         # Tests unitaires
│       └── e2e.test.js          # [Sprint 3+]
│
├── docs/
│   ├── CONCEPTION.md            # User stories
│   ├── ARCHITECTURE.md          # Ce fichier
│   ├── GUIDE_UTILISATEUR.md     # User guide
│   └── ROADMAP.md              # Features futures
│
├── README.md                    # Project overview
└── .gitignore                  # Git ignore
```

---

## Data Flow

```
User Input (formulaire)
    ↓
Vue reactive state (formData)
    ↓
Calcul font size (logique)
    ↓
Generate Card
    ├─ Canvas creation
    ├─ Draw background
    ├─ Draw text (auto-sized)
    ├─ Draw accent line
    ├─ Generate QR code
    └─ Draw QR on canvas
    ↓
Preview (canvas preview)
    ├─ Live update
    └─ Multiple zoom levels
    ↓
Export (user click)
    ├─ canvas.toDataURL('image/png')
    ├─ crear Blob
    └─ Trigger download
```

---

## Composants principaux

### 1. App.js (Root Component)

**Responsabilités**:
- Gestion state (formulaire + configuration)
- Événements utilisateur
- Génération de cartes
- Export

**State**:
```javascript
formData: {
    cardName: string,      // Nom à afficher
    qrUrl: string,         // URL pour QR code
    mode: string,          // single | planche_2x2 | ...
    bgColor: hex,          // Couleur fond
    textColor: hex,        // Couleur texte
    accentColor: hex       // Couleur accent
}

cardGenerated: boolean     // État generation
statusMessage: string      // Messages user
previewMode: string        // Zoom level
```

**Méthodes clés**:
- `generateCard()` : Crée image canvas
- `drawCard(ctx, x, y, name)` : Dessine 1 carte
- `downloadCard()` : Export PNG
- `calculateOptimalFontSize()` : Taille auto

### 2. Canvas Rendering

**Dimensions** (300 DPI):
- Carte seule: 1004×650px (85×55mm)
- Planche 2×2: 2048×1340px
- Planche 3×3: 3132×2030px
- Planche 4×3: 4176×2030px

**Éléments dessinés**:
1. Fond (fillRect)
2. Texte nom (fillText, auto-sized)
3. Ligne accent (strokeLine)
4. QR code (placeholder v1, dynamic v2)

### 3. Export

**Actuallement** (v1.0):
```javascript
canvas.toDataURL('image/png')
→ créer Blob
→ trigger download link
```

**Futur** (Sprint 2):
- Export SVG (via canvas → svg)
- Export PDF (via html2pdf)
- Batch download (zip)

---

## Architecture de validation

```
Input → Validation → Canvas → Export
```

| Étape | Validation |
|-------|----------|
| **formData.cardName** | Non vide, < 100 chars |
| **formData.qrUrl** | URL valide (try new URL()) |
| **formData.bgColor** | Hex format (#RRGGBB) |
| **prévisualisation** | Canvas rendered OK |
| **Export PNG** | >0 bytes |

---

## Performance

### Optimisations actuelles
✅ Canvas natif (rapide)  
✅ Aucun rechargement DOM  
✅ Pas de library lourde  
✅ CDN pour deps  

### Temps mesuré
| Action | Temps |
|--------|-------|
| Chargement page | ~1.5s |
| Génération carte | <500ms |
| Export PNG | <100ms |

### Bottlenecks (futurs)
- QR generation (actuellement placeholder)
- Image upload + processing (Sprint 3)
- PDF generation (html2pdf)

---

## Extensibilité (Roadmap)

### Sprint 2 : Amélioration export
```
✅ Refactoring: cardGenerator.js
✅ QR code dynamique
✅ Export SVG
✅ Export PDF
```

### Sprint 3 : Personnalisation++
```
✅ Image fond (upload)
✅ Logo/icône
✅ Thèmes prédéfinis
✅ Font custom upload
```

### Sprint 4 : Pro
```
✅ localStorage persistence
✅ Cloud save (Firebase/Supabase)
✅ Historique cartes
✅ Partage/collaboration
```

---

## Testing

### Structure tests
```
src/tests/
├── unit.test.js        # Logique pure
├── integration.test.js # [Sprint 3]
└── e2e.test.js        # [Sprint 4]
```

### Couverture (v1.0)
✅ Font size calculation  
✅ URL validation  
✅ Dimension calculations  
✅ Color validation  
✅ Pixel/MM conversion  

### Lancer les tests
```bash
node src/tests/unit.test.js
→ Tous les tests réussis (5/5)
```

---

## Déploiement

### GitHub Pages
```bash
# Automatic deployment via GitHub Actions
# Juste push sur main → déployé
git push origin main
```

### URL live
```
https://fokouarnaud1996d-ui.github.io/businesscard/
```

### CD/CI
- ❌ Pas de build complexe
- ✅ Direct push to gh-pages
- ✅ Pas de secrets requis

---

## Dépendances externes (CDN)

| Package | Version | URL | Raison |
|---------|---------|-----|--------|
| Vue 3 | 3.3+ | unpkg | Framework |
| TailwindCSS | 3.3+ | tailwindcdn | CSS |
| qrcode.js | 1.0.0 | cdnjs | QR code |
| html2canvas | 1.4+ | cdnjs | Export [Sprint 2] |
| jsPDF | 2.5+ | cdnjs | PDF [Sprint 2] |

**Pas de** npm/yarn/build!

---

## Sécurité

### Client-side only
✅ Aucun backend → aucun risque de fuite  
✅ Aucune auth requise  
✅ Aucune sauvegarde serveur (v1)  

### Input sanitization
- URL validation (new URL())
- Hex color validation (regex)
- String length checks

### CORS
- CDN CDN sans restriction
- Pas d'API externes (v1)

---

## Futur (Beyond Sprint 5)

### Idées long-terme
- [ ] Desktop app (Electron)
- [ ] Mobile app (React Native)
- [ ] API REST (Node.js backend)
- [ ] Marketplace thèmes
- [ ] Collaboration temps-réel

---

**Document**: Architecture Technique  
**Version**: 1.0  
**Date**: Mars 2026  
**Status**: WIP (Work In Progress)