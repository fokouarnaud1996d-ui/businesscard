@echo off
REM Script simple pour démarrer un serveur HTTP local
REM Cela permet de tester l'application sans erreurs CORS

echo.
echo ====================================================
echo  Démarrage du serveur HTTP local
echo ====================================================
echo.
echo Serveur démarrant sur http://localhost:8000
echo.
echo 🚀 Appuyez sur Ctrl+C pour arrêter le serveur
echo.
echo ====================================================
echo.

REM Vérifie si Python est installé
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ ERREUR: Python n'est pas installé ou non trouvé dans PATH
    echo.
    echo Solutions:
    echo 1. Installez Python depuis https://www.python.org/downloads/
    echo 2. Assurez-vous de cocher "Add Python to PATH" lors de l'installation
    echo 3. Relancez ce script
    echo.
    pause
    exit /b 1
)

REM Démarre le serveur
echo ✅ Serveur trouvé. Démarrage...
python -m http.server 8000

REM Si le serveur se ferme
echo.
echo ❌ Le serveur s'est arrêté.
pause
