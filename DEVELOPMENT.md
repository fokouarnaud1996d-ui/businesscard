# 🚀 Guide de Développement Local

## Problème de développement
Quand vous ouvrez `index.html` directement dans le navigateur, vous rencontrez :
```
❌ Failed to load resource: net::ERR_FAILED
❌ Unsafe attempt to load URL from file:// protocol
⚠️ Tailwind CDN warning
```

**Raison** : Le protocole `file://` est bloqué par le navigateur pour des raisons de sécurité. Les CDN et les imports ES6 modules ne fonctionnent qu'avec `http://` ou `https://`.

---

## ✅ Solution : Lancer un serveur HTTP local

### **Windows (Rapide)**

1. **Double-cliquez sur `START.bat`**
   - Un terminal s'ouvre automatiquement
   - Le serveur démarre sur http://localhost:8000

  ```bash
  # Ou en ligne de commande :
  cd D:\box\projet\doc\lycee-archiv\2025-2026\docs\1ereA4\publicapp
  python -m http.server 8000
  ```

2. **Ouvrez votre navigateur**
   ```
   http://localhost:8000
   ```

3. **Arrêtez le serveur**
   - Appuyez sur `CTRL+C` dans le terminal

---

### **Mac / Linux (Rapide)**

```bash
# Option 1 : Rendre le script exécutable puis lancer
chmod +x START.sh
./START.sh

# Option 2 : Lancer directement
cd path/to/publicapp
python3 -m http.server 8000
```

---

### **Avec Node.js (Alternative)**

Si vous préférez Node.js :

```bash
# Installation (une fois)
npm install -g live-server

# Lancer
live-server
```

---

## 📋 Comparaison : En local vs Production

| Aspect | Local (file://) | Local (http://) | Production (GitHub Pages) |
|--------|---|---|---|
| **Protocol** | ❌ `file://` | ✅ `http://localhost` | ✅ `https://` |
| **CDN** | ❌ Bloqué | ✅ Fonctionne | ✅ Fonctionne |
| **localStorage** | ❌ Limité | ✅ OK | ✅ OK |
| **Modules ES6** | ❌ Bloqué | ✅ OK | ✅ OK |
| **Erreurs** | ❌ Beaucoup | ✅ Zéro | ✅ Zéro |

---

## 🔧 Développement : Workflow recommandé

```bash
# 1. Terminal 1 : Lancer le serveur
python -m http.server 8000

# 2. Browser : Ouvrir
http://localhost:8000

# 3. Éditeur : Modifier les fichiers
# - Les changements se voient au refresh (F5)

# 4. Quand prêt pour production
git push origin main
# → Déploie automatiquement sur GitHub Pages
```

---

## ✅ Vérifier que tout fonctionne

Ouvrez la **Console du navigateur** (F12) et cherchez :

### ✅ Bon (aucuns de ces messages)
```
Vue version: 3.4.21 (production)
Tailwind CSS version: 3.x
QRCode library loaded ✓
html2canvas loaded ✓
```

### ❌ Mauvais (arrêtez le serveur et redémarrez)
```
Failed to load resource: net::ERR_FAILED
Unsafe attempt to load URL from file:// protocol
You are running a development build of Vue (dev.js)
```

---

## 📚 Fichiers de démarrage

- **Windows** : Double-cliquez `START.bat` ⭐ Easiest
- **Mac/Linux** : `./START.sh` ou `python3 -m http.server 8000`
- **Node.js** : `npx live-server` (rechargement auto)

---

## 🌐 En Production (GitHub Pages)

Pas besoin de serveur ! La version en ligne fonctionne directement :
```
https://fokouarnaud1996d-ui.github.io/businesscard/
```

**Pourquoi ça marche en production ?**
- ✅ GitHub Pages utilise HTTPS (protocole sécurisé)
- ✅ CDN fonctionne natif sur HTTPS
- ✅ localStorage fonctionne
- ✅ Vue production build optimisé
- ✅ Zéro configuration

---

## 🐛 Dépannage

| Erreur | Solution |
|--------|----------|
| **Port 8000 déjà utilisé** | `python -m http.server 8001` |
| **Python pas installé** | Téléchargez depuis https://www.python.org |
| **Fichiers CSS/JS manquent** | Vérifiez que vous êtes dans le bon dossier |
| **Rien n'apparaît** | Rafraîchissez (CTRL+F5) et attendez 2-3s |

---

## 💡 Tips

- ⭐ Utilisez `START.bat` pour plus de confort
- 🔄 Rafraîchissez après chaque modification (F5)
- 🔍 Inspectez avec F12 Console pour les erreurs
- 📱 Testez en responsive (CTRL+SHIFT+M)

**Bon développement !** 🚀
