# 🎴 Business Card Generator

> **Générateur de cartes de visite minimalistes professionnelles** avec QR code intégré.  
> Développé avec **Vue 3 + Tailwind CSS** | GitHub Pages | Zero-dependency ✨

**▶️ [Lancer l'app](https://fokouarnaud1996d-ui.github.io/businesscard/)**

---

## 🚀 Caractéristiques

✅ **Génération rapide** - Crée une carte en < 1 minute  
✅ **QR code intégré** - Scannez pour voir la page web  
✅ **Multi-format** - Carte unique ou planche (2×2, 3×3, 4×3)  
✅ **Personnalisation** - Couleurs, nom, URL au choix  
✅ **300 DPI** - Prête pour l'imprimeur  
✅ **Gratuit & Open Source** - Aucune limitation  

---

## 📋 Spécifications

| Aspect | Détail |
|--------|--------|
| **Format** | 85 × 55 mm (standard international) |
| **Résolution** | 300 DPI (1004 × 650 px) |
| **Export** | PNG haute qualité |
| **Polices** | Segoe UI, Calibri, sans-serif |
| **Couleurs** | Personnalisables (HEX) |

---

## 🎯 Cas d'usage

### 👤 Professionnel indépendant
```
1. Ouvre l'app
2. Entre ton nom + URL CARRD
3. Clique "Générer"
4. Télécharge PNG
5. Envoie à l'imprimeur
```

### 🏢 Entreprise
```
1. Génère planche 4×3 (12 cartes)
2. Personnalise couleurs
3. Exporte PNG haute résolution
4. Impression économique
```

### 🎨 Designer
```
1. Tests multiples couleurs/designs
2. Exporte en PNG
3. (Bientôt) Export SVG éditable
```

---

## 📁 Structure du projet

```
businesscard/
├── index.html              # Entrypoint HTML
├── src/
│   ├── main.js            # Point d'entrée Vue 3
│   ├── App.js             # Composant principal
│   │
│   ├── utils/             # [Sprint 2]
│   │   ├── cardGenerator.js
│   │   ├── qrcodeGenerator.js
│   │   └── exportUtils.js
│   │
│   └── tests/
│       └── unit.test.js   # Tests unitaires
│
├── CONCEPTION.md          # Document de conception détaillé
├── ARCHITECTURE.md        # [À créer] Guide tech
├── ROADMAP.md            # [À créer] Futures features
└── README.md             # Ce fichier
```

---

## 🛠️ Développement local

### Prérequis
- Node.js 16+ (optionnel pour tests)
- Navigateur moderne (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Clone le repo
git clone https://github.com/fokouarnaud1996d-ui/businesscard.git
cd businesscard

# Aucune dépendance! Tout en CDN
# Ouvre simplement index.html dans le navigateur
```

### Tester

```bash
# Lance les tests unitaires
node src/tests/unit.test.js

# Output:
# 🧪 TESTS UNITAIRES
# ✅ Test 1: Font size calculation
# ✅ Test 2: URL validation
# ✅ Test 3: Dimension calculations
# ✅ Test 4: Color validation
# ✅ Test 5: Pixel to MM conversion
# ✅ TOUS LES TESTS RÉUSSIS! (5/5)
```

---

## � Documentation complète

| Document | Description |
|----------|-------------|
| **[QUICKSTART.md](./QUICKSTART.md)** | Guide d'utilisation rapide (2 min) |
| **[ROADMAP.md](./ROADMAP.md)** | Futures features & timeline |
| **[ARCHITECTURE.md](./ARCHITECTURE.md)** | Decisions tech & scalabilité |
| **[CONCEPTION.md](./CONCEPTION.md)** | Design UX & specs |

---

## 🎯 Quick Links

- 🚀 [Lancer l'app](https://fokouarnaud1996d-ui.github.io/businesscard/)
- 📖 [Débuter](./QUICKSTART.md) ← **Commencez ici!**
- 🗺️ [Roadmap](./ROADMAP.md) ← Sprint 2,3,4 prévus
- 💻 [Code Source](https://github.com/fokouarnaud1996d-ui/businesscard)
- 🐛 [Signaler un bug](https://github.com/fokouarnaud1996d-ui/businesscard/issues)

---

## 🎨 Features actuelles (v1.0)

### ✅ Impl émentées
- [x] Générateur simple (nom + URL)
- [x] Format unique 85×55mm
- [x] Planches 2×2, 3×3, 4×3
- [x] Export PNG 300 DPI
- [x] Ajustement automatique police (noms longs)
- [x] Personnalisation couleurs (bg, texte, accent)
- [x] Prévisualisation live
- [x] Responsive design
- [x] Tests unitaires

### 📋 Roadmap

#### Sprint 2 : Export avancé
- [ ] Export SVG (éditable)
- [ ] Export PDF
- [ ] Word export (.docx)
- [ ] Batch download

#### Sprint 3 : Personnalisation+
- [ ] Upload image arrière-plan
- [ ] Thèmes prédéfinis
- [ ] Font upload custom
- [ ] Logo/icône optionnel

#### Sprint 4 : Pro Features
- [ ] localStorage/sauvegarde
- [ ] Historique cartes
- [ ] Partage & collaboration
- [ ] API

#### Sprint 5 : Analytics
- [ ] Usage stats
- [ ] Feedback
- [ ] A/B testing

---

## 🧪 Tests

Les tests unitaires couvrent :

✅ **Calcul taille police** - Adapte automatiquement pour noms longs  
✅ **Validation URL** - Vérifie format URL QR  
✅ **Dimensions** - Calcul correct des planches (2×2, 3×3, 4×3)  
✅ **Couleurs** -Validation HEX format  
✅ **Conversion** - Pixels ↔ MM conversion  

```bash
node src/tests/unit.test.js
```

---

## 🔧 Architecture

### Frontend Stack
- **Vue 3** (via CDN) - Reactive UI
- **TailwindCSS** - Styling
- **Canvas API** - Génération images
- **qrcode.js** - QR code generation
- **html2canvas** - Export (Sprint 2)

### Pas de build nécessaire!
Tout fonctionne directement en navigateur (CDN). Idée pour GitHub Pages.

---

## 📝 Exemples d'utilisation

### Créer une carte simple
```javascript
// 1. Remplir les champs
cardName: "FUKUANO"
qrUrl: "https://carrd.co/monsite"
mode: "single"

// 2. Générer
→ Génère image 1004×650px (300 DPI)

// 3. Télécharger
→ businesscard_FUKUANO.png
```

### Créer une planche 4×3
```javascript
// Format imprimeur professionnel: 12 cartes
mode: "planche_4x3"
→ Image 4176 × 2030 px
→ Avec spacing 40px pour découpe
```

---

## 🐛 Debugging

### L'app ne charge pas?
1. Vérifiez les CDN (internet ok?)
2. Ouvrez console (F12) pour erreurs
3. Testez avec un autre navigateur

### Export PNG ne fonctionne pas?
1. Les champs nom + URL sont remplis?
2. Cliquez "Générer" d'abord
3. Puis "Télécharger PNG"

### QR code ne scanne pas?
- Vérifiez l'URL QR est correcte
- Testez avec un lecteur QR indépendant
- Sprint 2 : QR code généré dynamiquement

---

## 📄 License

MIT - Libre d'utiliser, modifier, distribuer

---

## 👥 Contributeurs

Créé par [Fokou Arnaud](https://github.com/fokouarnaud1996d-ui)

Contributions bienvenues! 
→ [Ouvrez une issue](https://github.com/fokouarnaud1996d-ui/businesscard/issues)

---

## 📞 Support

**Questions?** 
- 📖 Consultez la [Documentation](./CONCEPTION.md)
- 🐛 [Report un bug](https://github.com/fokouarnaud1996d-ui/businesscard/issues)
- 💬 [Discussions](https://github.com/fokouarnaud1996d-ui/businesscard/discussions)

---

**Version**: 1.0  
**Dernière mise à jour**: Mars 2026  
**⭐ Si ça vous plaît, donnez une star!**
