export default {
    template: `
        <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <!-- Header -->
            <header class="bg-white shadow-sm sticky top-0 z-40">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div class="flex justify-between items-center">
                        <div>
                            <h1 class="text-2xl font-bold text-gray-900">🎴 Business Card Generator</h1>
                            <p class="text-sm text-gray-600">Cartes de visite professionnelles en quelques clics</p>
                        </div>
                        <div class="text-right text-sm text-gray-600">
                            <p>v1.0 · <a href="https://github.com/fokouarnaud1996d-ui/businesscard" class="text-blue-600 hover:underline">GitHub</a></p>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Main Content -->
            <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Panel Contrôle (Gauche) -->
                    <div class="lg:col-span-1">
                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <h2 class="text-xl font-bold text-gray-900 mb-6">⚙️ Configuration</h2>
                            
                            <!-- Mode de génération -->
                            <div class="mb-6">
                                <label class="block text-sm font-medium text-gray-700 mb-2">Format</label>
                                <select v-model="formData.mode" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="single">Carte unique (85×55mm)</option>
                                    <option value="planche_2x2">Planche 2×2 (4 cartes)</option>
                                    <option value="planche_3x3">Planche 3×3 (9 cartes)</option>
                                    <option value="planche_4x3">Planche 4×3 (12 cartes)</option>
                                </select>
                            </div>

                            <!-- Informations -->
                            <div class="mb-6">
                                <label class="block text-sm font-medium text-gray-700 mb-2">Nom*</label>
                                <input 
                                    v-model="formData.cardName" 
                                    type="text" 
                                    placeholder="Ex: FUKUANO"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    @input="updatePreview"
                                >
                                <p class="text-xs text-gray-500 mt-1">{{ formData.cardName.length }} caractères</p>
                            </div>

                            <div class="mb-6">
                                <label class="block text-sm font-medium text-gray-700 mb-2">URL QR*</label>
                                <input 
                                    v-model="formData.qrUrl" 
                                    type="url" 
                                    placeholder="https://example.com"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    @input="updatePreview"
                                >
                            </div>

                            <!-- Personnalisation avancée -->
                            <details class="mb-6">
                                <summary class="cursor-pointer font-medium text-gray-700 mb-3">🎨 Personnalisation avancée</summary>
                                
                                <div class="mt-4 space-y-4">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Couleur fond</label>
                                        <div class="flex gap-2 items-center">
                                            <input 
                                                v-model="formData.bgColor" 
                                                type="color" 
                                                class="h-10 w-16 cursor-pointer rounded border border-gray-300"
                                                @input="updatePreview"
                                            >
                                            <input 
                                                v-model="formData.bgColor" 
                                                type="text" 
                                                placeholder="#FFFFFF"
                                                class="flex-1 px-2 py-1 border border-gray-300 rounded text-sm font-mono"
                                                @input="updatePreview"
                                            >
                                        </div>
                                    </div>

                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Couleur texte</label>
                                        <div class="flex gap-2 items-center">
                                            <input 
                                                v-model="formData.textColor" 
                                                type="color" 
                                                class="h-10 w-16 cursor-pointer rounded border border-gray-300"
                                                @input="updatePreview"
                                            >
                                            <input 
                                                v-model="formData.textColor" 
                                                type="text" 
                                                placeholder="#000000"
                                                class="flex-1 px-2 py-1 border border-gray-300 rounded text-sm font-mono"
                                                @input="updatePreview"
                                            >
                                        </div>
                                    </div>

                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Couleur accent (ligne)</label>
                                        <div class="flex gap-2 items-center">
                                            <input 
                                                v-model="formData.accentColor" 
                                                type="color" 
                                                class="h-10 w-16 cursor-pointer rounded border border-gray-300"
                                                @input="updatePreview"
                                            >
                                            <input 
                                                v-model="formData.accentColor" 
                                                type="text" 
                                                placeholder="#C8C8C8"
                                                class="flex-1 px-2 py-1 border border-gray-300 rounded text-sm font-mono"
                                                @input="updatePreview"
                                            >
                                        </div>
                                    </div>
                                </div>
                            </details>

                            <!-- Boutons d'action -->
                            <div class="space-y-3">
                                <button 
                                    @click="generateCard"
                                    :disabled="!formData.cardName || !formData.qrUrl"
                                    class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition"
                                >
                                    ✨ Générer
                                </button>
                                <button 
                                    @click="resetForm"
                                    class="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition"
                                >
                                    🔄 Réinitialiser
                                </button>
                                <button 
                                    @click="downloadCard"
                                    :disabled="!cardGenerated"
                                    class="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition"
                                >
                                    💾 Télécharger PNG
                                </button>
                            </div>

                            <!-- Info messages -->
                            <div v-if="statusMessage" class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
                                {{ statusMessage }}
                            </div>
                        </div>
                    </div>

                    <!-- Prévisualisation (Droite) -->
                    <div class="lg:col-span-2">
                        <div class="bg-white rounded-lg shadow-lg p-8">
                            <h2 class="text-xl font-bold text-gray-900 mb-6">👁️ Prévisualisation</h2>
                            
                            <!-- Mode affichage -->
                            <div class="mb-6 flex gap-2">
                                <button 
                                    v-for="mode in ['single', 'fit', 'full']"
                                    :key="mode"
                                    @click="previewMode = mode"
                                    :class="previewMode === mode ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'"
                                    class="px-4 py-2 rounded font-medium transition"
                                >
                                    {{ mode === 'single' ? '📄 Carte' : mode === 'fit' ? '📋 Adapter' : '🖥️ 100%' }}
                                </button>
                            </div>

                            <!-- Canvas de génération (caché) -->
                            <canvas 
                                ref="canvas" 
                                style="display: none;"
                            ></canvas>

                            <!-- Zone de prévisualisation -->
                            <div 
                                v-if="cardGenerated"
                                class="flex justify-center items-center bg-gray-100 rounded p-4 min-h-96"
                                :style="{
                                    transform: previewMode === 'fit' ? 'scale(0.5)' : previewMode === 'single' ? 'scale(0.35)' : 'scale(1)',
                                    transformOrigin: 'top center'
                                }"
                            >
                                <canvas 
                                    ref="previewCanvas" 
                                    class="border border-gray-300"
                                ></canvas>
                            </div>
                            <div v-else class="flex flex-col justify-center items-center bg-gray-100 rounded p-16 min-h-96">
                                <p class="text-gray-500 text-lg">Remplissez le formulaire et cliquez sur "Générer"</p>
                            </div>
                        </div>

                        <!-- Infos -->
                        <div class="mt-6 bg-white rounded-lg shadow-lg p-6">
                            <h3 class="font-bold text-gray-900 mb-2">📋 Informations</h3>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>✓ Format: 85×55mm (300 DPI)</li>
                                <li>✓ Résolution: 1004×650 px</li>
                                <li>✓ Export: PNG haute qualité</li>
                                <li v-if="formData.cardName.length > 25" class="text-orange-600">⚠️ Nom long détecté (taille auto-ajustée)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <!-- Footer -->
            <footer class="mt-16 bg-white border-t border-gray-200">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-600">
                    <p>Créé avec ❤️ · <a href="https://github.com/fokouarnaud1996d-ui/businesscard" class="text-blue-600 hover:underline">Source Code</a> · 
                    <a href="./CONCEPTION.md" class="text-blue-600 hover:underline">Documentation</a></p>
                </div>
            </footer>
        </div>
    `,

    data() {
        return {
            formData: {
                cardName: 'FUKUANO',
                qrUrl: 'https://example.com',
                mode: 'single',
                bgColor: '#FFFFFF',
                textColor: '#000000',
                accentColor: '#C8C8C8'
            },
            cardGenerated: false,
            statusMessage: '',
            previewMode: 'fit',
            
            // Constantes
            CARD_WIDTH: 1004,
            CARD_HEIGHT: 650,
            DPI: 300,
            MARGIN_TOP: 80,
            MARGIN_BOTTOM: 80,
            MARGIN_LEFT: 60,
            MARGIN_RIGHT: 60,
            SPACING: 40
        }
    },

    methods: {
        updatePreview() {
            this.statusMessage = `Nom: ${this.formData.cardName} (${this.formData.cardName.length} chars)`
        },

        calculateOptimalFontSize(name) {
            const len = name.length
            if (len <= 10) return { size: 100, status: '✓ Nom court (taille optimale)' }
            if (len <= 20) return { size: 70, status: '⚠️ Nom moyen (taille réduite à 70pt)' }
            if (len <= 35) return { size: 50, status: '⚠️⚠️ Nom long (taille réduite à 50pt)' }
            return { size: 40, status: '❌ Nom très long (40pt) - Considérez 2 cartes' }
        },

        generateCard() {
            try {
                const canvas = this.$refs.canvas
                if (!canvas) {
                    console.error('Canvas ref not found')
                    return
                }

                const ctx = canvas.getContext('2d')
                
                // Détermine les dimensions en fonction du mode
                const dims = this.getModeDimensions()
                canvas.width = dims.width
                canvas.height = dims.height

                // Remplit le canvas avec la couleur de fond
                ctx.fillStyle = this.formData.bgColor
                ctx.fillRect(0, 0, canvas.width, canvas.height)

                // Génère la(les) carte(s)
                if (this.formData.mode === 'single') {
                    this.drawCard(ctx, 0, 0, this.formData.cardName)
                } else {
                    const layout = this.getLayoutDimensions()
                    for (let row = 0; row < layout.rows; row++) {
                        for (let col = 0; col < layout.cols; col++) {
                            const x = col * (this.CARD_WIDTH + this.SPACING)
                            const y = row * (this.CARD_HEIGHT + this.SPACING)
                            this.drawCard(ctx, x, y, this.formData.cardName)
                        }
                    }
                }

                // Copie vers canvas de preview
                const previewCanvas = this.$refs.previewCanvas
                previewCanvas.width = canvas.width
                previewCanvas.height = canvas.height
                const previewCtx = previewCanvas.getContext('2d')
                previewCtx.drawImage(canvas, 0, 0)

                this.cardGenerated = true
                const { status } = this.calculateOptimalFontSize(this.formData.cardName)
                this.statusMessage = `✅ Carte générée! ${status}`

            } catch (error) {
                console.error('Error generating card:', error)
                this.statusMessage = `❌ Erreur: ${error.message}`
            }
        },

        drawCard(ctx, x, y, name) {
            // Fond de la carte
            ctx.fillStyle = this.formData.bgColor
            ctx.fillRect(x, y, this.CARD_WIDTH, this.CARD_HEIGHT)

            // Texte
            const { size } = this.calculateOptimalFontSize(name)
            ctx.font = `${size}px "Segoe UI", sans-serif`
            ctx.fillStyle = this.formData.textColor
            ctx.textAlign = 'center'
            ctx.textBaseline = 'top'
            
            const textX = x + this.CARD_WIDTH / 2
            const textY = y + this.MARGIN_TOP
            ctx.fillText(name, textX, textY)

            // Ligne accent
            const lineY = y + this.MARGIN_TOP + 140
            ctx.strokeStyle = this.formData.accentColor
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.moveTo(x + this.MARGIN_LEFT, lineY)
            ctx.lineTo(x + this.CARD_WIDTH - this.MARGIN_RIGHT, lineY)
            ctx.stroke()

            // QR Code (placeholder - sera généré après)
            this.drawQRCode(ctx, x + this.CARD_WIDTH - this.MARGIN_RIGHT - 220, y + this.CARD_HEIGHT - this.MARGIN_BOTTOM - 220)
        },

        drawQRCode(ctx, x, y) {
            // Placeholder pour QR - sera généré avec qrcode.js
            const size = 220
            
            // Fond blanc
            ctx.fillStyle = '#FFFFFF'
            ctx.fillRect(x, y, size, size)
            
            // Border noir
            ctx.strokeStyle = '#000000'
            ctx.lineWidth = 2
            ctx.strokeRect(x, y, size, size)
            
            // Texte placeholder
            ctx.font = '12px sans-serif'
            ctx.fillStyle = '#999999'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText('QR Code', x + size/2, y + size/2)
        },

        getModeDimensions() {
            const layout = this.getLayoutDimensions()
            const spacing = layout.cols > 1 ? this.SPACING * (layout.cols - 1) : 0
            const spacingV = layout.rows > 1 ? this.SPACING * (layout.rows - 1) : 0
            
            return {
                width: (this.CARD_WIDTH * layout.cols) + spacing,
                height: (this.CARD_HEIGHT * layout.rows) + spacingV
            }
        },

        getLayoutDimensions() {
            const layouts = {
                'single': { rows: 1, cols: 1 },
                'planche_2x2': { rows: 2, cols: 2 },
                'planche_3x3': { rows: 3, cols: 3 },
                'planche_4x3': { rows: 3, cols: 4 }
            }
            return layouts[this.formData.mode] || layouts.single
        },

        downloadCard() {
            const canvas = this.$refs.canvas
            if (!canvas) return

            const link = document.createElement('a')
            link.href = canvas.toDataURL('image/png')
            link.download = `businesscard_${this.formData.cardName.replace(/\s+/g, '_')}.png`
            link.click()

            this.statusMessage = '✅ Téléchargement en cours...'
        },

        resetForm() {
            this.formData = {
                cardName: '',
                qrUrl: '',
                mode: 'single',
                bgColor: '#FFFFFF',
                textColor: '#000000',
                accentColor: '#C8C8C8'
            }
            this.cardGenerated = false
            this.statusMessage = ''
        }
    }
}
