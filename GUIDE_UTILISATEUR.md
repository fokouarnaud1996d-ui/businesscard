# 📘 Guide d'utilisation - Générateur de Cartes de Visite

## 🎯 Quickstart (30 secondes)

1. **Ouvrez** : https://fokouarnaud1996d-ui.github.io/businesscard/
2. **Entrez** votre nom & URL CARRD/website
3. **Cliquez** "Générer"
4. **Téléchargez** PNG
5. **Envoyez à l'imprimeur**

C'est tout! ✨

---

## 📝 Champs du formulaire

### Champ obligatoire : **Nom**
- Ce qui s'affichera au centre de la carte
- Exemples:
  - `FUKUANO` (court) → Police 100pt
  - `Jean Dupont` (moyen) → Police 70pt
  - `FOKOU Arnaud Cedric James` (long) → Police 50pt
  - Très long? L'app ajuste automatiquement!

### Champ obligatoire : **URL QR**
- Le lien scandé par le QR code
- Exemples:
  - `https://carrd.co/monsite`
  - `https://example.com`
  - `https://mon-portfolio.fr`

### Format
- **Carte unique** : 1 carte standard 85×55mm
- **Planche 2×2** : 4 cartes (économique, pour A4)
- **Planche 3×3** : 9 cartes
- **Planche 4×3** : 12 cartes (optimal imprimeur)

---

## 🎨 Personnalisation avancée

Cliquez sur **"Personnalisation avancée"** pour accéder à:

### Couleur fond
- Blanc (#FFFFFF) = professionnel [par défaut]
- Noir (#000000) = moderne
- Gris (#E5E5E5) = discret

### Couleur texte
- Noir (#000000) = lisible sur blanc [par défaut]
- Blanc (#FFFFFF) = lisible si fond foncé
- Bleu (#0066CC) = original

### Couleur accent (petite ligne)
- Gris clair (#C8C8C8) = subtil [recommandé]
- Transparent = pas de ligne
- Couleur corporate = votre marque

---

## 💾 Export & Impression

### Quand cliquer "Télécharger PNG"?
- ☑️ Remplissez d'abord **Nom** et **URL QR**
- ☑️ Cliquez **"Générer"**
- ☑️ Vérifiez la prévisualisation
- ✅ **Puis** cliquez "Télécharger PNG"

### Fichier généré
- Format: **PNG** (haute qualité)
- Résolution: **300 DPI** (prêt imprimeur)
- Dimensions: 
  - Carte seule: 1004 × 650 px (85×55mm)
  - Planche 2×2: 2048 × 1340 px
  - Planche 3×3: 3132 × 2030 px
  - Planche 4×3: 4176 × 2030 px

### Acheminer vers l'imprimeur
1. Téléchargez le PNG
2. Envoyez-le à votre imprimeur (ex: Vistaprint, Mprint)
3. Spécifiez:
   - **Papier**: Mat 350g/m² (recommandé)
   - **Taille**: 85 × 55 mm
   - **Résolution**: 300 DPI ✓ [dejà OK]

---

## 🔍 Prévisualisation

### Mode aperçu
- **Carte** : Zoom 35% (voir la carte)
- **Adapter** : Zoom 50% (adapter à l'écran)
- **100%** : Taille réelle (voir les détails)

### Vérifier avant impression
✓ Nom bien centré  
✓ QR code visible (bas-droite)  
✓ Ligne accent sous le nom  
✓ Espaces blancs généreux  

---

## ❓ FAQ

### Q: Puis-je changer le QR code?
**A**: Oui! L'app va générer un nouveau QR basé sur votre URL. (Sprint 2: QR dynamique mieux implémenté)

### Q: Le nom est trop petit pour mon planche
**A**: Raccourcissez-le. Exemple: `Jean Dupont` au lieu de `Jean Claude Dupont Jean Alfred`

### Q: Je veux ajouter mon logo
**A**: Non supporté en v1.0. Prochainement dans Sprint 3. Pour le moment, utilisez Scribus ou autre outil.

### Q: Puis-je exporter en SVG (éditable)?
**A**: Pas encore, mais prévu Sprint 2. Pour le moment, export PNG seulement.

### Q: Quelle est la meilleure résolution pour imprimer?
**A**: **300 DPI minimum** = Qualité prof. L'app génère déjà 300 DPI ✓

### Q: Pouvez-vous garantir l'impression?
**A**: L'app génère les bonnes dimensions. La qualité d'impression dépend aussi du papier et de l'imprimeur.

### Q: Puis-je utiliser plusieurs noms sur une planche?
**A**: Pas encore l'interface, mais possible en v2. Actuellement, même nom répété x fois.

### Q: La connexion internet est obligatoire?
**A**: Oui pour le premier chargement. Après, l'app fonctionne offline (données CDN chargées).

---

## 🚨 Problèmes courants

### **"Le bouton Télécharger est gris"**
→ Remplissez d'abord **Nom** et **URL QR**  
→ Cliquez **"Générer"**  
→ Le bouton devient vert

### **"La prévisualisation est vide"**
→ Remplissez les champs et re-cliquez "Générer"

### **"Mon navigateur affiche 'CDN error'"**
→ Vérifiez votre connexion internet  
→ Attendez quelques secondes  
→ Rechargez la page (F5)

### **"L'imprimeur dit que le PNG est flou"**
→ L'app exporte 300 DPI (correct)  
→ Vérifiez avec votre imprimeur la taille exacte  
→ Peut être un problème de logiciel imprimeur

---

## 📞 Support & Feedback

**Avez-vous une suggestion?**  
→ [Ouvrez une issue GitHub](https://github.com/fokouarnaud1996d-ui/businesscard/issues)

**Vous avez trouvé un bug?**  
→ Décrivez: navigateur, os, étapes pour reproduire

**Vous aimez l'app?**  
→ ⭐ Donnez une star au [repo GitHub](https://github.com/fokouarnaud1996d-ui/businesscard)!

---

## 🎓 Ressources

- 📖 [Documentation technique](./CONCEPTION.md)
- 🛠️ [Architecture du projet](./ARCHITECTURE.md) - bientôt
- 🗺️ [Roadmap features à venir](./ROADMAP.md) - bientôt
- 🔗 [Code source complet](https://github.com/fokouarnaud1996d-ui/businesscard)

---

**Version**: 1.0  
**Dernière mise à jour**: Mars 2026  
**Questions?** Consultez la [FAQ](#-faq) ou ouvrez une issue!
