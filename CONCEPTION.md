# 📋 Document de Conception - Générateur de Cartes de Visite

## 1. Vue d'ensemble

Application web pour générer et personnaliser des cartes de visite professionnelles (85×55mm) avec QR code intégré.

**URL**: https://fokouarnaud1996d-ui.github.io/businesscard/

---

## 2. User Stories & Scenarios

### User Story 1 : Créateur de carte simple
**En tant qu'** utilisateur professionnel  
**Je veux** générer rapidement une carte de visite avec mon nom et un QR code  
**Afin de** la faire imprimer immédiatement

**Scenario**:
1. Ouvre l'app
2. Entre son nom (ex: "FUKUANO")
3. Entre l'URL du QR (ex: carrd.co/monsite)
4. Clique "Générer"
5. Télécharge l'image PNG

**Critères d'acceptation**:
- ✓ Génération < 2 secondes
- ✓ Image 300 DPI prête impression
- ✓ QR code scannable

---

### User Story 2 : Génération de planche
**En tant qu'** imprimeur ou utilisateur en masse  
**Je veux** générer une planche avec 4/9/12 cartes  
**Afin de** faire une impression économique

**Scenario**:
1. Selectionne "Planche 2×2"
2. Entre les noms (ou laisse le même)
3. "Générer"
4. Télécharge PNG haute résolution

**Critères**:
- ✓ Spacing correct pour découpe
- ✓ 4/9/12 cartes identiques ou différentes
- ✓ Dimensions optimales par format

---

### User Story 3 : Personnalisation avancée
**En tant qu'** utilisateur avec besoin custom  
**Je veux** contrôler couleurs, police, fond, etc.  
**Afin de** créer des cartes uniques à ma marque

**Scenario**:
1. Ouvre "Personnalisation avancée"
2. Change: nom, URL, couleur fond, couleur texte, accent
3. Prévisualise en temps réel
4. Exporte

**Critères**:
- ✓ Prévisualisation live
- ✓ Sauvegarde des préférences (localStorage)
- ✓ Export PNG/SVG

---

## 3. Personas

| Persona | Besoins | Comportement |
|---------|---------|--------------|
| **Professionnel indépendant** | Carte simple, rapide | Utilise 1-2 fois, partage avec imprimeur |
| **Entreprise** | Planches, personnalisation | Usage régulier, tests multiples |
| **Artiste/Designer** | Export SVG, custom complet | Contrôle total, workflows avancés |

---

## 4. Arborescence UX/UI

```
🏠 Accueil
├── 📝 Générateur simple
│   ├── Champs: Nom, URL QR
│   ├── Bouton: "Générer"
│   ├── Bouton: "Planche 2×2/3×3"
│   └── Bouton: "Plus d'options"
│
├── ⚙️ Personnalisation avancée
│   ├── Infos basiques
│   ├── Couleurs (fond, texte, accent)
│   ├── Police & Taille
│   ├── Fond (image upload optionnel)
│   └── Prévisualisation live
│
├── 📊 Prévisualisation
│   ├── Aperçu carte 85×55mm
│   ├── Aperçu planche (2×2, 3×3, etc.)
│   └── Zoom/Full screen
│
└── 💾 Export
    ├── PNG (300 DPI)
    ├── SVG (éditable)
    ├── PDF (optionnel)
    └── Téléchargement direct

📚 Sidebar infos
├── À propos
├── Guide d'impression
├── Formats supportés
└── Github (source code)
```

---

## 5. Fonctionnalités MVP (v1.0)

### Core
- ✅ Générateur simple (Nom + URL QR)
- ✅ Planche 2×2, 3×3, 4×3
- ✅ Export PNG 300 DPI
- ✅ Ajustement auto police (noms longs)

### Enhancement
- ✅ Couleur background
- ✅ Couleur texte
- ✅ Accent (ligne)
- ✅ Prévisualisation live

---

## 6. Roadmap (Futurs Sprints)

### Sprint 2 : Export avancé
- [ ] Export SVG (éditable)
- [ ] Export PDF haute qualité
- [ ] Export Word (docx)

### Sprint 3 : Personnalisation
- [ ] Upload image arrière-plan
- [ ] Thèmes prédéfinis
- [ ] Police custom (upload)
- [ ] Logo/icône optionnel

### Sprint 4 : Fonctions pro
- [ ] Sauvegarde cloud
- [ ] Historique cartes
- [ ] Partage/collaboration
- [ ] API intégration

### Sprint 5 : Analytica
- [ ] Statistiques utilisation
- [ ] Feedback utilisateurs
- [ ] A/B testing

---

## 7. Spécifications techniques

### Architecture
```
App (Vue.js)
├── Components/
│   ├── CardGenerator.vue
│   ├── CardPreview.vue
│   ├── ExportPanel.vue
│   ├── AdvancedSettings.vue
│   └── Header.vue
│
├── Utils/
│   ├── cardGenerator.js (logique génération)
│   ├── qrcodeGenerator.js (QR code)
│   ├── exportUtils.js (exports)
│   └── validation.js
│
├── Store/
│   └── cardStore.js (Pinia/localStorage)
│
└── Assets/
    ├── css/
    ├── images/
    └── fonts/
```

### Stack
- **Frontend**: Vue 3 + Vite
- **UI**: TailwindCSS
- **Canvas/Export**: html2canvas, jsPDF (optionnel)
- **QR Code**: qrcode.js
- **Storage**: localStorage
- **Deploy**: GitHub Pages (static)

### Specs Design
- Format: 85×55mm à 300 DPI = 1004×650px
- Marges: 60-80px
- Police: Calibri/Segoe UI sans-serif
- Couleurs: Blanc (#FFF), Noir (#000), Accent gris (#C8C8C8)

---

## 8. Critères de succès

✅ **Usabilité**: Utilisateur génère carte en < 1 minute  
✅ **Qualité**: Images 300 DPI imprimables  
✅ **Performance**: Chargement < 3 sec, génération < 2 sec  
✅ **Accessibilité**: AA compliance WCAG  
✅ **Mobile**: Responsive (au moins pour preview)  
✅ **Maintenance**: Code testable et documenté  

---

## 9. Non-fonctionnalités (hors scope v1)

❌ Authentification utilisateur  
❌ Sauvegarde multi-devices  
❌ Édition collaborative  
❌ Analytics avancées  

