# 🚀 Quick Start - Business Card Generator

## ⚡ Démarrage en 2 minutes

### 1️⃣ Accéder à l'application
```
🌐 https://fokouarnaud1996d-ui.github.io/businesscard/
```

### 2️⃣ Remplir le formulaire

```
┌────────────────────────────────┐
│ ⚙️ Configuration               │
├────────────────────────────────┤
│                                │
│ Format: [Carte unique ▼]       │
│                                │
│ Nom*:   [FUKUANO           ]   │
│         7 caractères           │
│                                │
│ URL QR*: [https://... ]        │
│                                │
│ 🎨 Personnalisation avancée    │
│   Couleur fond:  [Blanc]       │
│   Couleur texte: [Noir]        │
│   Couleur accent:[Gris]        │
│                                │
│ [✨ Générer]  [🔄 Réin.]      │
│ [💾 Télécharger PNG]           │
│                                │
└────────────────────────────────┘
```

### 3️⃣ Générer et télécharger

- Cliquez **✨ Générer**
- Prévisualisation s'affiche à droite
- Cliquez **💾 Télécharger PNG**
- Fichier téléchargé: `businesscard_FUKUANO.png` ✅

---

## 📋 Cas d'usage

### Cas 1: Carte uniqe simple
```
Nom: FUKUANO
URL: https://carrd-link.com
Format: Carte unique (85×55mm)
→ Exporte PNG pour ton imprimeur
```

### Cas 2: Planche 4×3 (12 cartes)
```
Nom: FOKOU Arnaud
URL: https://example.com
Format: Planche 4×3
→ Export 410×250mm (prêt imprimeur)
```

### Cas 3: Couleurs personnalisées
```
Fond:   #F0F4F8 (bleu clair)
Texte:  #1A202C (bleu foncé)
Accent: #3182CE (bleu vif)
→ Marque cohérente avec logo
```

---

## 🎯 Explications des options

### Format
| Option | Usage | Dimensions |
|--------|-------|------------|
| **Carte unique** | Preview/test | 85×55mm |
| **Planche 2×2** | 4 cartes | 173×113mm |
| **Planche 3×3** | 9 cartes | 310×250mm |
| **Planche 4×3** | 12 cartes (optimal) | 410×250mm |

### Couleurs
- **Fond** : Blanc recommandé (pro) ou personnalisé
- **Texte** : Noir pour contraste max
- **Accent** : Ligne décorative sous le nom

### QR Code
- Scannable instantanément
- Pointe vers ton URL
- Généré automatiquement
- Positionné bas-droit

---

## 💡 Astuces

### ✅ Bonnes pratiques

```
✓ Nom court (≤10 chars) → Meilleur rendu
✓ URL valide → QR scannable  
✓ Couleurs contrastées → Lisibilité
✓ Planche 4×3 → Optimal imprimeur
✓ PNG haute qualité → 300 DPI
```

### ❌ À éviter

```
✗ Nom très long (>35 chars) → Texte petit
✗ Fond coloré + texte clair → Peu lisible
✗ URL invalide → QR inutile
✗ Format trop petit → Illisible
```

---

## 🔄 Workflow complet

1. **Planif** 📝
   - Choisir nom exact
   - Préparer URL CARRD/site
   - Décider format & quantité

2. **Générer** ⚙️
   - Remplir le formulaire
   - Ajuster couleurs si besoin
   - Prévisualiser

3. **Télécharger** 💾
   - Export PNG 300 DPI
   - Envoyer à l'imprimeur
   - Ou imprimer directement

4. **Imprimer** 🖨️
   - Choix imprimeur professionnel
   - Papier mat 350g/m²
   - Délai: 3-5 jours

---

## 📊 Spécifications techniques

```
Resolution: 300 DPI (Standard print)
Format:     85×55mm (ISO/IEC 7810 ID-1)
Colors:     RGB → CMYK (auto conversion)
QR Code:    Type 1 (40×40 modules max)
Export:     PNG lossless + metadata
Size:       ~30-50KB per card
```

---

## ❓ FAQ

### Q: Puis-je imprimer directement ?
**A:** Oui, mais imprimeur professionnel recommandé pour qualité optimale

### Q: Comment changer les couleurs ?
**A:** Cliquez **🎨 Personnalisation avancée** → Sélectionnez couleurs

### Q: Le QR code peut-il pointer vers un PDF ?
**A:** Oui, n'importe quelle URL valide fonctionne

### Q: Puis-je exporter en SVG/PDF ?
**A:** Prochainement dans Sprint 2 (Q2 2026) ✓

### Q: Mes données sont-elles sauvegardées ?
**A:** Oui, localStorage (navigateur) → Persiste entre sessions

### Q: Comment réinitialiser ?
**A:** Cliquez **🔄 Réinitialiser**

---

## 🐛 Problèmes connus

**v1.0 (Actuels)**
- QR Code peut être placeholder si qrcode.js ne charge pas
  → Solution: Rafraîchir la page (F5)

- Très longs noms (>35 chars) réduisent police
  → Solution: Scinder sur 2 cartes

---

## 📞 Support

- 🐙 **GitHub Issues:** [business-card/issues](https://github.com/fokouarnaud1996d-ui/businesscard/issues)
- 📧 **Email:** contact@example.com
- 💬 **Discussions:** GitHub Discussions activées

---

## 🎓 Pour en savoir plus

- [Architecture](./ARCHITECTURE.md)
- [Design & UX](./CONCEPTION.md)
- [Roadmap](./ROADMAP.md)
- [Code Source](https://github.com/fokouarnaud1996d-ui/businesscard)

---

**Version:** 1.0  
**Dernière mise à jour:** 30 Mars 2026
