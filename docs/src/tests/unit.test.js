/**
 * Tests unitaires - Générateur de Cartes
 * Lance avec: node src/tests/unit.test.js
 */

// Utilitaires de test
const assert = {
    equal: (actual, expected, msg) => {
        if (actual !== expected) throw new Error(`❌ ${msg}: expected ${expected}, got ${actual}`)
        console.log(`✅ ${msg}`)
    },
    ok: (condition, msg) => {
        if (!condition) throw new Error(`❌ ${msg}`)
        console.log(`✅ ${msg}`)
    },
    throws: (fn, msg) => {
        try {
            fn()
            throw new Error(`❌ ${msg}: should have thrown`)
        } catch (e) {
            console.log(`✅ ${msg}`)
        }
    }
}

// ============= Tests fonctionnelsNous =============

// Test 1 : Calcul taille police
function testFontSizeCalculation() {
    console.log('\n📝 Test 1: Calcul taille police\n')

    const calculateOptimalFontSize = (name) => {
        const len = name.length
        if (len <= 10) return { size: 100, status: 'court' }
        if (len <= 20) return { size: 70, status: 'moyen' }
        if (len <= 35) return { size: 50, status: 'long' }
        return { size: 40, status: 'très long' }
    }

    // Cas 1: Nom court
    const short = calculateOptimalFontSize('FUKUANO')
    assert.equal(short.size, 100, 'Nom court → 100pt')
    assert.equal(short.status, 'court', 'Status court')

    // Cas 2: Nom moyen
    const medium = calculateOptimalFontSize('Jean Dupont')
    assert.equal(medium.size, 70, 'Nom moyen → 70pt')

    // Cas 3: Nom long
    const long = calculateOptimalFontSize('FOKOU Arnaud Cedric')
    assert.equal(long.size, 50, 'Nom long → 50pt')

    // Cas 4: Très long
    const verylong = calculateOptimalFontSize('FOKOU Arnaud Cedric James Simon')
    assert.equal(verylong.size, 40, 'Nom très long → 40pt')
}

// Test 2 : Validation d'URL
function testURLValidation() {
    console.log('\n📝 Test 2: Validation URL QR\n')

    const isValidURL = (url) => {
        try {
            new URL(url)
            return true
        } catch {
            return false
        }
    }

    assert.ok(isValidURL('https://example.com'), 'URL valide: https://example.com')
    assert.ok(isValidURL('https://carrd.co/monsite'), 'URL valide: carrd')
    assert.ok(!isValidURL('pas une url'), 'URL invalide détectée')
    assert.ok(!isValidURL(''), 'URL vide invalide')
}

// Test 3 : Calcul dimensions
function testDimensionCalculations() {
    console.log('\n📝 Test 3: Calcul dimensions planches\n')

    const CARD_WIDTH = 1004
    const CARD_HEIGHT = 650
    const SPACING = 40

    const getDimensions = (mode) => {
        const layouts = {
            'single': { rows: 1, cols: 1 },
            '2x2': { rows: 2, cols: 2 },
            '3x3': { rows: 3, cols: 3 },
            '4x3': { rows: 3, cols: 4 }
        }
        const layout = layouts[mode]
        const spacingH = layout.cols > 1 ? SPACING * (layout.cols - 1) : 0
        const spacingV = layout.rows > 1 ? SPACING * (layout.rows - 1) : 0
        return {
            width: CARD_WIDTH * layout.cols + spacingH,
            height: CARD_HEIGHT * layout.rows + spacingV
        }
    }

    // Test single
    const single = getDimensions('single')
    assert.equal(single.width, 1004, 'Single: width = 1004px')
    assert.equal(single.height, 650, 'Single: height = 650px')

    // Test 2x2
    const planche2x2 = getDimensions('2x2')
    assert.equal(planche2x2.width, 2048, 'Planche 2x2: width = 2048px (1004*2 + 40)')
    assert.equal(planche2x2.height, 1340, 'Planche 2x2: height = 1340px (650*2 + 40)')

    // Test 3x3
    const planche3x3 = getDimensions('3x3')
    assert.equal(planche3x3.width, 3132, 'Planche 3x3: width correct')
    assert.equal(planche3x3.height, 2030, 'Planche 3x3: height correct')

    // Test 4x3
    const planche4x3 = getDimensions('4x3')
    assert.equal(planche4x3.width, 4176, 'Planche 4x3: width correct')
    assert.equal(planche4x3.height, 2030, 'Planche 4x3: height correct')
}

// Test 4 : Validation couleurs hex
function testColorValidation() {
    console.log('\n📝 Test 4: Validation couleurs HEX\n')

    const isValidHexColor = (hex) => {
        return /^#[0-9A-F]{6}$/i.test(hex)
    }

    assert.ok(isValidHexColor('#FFFFFF'), 'Blanc valide')
    assert.ok(isValidHexColor('#000000'), 'Noir valide')
    assert.ok(isValidHexColor('#C8C8C8'), 'Gris valide')
    assert.ok(!isValidHexColor('FFFFFF'), 'Pas de # invalide')
    assert.ok(!isValidHexColor('#FFF'), 'Trop court invalide')
    assert.ok(!isValidHexColor('#GGGGGG'), 'Caractères invalides')
}

// Test 5 : Conversion pixels to mm
function testPixelToMMConversion() {
    console.log('\n📝 Test 5: Conversion pixels → mm\n')

    const DPI = 300
    const pxToMM = (px) => (px / (DPI / 25.4))
    
    // Test 1004px = 85mm
    const width_mm = pxToMM(1004)
    assert.ok(Math.abs(width_mm - 85) < 1, `1004px ≈ 85mm (got ${width_mm.toFixed(1)}mm)`)

    // Test 650px = 55mm
    const height_mm = pxToMM(650)
    assert.ok(Math.abs(height_mm - 55) < 1, `650px ≈ 55mm (got ${height_mm.toFixed(1)}mm)`)
}

// ============= Exécution =============

function runAllTests() {
    console.log('🧪 TESTS UNITAIRES - Business Card Generator')
    console.log('=' .repeat(50))

    try {
        testFontSizeCalculation()
        testURLValidation()
        testDimensionCalculations()
        testColorValidation()
        testPixelToMMConversion()

        console.log('\n' + '='.repeat(50))
        console.log('✅ TOUS LES TESTS RÉUSSIS! (5/5)')
        console.log('='.repeat(50))
        process.exit(0)

    } catch (error) {
        console.error('\n' + '='.repeat(50))
        console.error(`❌ TEST ÉCHOUÉ: ${error.message}`)
        console.error('='.repeat(50))
        process.exit(1)
    }
}

// Lance les tests
runAllTests()
