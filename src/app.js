/**
 * Application Vue 3 - Générateur de Cartes de Visite
 * Utilise Vue 3 avec API Global (compatible CDN)
 */

const { createApp } = Vue;

const app = createApp({
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            💳 Générateur de Cartes de Visite
          </h1>
          <p class="text-slate-600 text-lg">Créez vos cartes professionnelles en quelques clics</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Left: Formulaire -->
          <div class="bg-white rounded-xl shadow-lg p-6 h-fit">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Paramètres</h2>
            
            <div class="space-y-4">
              <!-- Nom -->
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Nom complet</label>
                <input 
                  v-model="cardData.name" 
                  @input="saveToLocalStorage"
                  type="text" 
                  placeholder="ex: FUKUANO"
                  class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <!-- URL QR -->
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">URL pour QR Code</label>
                <input 
                  v-model="cardData.qrUrl" 
                  @input="saveToLocalStorage"
                  type="url" 
                  placeholder="https://ton-site.com"
                  class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <!-- Format -->
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Format</label>
                <select 
                  v-model="cardData.format" 
                  @change="saveToLocalStorage"
                  class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="single">1 Carte (85×55mm)</option>
                  <option value="2x2">Planche 2×2 (4 cartes)</option>
                  <option value="3x3">Planche 3×3 (9 cartes)</option>
                  <option value="4x3">Planche 4×3 (12 cartes)</option>
                </select>
              </div>

              <!-- Boutons -->
              <div class="pt-4 space-y-2">
                <button 
                  @click="generateImage"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
                >
                  🎨 Générer
                </button>
                <button 
                  @click="downloadImage"
                  class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition"
                >
                  📥 Exporter PNG
                </button>
              </div>

              <!-- Info -->
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                <p><strong>💡 Conseil :</strong> Vos données sont sauvegardées localement. N'hésitez pas à les réutiliser !</p>
              </div>
            </div>
          </div>

          <!-- Right: Prévisualisation -->
          <div class="bg-white rounded-xl shadow-lg p-6 h-fit">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Prévisualisation</h2>
            
            <div class="bg-slate-100 rounded-lg p-4 mb-4 flex items-center justify-center min-h-[400px]">
              <div 
                ref="previewContainer"
                class="bg-white"
                :style="previewStyle"
              >
                <canvas ref="canvas" class="w-full"></canvas>
              </div>
            </div>

            <div class="text-sm text-slate-600 space-y-1">
              <p><strong>Dimensions :</strong> {{ previewDimensions }}</p>
              <p><strong>Résolution :</strong> 300 DPI (prête imprimeur)</p>
              <p><strong>Format :</strong> PNG</p>
            </div>
          </div>
        </div>

        <!-- Success Message -->
        <div v-if="successMessage" class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          {{ successMessage }}
        </div>
      </div>
    </div>
  `,

  data() {
    return {
      cardData: {
        name: 'FUKUANO',
        qrUrl: 'https://ton-site-carrd.com',
        format: 'single'
      },
      successMessage: '',
      canvas: null
    };
  },

  computed: {
    previewStyle() {
      const formatDimensions = {
        single: { width: '200px', height: '130px' },
        '2x2': { width: '400px', height: '260px' },
        '3x3': { width: '600px', height: '390px' },
        '4x3': { width: '800px', height: '390px' }
      };
      return {
        ...formatDimensions[this.cardData.format],
        border: '1px solid #e5e7eb'
      };
    },

    previewDimensions() {
      const dimensions = {
        single: '85×55mm (1004×650px)',
        '2x2': '170×110mm (2048×1300px)',
        '3x3': '255×165mm (3052×1950px)',
        '4x3': '340×165mm (4056×1950px)'
      };
      return dimensions[this.cardData.format];
    }
  },

  methods: {
    saveToLocalStorage() {
      localStorage.setItem('cardData', JSON.stringify(this.cardData));
    },

    loadFromLocalStorage() {
      const saved = localStorage.getItem('cardData');
      if (saved) {
        this.cardData = JSON.parse(saved);
      }
    },

    async generateImage() {
      this.canvas = this.$refs.canvas;
      const ctx = this.canvas.getContext('2d');
      
      // Dimensions selon le format
      const formats = {
        single: { width: 1004, height: 650, cols: 1, rows: 1 },
        '2x2': { width: 2048, height: 1300, cols: 2, rows: 2 },
        '3x3': { width: 3052, height: 1950, cols: 3, rows: 3 },
        '4x3': { width: 4056, height: 1950, cols: 4, rows: 3 }
      };

      const format = formats[this.cardData.format];
      this.canvas.width = format.width;
      this.canvas.height = format.height;

      // Fond blanc
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, format.width, format.height);

      // Dimensions d'une carte
      const cardWidth = 1004;
      const cardHeight = 650;
      const spacing = 40;

      // Pré-génère le QR code une fois
      const qrImage = await this.generateQRImage(220);

      // Génère les cartes
      for (let row = 0; row < format.rows; row++) {
        for (let col = 0; col < format.cols; col++) {
          const x = col * (cardWidth + spacing);
          const y = row * (cardHeight + spacing);
          this.drawCard(ctx, x, y, qrImage);
        }
      }

      // Message de succès
      this.successMessage = '✅ Carte générée !';
      setTimeout(() => { this.successMessage = ''; }, 3000);
    },

    generateQRImage(size) {
      return new Promise((resolve, reject) => {
        try {
          const tempDiv = document.createElement('div');
          tempDiv.style.display = 'none';
          document.body.appendChild(tempDiv);

          const qr = new QRCode(tempDiv, {
            text: this.cardData.qrUrl,
            width: size,
            height: size,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
          });

          setTimeout(() => {
            try {
              const img = tempDiv.querySelector('img') || tempDiv.querySelector('canvas');
              if (img) {
                const canvas = document.createElement('canvas');
                canvas.width = size;
                canvas.height = size;
                const c = canvas.getContext('2d');
                c.drawImage(img, 0, 0);
                document.body.removeChild(tempDiv);
                resolve(canvas);
              } else {
                throw new Error('QR image not found');
              }
            } catch (e) {
              document.body.removeChild(tempDiv);
              reject(e);
            }
          }, 200);
        } catch (e) {
          reject(e);
        }
      });
    },

    drawCard(ctx, offsetX, offsetY, qrImage) {
      const cardWidth = 1004;
      const cardHeight = 650;
      const marginTop = 80;
      const marginLeft = 60;
      const marginRight = 60;

      // Bordure (optionnel)
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 1;
      ctx.strokeRect(offsetX, offsetY, cardWidth, cardHeight);

      // Texte (nom)
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 100px Calibri, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(
        this.cardData.name,
        offsetX + cardWidth / 2,
        offsetY + marginTop + 80
      );

      // Ligne accent
      ctx.strokeStyle = '#c8c8c8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(offsetX + marginLeft, offsetY + marginTop + 140);
      ctx.lineTo(offsetX + cardWidth - marginRight, offsetY + marginTop + 140);
      ctx.stroke();

      // QR Code
      const qrSize = 220;
      const qrX = offsetX + cardWidth - marginRight - qrSize;
      const qrY = offsetY + cardHeight - 80 - qrSize;
      
      if (qrImage) {
        ctx.drawImage(qrImage, qrX, qrY, qrSize, qrSize);
      }
    },

    async downloadImage() {
      if (!this.canvas || this.canvas.width === 0) {
        alert('Veuillez d\'abord générer la carte');
        return;
      }

      const link = document.createElement('a');
      link.href = this.canvas.toDataURL('image/png');
      link.download = `carte_visite_${this.cardData.name.replace(/\s+/g, '_')}.png`;
      link.click();

      this.successMessage = '📥 PNG téléchargé !';
      setTimeout(() => { this.successMessage = ''; }, 3000);
    }
  },

  mounted() {
    this.loadFromLocalStorage();
    this.generateImage();
  }
});

// Monte l'app
app.mount('#app');
