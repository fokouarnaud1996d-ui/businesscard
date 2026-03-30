#!/bin/bash
# Démarre un serveur HTTP local pour tester l'application

echo ""
echo "==============================================="
echo "🚀 Démarrage du serveur local..."
echo "==============================================="
echo ""
echo "📍 Adresse: http://localhost:8000"
echo "📁 Dossier: $(pwd)"
echo ""
echo "Appuyez sur CTRL+C pour arrêter le serveur"
echo ""
echo "==============================================="
echo ""

# Vérifie si Python est disponible
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
else
    echo "❌ Erreur: Python n'est pas installé"
    echo "Installez Python depuis: https://www.python.org"
    exit 1
fi
