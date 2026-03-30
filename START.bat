@echo off
REM Démarre un serveur HTTP local pour tester l'application

echo.
echo ===============================================
echo 🚀 Démarrage du serveur local...
echo ===============================================
echo.
echo 📍 Adresse: http://localhost:8000
echo 📁 Dossier: %CD%
echo.
echo Appuyez sur CTRL+C pour arrêter le serveur
echo.
echo ===============================================
echo.

python -m http.server 8000

pause
