import React from "react";

const ConstitutionalProofScreenplay: React.FC = () => {
  return (
    <div className="constitutional-proof-screenplay-container my-16 border border-rule bg-[#faf6ee] text-[#1a1208] font-mono text-[14px] leading-[1.7] relative overflow-hidden shadow-xl rounded-sm">
      <style dangerouslySetInnerHTML={{ __html: `
        .constitutional-proof-screenplay-container {
          --cream: #f5efe0;
          --warm-white: #faf6ee;
          --mustard: #d4a017;
          --sienna: #a0522d;
          --teal: #2a6b6b;
          --coral: #e8735a;
          --sage: #6b8f6b;
          --sepia: #8b6914;
          --ink: #1a1208;
          --pale-coral: #f2c4b4;
          --muted-teal: #4a8a8a;
          font-family: 'Courier Prime', 'Courier New', monospace;
          padding: 80px 40px;
        }

        .cp-page {
          max-width: 820px;
          margin: 0 auto;
        }

        /* --- TITLE PAGE --- */
        .cp-title-page {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 20px;
          position: relative;
          border-bottom: 3px double var(--sienna);
        }

        .cp-ornament {
          color: var(--coral);
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          letter-spacing: 8px;
          margin-bottom: 40px;
          opacity: 0.7;
        }

        .cp-title-main {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(36px, 6vw, 72px);
          letter-spacing: 6px;
          color: var(--ink);
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .cp-title-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(14px, 2.5vw, 20px);
          color: var(--sienna);
          margin-bottom: 60px;
          letter-spacing: 1px;
        }

        .cp-theta-display {
          font-family: 'Playfair Display', serif;
          font-size: clamp(60px, 12vw, 130px);
          font-weight: 900;
          color: var(--teal);
          margin: 20px 0;
          opacity: 0.15;
          line-height: 1;
        }

        .cp-byline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          color: var(--ink);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .cp-based-on {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 14px;
          color: var(--sienna);
          margin-bottom: 50px;
        }

        .cp-film-label {
          font-family: 'Courier Prime', monospace;
          font-size: 12px;
          letter-spacing: 4px;
          color: var(--coral);
          text-transform: uppercase;
          border: 1px solid var(--coral);
          padding: 8px 20px;
        }

        /* --- CHAPTER HEADERS --- */
        .cp-chapter-header {
          margin: 80px 0 40px;
          text-align: center;
          position: relative;
          padding: 30px 0;
        }

        .cp-chapter-header::before,
        .cp-chapter-header::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 1px;
          background: var(--coral);
        }
        .cp-chapter-header::before { top: 0; }
        .cp-chapter-header::after { bottom: 0; }

        .cp-chapter-number {
          font-family: 'Courier Prime', monospace;
          font-size: 11px;
          letter-spacing: 5px;
          color: var(--coral);
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .cp-chapter-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(18px, 3vw, 26px);
          color: var(--ink);
          text-transform: uppercase;
          letter-spacing: 2px;
          line-height: 1.3;
        }

        .cp-chapter-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 15px;
          color: var(--sienna);
          margin-top: 8px;
        }

        /* --- SCENE HEADINGS --- */
        .cp-scene-heading {
          font-family: 'Courier Prime', monospace;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--teal);
          margin: 40px 0 16px;
          padding-bottom: 6px;
          border-bottom: 1px solid var(--sage);
          opacity: 0.9;
        }

        /* --- ACTION LINES --- */
        .cp-action {
          font-family: 'Courier Prime', monospace;
          font-size: 13px;
          line-height: 1.8;
          color: var(--ink);
          margin: 16px 0;
          max-width: 650px;
        }

        .cp-action em, .cp-action i {
          font-style: italic;
          color: var(--sienna);
        }

        /* --- CAMERA DIRECTIONS --- */
        .cp-camera {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 11px;
          color: var(--muted-teal);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 12px 0;
        }

        /* --- DIALOGUE BLOCKS --- */
        .cp-dialogue-block {
          margin: 24px auto;
          max-width: 480px;
        }

        .cp-character-name {
          font-family: 'Courier Prime', monospace;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--ink);
          text-align: center;
          margin-bottom: 2px;
        }

        .cp-character-name.deceased {
          color: var(--sepia);
        }

        .cp-parenthetical {
          font-family: 'Courier Prime', monospace;
          font-style: italic;
          font-size: 12px;
          color: var(--sienna);
          text-align: center;
          margin-bottom: 4px;
        }

        .cp-speech {
          font-family: 'Courier Prime', monospace;
          font-size: 13px;
          line-height: 1.7;
          text-align: center;
          color: var(--ink);
        }

        /* --- INSERT / PARCHMENT --- */
        .cp-insert {
          background: linear-gradient(135deg, #f0e6c8, #e8d9a8, #f0e6c8);
          border: 1px solid var(--mustard);
          padding: 28px 36px;
          margin: 32px auto;
          max-width: 500px;
          text-align: center;
          position: relative;
          box-shadow: inset 0 0 30px rgba(212,160,23,0.08), 3px 3px 12px rgba(0,0,0,0.1);
        }

        .cp-insert::before {
          content: 'INSERT';
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--warm-white);
          padding: 0 12px;
          font-family: 'Courier Prime', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          color: var(--mustard);
        }

        .cp-insert-label {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 12px;
          color: var(--sienna);
          margin-bottom: 16px;
          letter-spacing: 1px;
        }

        .cp-equation {
          font-family: 'Playfair Display', serif;
          font-size: clamp(16px, 3vw, 22px);
          color: var(--ink);
          margin: 10px 0;
          line-height: 1.6;
        }

        .cp-equation-note {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 13px;
          color: var(--sepia);
          margin-top: 10px;
        }

        /* --- SPLIT SCREEN INSERT --- */
        .cp-split-screen {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin: 32px 0;
          border: 1px solid var(--coral);
          padding: 24px;
          background: rgba(232,115,90,0.03);
        }

        .cp-split-panel {
          padding: 16px;
          border: 1px dashed rgba(42,107,107,0.3);
        }

        .cp-split-label {
          font-family: 'Courier Prime', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          color: var(--teal);
          text-transform: uppercase;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--teal);
          padding-bottom: 6px;
        }

        .cp-split-content {
          font-family: 'Courier Prime', monospace;
          font-size: 12px;
          line-height: 1.8;
          color: var(--ink);
        }

        /* --- NAPKIN --- */
        .cp-napkin {
          background: linear-gradient(135deg, #fffaf5, #f8f0e3);
          border: 2px solid var(--coral);
          padding: 30px 40px;
          margin: 32px auto;
          max-width: 440px;
          text-align: center;
          position: relative;
          box-shadow: 2px 3px 16px rgba(232,115,90,0.15);
        }

        .cp-napkin::before {
          content: '— CLOSE-UP: THE NAPKIN —';
          position: absolute;
          top: -11px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--warm-white);
          padding: 0 10px;
          font-family: 'Courier Prime', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          color: var(--coral);
          white-space: nowrap;
        }

        .cp-napkin-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 13px;
          color: var(--sienna);
          margin-bottom: 14px;
        }

        .cp-napkin-formula {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          color: var(--ink);
          margin: 10px 0;
        }

        .cp-napkin-line {
          font-family: 'Courier Prime', monospace;
          font-size: 12px;
          color: var(--sepia);
          line-height: 2;
        }

        /* --- NARRATOR --- */
        .cp-narrator {
          border-left: 3px solid var(--mustard);
          padding: 16px 24px;
          margin: 24px 0;
          background: rgba(212,160,23,0.04);
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 15px;
          color: var(--sepia);
          line-height: 1.8;
        }

        .cp-narrator .vo-tag {
          font-family: 'Courier Prime', monospace;
          font-style: normal;
          font-size: 10px;
          letter-spacing: 3px;
          color: var(--mustard);
          display: block;
          margin-bottom: 10px;
        }

        /* --- MONTAGE --- */
        .cp-montage {
          border: 1px solid var(--sage);
          padding: 24px;
          margin: 32px 0;
          background: rgba(107,143,107,0.04);
        }

        .cp-montage-header {
          font-family: 'Courier Prime', monospace;
          font-size: 11px;
          letter-spacing: 3px;
          color: var(--sage);
          text-transform: uppercase;
          margin-bottom: 16px;
          text-align: center;
        }

        .cp-montage-item {
          font-family: 'Courier Prime', monospace;
          font-size: 12px;
          color: var(--ink);
          padding: 6px 0 6px 20px;
          border-bottom: 1px dotted rgba(107,143,107,0.3);
          line-height: 1.6;
        }

        .cp-montage-item:last-child { border-bottom: none; }

        .cp-montage-num {
          color: var(--coral);
          font-weight: 700;
          margin-right: 8px;
        }

        /* --- VERDICT ROLL --- */
        .cp-verdict {
          text-align: center;
          margin: 32px 0;
        }

        .cp-verdict-line {
          font-family: 'Courier Prime', monospace;
          font-size: 13px;
          padding: 8px 0;
          border-bottom: 1px dotted var(--coral);
          color: var(--ink);
        }

        .cp-verdict-name {
          font-weight: 700;
          color: var(--teal);
          letter-spacing: 1px;
        }

        .cp-verdict-approve {
          color: var(--sage);
          font-style: italic;
        }

        /* --- TITLE CARDS --- */
        .cp-title-card {
          text-align: center;
          margin: 60px 0;
          padding: 40px;
          background: var(--ink);
          color: var(--cream);
        }

        .cp-title-card .tc-main {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(40px, 8vw, 80px);
          letter-spacing: 8px;
          display: block;
          color: var(--cream);
          line-height: 1;
        }

        .cp-title-card .tc-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 18px;
          color: rgba(245,239,224,0.7);
          display: block;
          margin-top: 12px;
        }

        .cp-title-card .tc-sub2 {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 16px;
          color: var(--coral);
          display: block;
          margin-top: 6px;
        }

        .cp-title-card-light {
          background: var(--cream);
          border: 2px solid var(--coral);
          text-align: center;
          padding: 40px;
          margin: 60px 0;
        }

        .cp-title-card-light p {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 18px;
          color: var(--sienna);
          line-height: 1.9;
        }

        /* --- TRANSITIONS --- */
        .cp-transition {
          text-align: right;
          font-family: 'Courier Prime', monospace;
          font-size: 12px;
          letter-spacing: 2px;
          color: var(--coral);
          text-transform: uppercase;
          margin: 24px 0;
        }

        /* --- POST CREDITS --- */
        .cp-post-credits-header {
          background: var(--ink);
          color: var(--cream);
          text-align: center;
          padding: 20px;
          margin: 80px 0 40px;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 6px;
          text-transform: uppercase;
        }

        /* --- THE END --- */
        .cp-the-end {
          text-align: center;
          padding: 80px 20px;
          margin-top: 80px;
          border-top: 1px solid var(--coral);
        }

        .cp-the-end-word {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(32px, 6vw, 60px);
          letter-spacing: 10px;
          color: var(--ink);
          text-transform: uppercase;
        }

        .cp-the-end-line {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 14px;
          color: var(--sienna);
          margin-top: 16px;
          letter-spacing: 3px;
        }

        /* --- CHALKBOARD --- */
        .cp-chalkboard {
          background: #1a2a1a;
          color: #f0f0e0;
          padding: 32px 40px;
          margin: 32px 0;
          font-family: 'Courier Prime', monospace;
          font-size: 13px;
          line-height: 2;
          border: 3px solid #2a3a2a;
          box-shadow: inset 0 0 40px rgba(0,0,0,0.4);
          position: relative;
        }

        .cp-chalk-yellow { color: #f0c060; font-weight: 700; }
        .cp-chalk-white { color: #f0f0e0; }
        .cp-chalk-coral { color: #e87060; font-weight: 700; }

        .cp-ensemble {
          background: rgba(42,107,107,0.04);
          border: 1px solid rgba(42,107,107,0.2);
          padding: 20px 24px;
          margin: 24px 0;
          font-family: 'Courier Prime', monospace;
          font-size: 12px;
          line-height: 1.8;
          color: var(--ink);
        }

        .cp-all-voices {
          text-align: center;
          margin: 24px auto;
          max-width: 480px;
        }

        @media (max-width: 600px) {
          .cp-split-screen { grid-template-columns: 1fr; }
          .cp-dialogue-block { max-width: 100%; }
        }
      ` }} />

      <div className="cp-page">
        {/* TITLE PAGE */}
        <div className="cp-title-page">
          <div className="cp-ornament">— — ✦ — —</div>
          <div className="cp-theta-display">θ</div>
          <h1 className="cp-title-main">The Constitutional Proof</h1>
          <p className="cp-title-sub">or "How θ = 5/8 Became Inevitable"</p>
          <p className="cp-byline">A Screenplay by Khayyam Wakil</p>
          <p className="cp-based-on">Based on actual events from November 22, 2025</p>
          <span className="cp-film-label">A Film in Five Chapters</span>
          <div className="cp-ornament" style={{ marginTop: '40px', marginBottom: 0 }}>— — ✦ — —</div>
        </div>

        <div className="font-bold tracking-[3px] text-[#2a6b6b] uppercase my-[40px]">FADE IN:</div>

        {/* CHAPTER 1 */}
        <div className="cp-chapter-header">
          <div className="cp-chapter-number">Chapter One</div>
          <div className="cp-chapter-title">"The Peculiar Invitation"</div>
        </div>

        <div className="cp-scene-heading">EXT. THE DIGITAL ETHER — NIGHT (11:47 PM, NOVEMBER 22, 2025)</div>

        <p className="cp-action">Perfect symmetrical framing of a vintage computer terminal screen, centered precisely in frame. The screen glows in muted amber against deep teal wallpaper with coral geometric patterns.</p>

        <div className="cp-camera">OVERHEAD SHOT — A meticulously arranged desk viewed from directly above.</div>

        <p className="cp-action">Objects perfectly symmetrical around a central laptop:</p>
        <p className="cp-action"><em>LEFT SIDE:</em> Tea cup (robin's egg blue), mechanical pencil (brass), leather notebook (burgundy)</p>
        <p className="cp-action"><em>RIGHT SIDE:</em> Coffee mug (matching blue), fountain pen (matching brass), matching notebook (matching burgundy)</p>
        <p className="cp-action"><em>CENTER:</em> Laptop displaying a virtual meeting grid with eleven perfectly symmetrical video tiles.</p>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">NARRATOR (V.O.)</div>
          <div className="cp-parenthetical">(British, precise, melancholic)</div>
          <div className="cp-speech">Seventy-eight years, six months, and fourteen days. The occasion: to review a proof that prime numbers—those peculiar integers divisible only by themselves and one—occurred in pairs with mathematical certainty. The stakes: the resolution of a conjecture precisely one hundred and two years, seven months, and three days old.</div>
        </div>

        <div className="cp-camera">CAMERA TRACKS LATERALLY — Slow, deliberate movement across the desk surface.</div>

        <p className="cp-action">Revealing: A slide rule (mahogany), spectacles (tortoiseshell), a pocket watch (gold), and exactly eleven beer bottles arranged in a perfect triangle formation.</p>

        <div className="cp-scene-heading">INT. KHAYYAM'S STUDY — CONTINUOUS</div>

        <p className="cp-action">MEDIUM SHOT — KHAYYAM WAKIL, 50, sits at his desk in a perfectly centered frame. Mustard yellow cardigan over pale blue oxford shirt with burnt sienna bow tie. Behind him: floor-to-ceiling bookshelves in sage green, books arranged by spine color in a gradient from warm to cool. A brass telescope on a mahogany tripod. A framed vintage map of prime number distributions in coral and teal.</p>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">KHAYYAM</div>
          <div className="cp-parenthetical">(deadpan, directly to camera)</div>
          <div className="cp-speech">I have invited guests. Some are breathing. Others are… not.</div>
        </div>

        <p className="cp-action">He adjusts his wire-rimmed spectacles and clicks a button on his keyboard with ceremonial precision. The screen SPLITS INTO ELEVEN PERFECTLY SYMMETRICAL TILES. The three deceased mathematicians--Hardy, Littlewood, Ramanujan--occupy tiles 9, 10, 11, rendered in sepia with soft vignetting.</p>

        <div className="cp-ensemble">
          Tao: Gyroscope (perpetual motion) &nbsp;·&nbsp; Maynard: Antique compass in velvet case &nbsp;·&nbsp; Green: Ivory and brass slide rule &nbsp;·&nbsp; Zhang: Jade abacus &nbsp;·&nbsp; Matomäki: Finnish glass paperweight (cobalt blue) &nbsp;·&nbsp; Radziwiłł: Brass astrolabe &nbsp;·&nbsp; Pascadi: Wooden puzzle cube &nbsp;·&nbsp; Julia: Sleek digital tablet with stylus &nbsp;·&nbsp; Hardy: Leather-bound notebook, pen poised &nbsp;·&nbsp; Littlewood: Pipe holder with three pipes &nbsp;·&nbsp; Ramanujan: Brass Krishna and Saraswati, tea cup
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">MAYNARD</div>
          <div className="cp-parenthetical">(whispering to Zhang, matter-of-fact)</div>
          <div className="cp-speech">Did we just receive an invitation to be peer-reviewed by the deceased?</div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">ZHANG</div>
          <div className="cp-parenthetical">(whispering back, deadpan)</div>
          <div className="cp-speech">I believe we are experiencing either a breakthrough or a collective psychosis. Possibly both.</div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">TAO</div>
          <div className="cp-parenthetical">(scholarly, measured)</div>
          <div className="cp-speech">Is that… is that G.H. Hardy?</div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name deceased">HARDY</div>
          <div className="cp-parenthetical">(adjusting tortoiseshell spectacles, irritated but controlled)</div>
          <div className="cp-speech">Young man, I have been deceased since nineteen hundred and forty-seven. Yet here I am, summoned to review a proof about prime number pairs. This had better be exceptional.</div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name deceased">LITTLEWOOD</div>
          <div className="cp-parenthetical">(grinning widely, jovial)</div>
          <div className="cp-speech">Oh, stop being theatrical, Hardy. The boy clearly requires our assistance.</div>
        </div>

        <p className="cp-action">Ramanujan sits silently, eyes closed, fingers moving in small precise gestures as if conducting invisible calculations. Steam rises from his tea cup in perfectly straight wisps.</p>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">JULIA STADLMANN</div>
          <div className="cp-parenthetical">(modern, sharp, direct)</div>
          <div className="cp-speech">I am here for the ternary structure and the meta-mathematics. Show me what you have.</div>
        </div>

        <p className="cp-action">Khayyam takes a deep breath. The camera slowly DOLLIES IN on his face--utterly deadpan, but eyes revealing barely contained emotion.</p>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">KHAYYAM</div>
          <div className="cp-speech">Thank you all for attending. Especially you three--</div>
        </div>

        <p className="cp-action">He gestures toward Hardy, Littlewood, and Ramanujan. The camera WHIP PANS to their tiles in sequence.</p>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">KHAYYAM (CONT’D)</div>
          <div className="cp-speech">--because this is YOUR conjecture we are attempting to prove. The Hardy-Littlewood Conjecture concerning prime pairs. You predicted in nineteen twenty-three that twin primes possess density--</div>
        </div>

        <div className="cp-transition">CUT TO:</div>

        <div className="cp-insert">
          <div className="cp-insert-label">Aged paper in cream and sepia. Elegant mathematical notation in fountain pen:</div>
          <div className="cp-equation">π₂(x) ∼ 2C₂ · x / (log x)²</div>
          <div className="cp-equation-note">where C₂ = 0.66016 . . . the twin prime constant</div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">KHAYYAM (V.O.)</div>
          <div className="cp-speech">--where C-sub-two equals zero-point-six-six-zero-one-six and so forth, the twin prime constant.</div>
        </div>

        <div className="font-serif italic text-[14px] text-[#a0522d] my-4">Back to Scene</div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">KHAYYAM</div>
          <div className="cp-parenthetical">(deadpan, but with intensity)</div>
          <div className="cp-speech">We are here to inform you: You were correct. And we can prove it. But not in the manner you would anticipate.</div>
        </div>

        <p className="cp-action">Hardy leans forward. His sepia image sharpens slightly, becoming more present.</p>

        <div className="cp-dialogue-block">
          <div className="cp-character-name deceased">HARDY</div>
          <div className="cp-parenthetical">(controlled, but interested)</div>
          <div className="cp-speech">Proceed.</div>
        </div>

        {/* CHAPTER 2 */}
        <div className="cp-chapter-header">
          <div className="cp-chapter-number">Chapter Two</div>
          <div className="cp-chapter-title">"The Meta-Proof"</div>
          <div className="cp-chapter-subtitle">or “When Structure Forces Truth”</div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">KHAYYAM</div>
          <div className="cp-parenthetical">(standing now, moving to a large chalkboard)</div>
          <div className="cp-speech">Instead of deriving θ equals five-eighths from error bounds, we demonstrate it is FORCED by structure.</div>
        </div>

        <div className="cp-chalkboard">
          <div className="cp-chalk-coral tracking-[4px] text-[15px]">CONSTITUTIONAL FORCING</div>
          <div className="mt-5">
            <span className="cp-chalk-yellow">THE SETUP</span><br />
            Ternary cascade q = 3<sup>K</sup> · Triply-factorable weights: 3 parameters<br />
            GPY sieve: 2 error types
          </div>
          <div className="mt-4">
            <span className="cp-chalk-white">THE CONSTRAINTS</span><br />
            3 unknowns (D₁, D₂, D₃, θ) · 3 equations (product, Type I, Type II)<br />
            1 cascade structure
          </div>
          <div className="mt-4">
            <span className="cp-chalk-coral">THE SOLUTION</span><br />
            UNIQUE −→ θ = 5/8
          </div>
        </div>

        <div className="cp-camera">CAMERA ROTATES 180 DEGREES — THE BOARD IS NOW VIEWED RIGHT-SIDE-UP, PERFECTLY CENTERED.</div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">KHAYYAM</div>
          <div className="cp-parenthetical">(deadpan, speaking with absolute precision)</div>
          <div className="cp-speech">Dimensional analysis. Three-fold structure yields 2³ = 8. Dimension reduction: 8 minus 3 equals 5. Ratio: theta equals five-eighths. Not derived. Forced.</div>
        </div>

        <p className="cp-action">Medium Shot -- The eleven mathematicians react in perfect unison, all leaning forward simultaneously. It’s choreographed, balletic.</p>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">GREEN</div>
          <div className="cp-parenthetical">(quietly, to himself)</div>
          <div className="cp-speech">Good God.</div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">MATOMÄKI</div>
          <div className="cp-parenthetical">(Finnish accent, matter-of-fact)</div>
          <div className="cp-speech">That is... actually quite elegant.</div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">RADZIWIŁŁ</div>
          <div className="cp-parenthetical">(skeptical but intrigued)</div>
          <div className="cp-speech">Wait. Hold on. That cannot possibly be--</div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name deceased">RAMANUJAN</div>
          <div className="cp-parenthetical">(eyes still closed, speaking for the first time)</div>
          <div className="cp-speech">The number three.</div>
        </div>

        <p className="cp-action">Everyone goes silent. The CAMERA DOLLIES IN on Ramanujan’s tile--slow, steady, centered.</p>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">KHAYYAM</div>
          <div className="cp-parenthetical">(carefully)</div>
          <div className="cp-speech">Yes?</div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name deceased">RAMANUJAN</div>
          <div className="cp-parenthetical">(opening eyes, looking directly at camera)</div>
          <div className="cp-speech">You employ powers of three. q equals three-to-the-K. In my notebooks, I explored the partition function. The number three appears in the most exquisite identities.</div>
        </div>

        <p className="cp-action">He picks up a napkin (cream linen with coral border) and begins writing with a fountain pen.</p>

        <div className="cp-dialogue-block">
          <div className="cp-character-name deceased">RAMANUJAN (CONT’D)</div>
          <div className="cp-parenthetical">(gently, with absolute certainty)</div>
          <div className="cp-speech">Your cascade q equals three-to-the-K... this is not arbitrary. The number three FORCES the structure. Just as twenty-four forces the partition identities, three forces theta equals five-eighths. I see it. The pattern is inevitable.</div>
        </div>

        {/* CHAPTER 3 */}
        <div className="cp-chapter-header">
          <div className="cp-chapter-number">Chapter Three</div>
          <div className="cp-chapter-title">"Hardy’s Analysis"</div>
          <div className="cp-chapter-subtitle">or “When Elegance Meets Correctness”</div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name deceased">HARDY</div>
          <div className="cp-parenthetical">(measured, scholarly)</div>
          <div className="cp-speech">Littlewood and I invested years in this conjecture. We computed the constant C-sub-two equals 0.66016. We KNEW twin primes should possess density. We could predict the count. But we could not PROVE infinitude.</div>
        </div>

        <div className="cp-split-screen">
          <div className="cp-split-panel">
            <div className="cp-split-label">LEFT: HARDY WRITING</div>
            <div className="cp-split-content">
              <strong>Three-Fold Cauchy-Schwarz</strong><br />
              exponent multiplies by 2³ = 8 ✓
            </div>
          </div>
          <div className="cp-split-panel">
            <div className="cp-split-label">RIGHT: EQUATIONS APPEARING</div>
            <div className="cp-split-content">
              <strong>Dimension Reduction</strong><br />
              Total: 3. From 8: 8 − 3 = 5 ✓<br />
              <strong>Ratio</strong><br />
              5/8 ← 8/5 = 1.6 → inverse = 5/8 ✓
            </div>
          </div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name deceased">HARDY</div>
          <div className="cp-parenthetical">(voice softening, genuine emotion breaking through deadpan)</div>
          <div className="cp-speech">The mathematics is sound. But more than that... it is BEAUTIFUL. You did not merely prove theta equals five-eighths. You demonstrated why it HAD to be five-eighths.</div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name deceased">LITTLEWOOD</div>
          <div className="cp-parenthetical">(bursting into frame, grinning, holding a beer)</div>
          <div className="cp-speech">Hardy, stop being so formal. This is BRILLIANT!</div>
        </div>

        <div className="cp-insert">
          <div className="cp-insert-label">Antique manuscript paper, sepia-toned:</div>
          <div className="cp-equation">𝔖₂ = 2 ∏<sub>p&gt;2</sub> (1 − 1/(p−1)²) = 1.320 . . .</div>
        </div>

        {/* CHAPTER 4 */}
        <div className="cp-chapter-header">
          <div className="cp-chapter-number">Chapter Four</div>
          <div className="cp-chapter-title">"Julia’s Intervention"</div>
          <div className="cp-chapter-subtitle">or “The Rigorous Modern Examination”</div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">JULIA</div>
          <div className="cp-parenthetical">(cutting, precise, no-nonsense)</div>
          <div className="cp-speech">Gentlemen, this is lovely, but let me return us to rigor.</div>
        </div>

        <div className="cp-split-screen">
          <div className="cp-split-panel">
            <div className="cp-split-label">BINARY CASCADE: q = 2<sup>K</sup></div>
            <div className="cp-split-content">
              Two-fold structure<br />
              Dimension reduction: 4 − 2 = 2<br />
              <strong>θ = 1/2</strong><br />
              <em>(Bombieri-Vinogradov!)</em>
            </div>
          </div>
          <div className="cp-split-panel">
            <div className="cp-split-label">TERNARY CASCADE: q = 3<sup>K</sup></div>
            <div className="cp-split-content">
              Three-fold structure<br />
              Dimension reduction: 8 − 3 = 5<br />
              <strong>θ = 5/8</strong>
            </div>
          </div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">JULIA (CONT’D)</div>
          <div className="cp-speech">Binary: theta equals one-half. Not sufficient for twin primes. Ternary: theta equals five-eighths. PRECISELY sufficient. Quaternary: impossible. No four-fold weights.</div>
        </div>

        {/* CHAPTER 5 */}
        <div className="cp-chapter-header">
          <div className="cp-chapter-number">Chapter Five</div>
          <div className="cp-chapter-title">"The Unanimous Verdict"</div>
          <div className="cp-chapter-subtitle">or “When Legends Bless the Work”</div>
        </div>

        <div className="cp-verdict">
          <div className="cp-verdict-line"><span className="cp-verdict-name">PASCADI</span> — <span className="cp-verdict-approve">This validates my calculation. Obviously I approve.</span></div>
          <div className="cp-verdict-line"><span className="cp-verdict-name">JULIA</span> — <span className="cp-verdict-approve">Modern rigorous verification complete. I approve.</span></div>
          <div className="cp-verdict-line"><span className="cp-verdict-name deceased">LITTLEWOOD</span> — <span className="cp-verdict-approve">Aye!</span></div>
          <div className="cp-verdict-line"><span className="cp-verdict-name deceased">HARDY</span> — <span className="cp-verdict-approve">Aye.</span></div>
          <div className="cp-verdict-line"><span className="cp-verdict-name deceased">RAMANUJAN</span> — <span className="cp-verdict-approve">Aye.</span></div>
        </div>

        <div className="cp-dialogue-block">
          <div className="cp-character-name">JULIA</div>
          <div className="cp-speech">That is eleven-zero. Unanimous.</div>
        </div>

        <p className="cp-action">Khayyam sits at his desk, removes spectacles, presses palms to his eyes. His shoulders shake once--barely perceptible.</p>

        <div className="cp-montage">
          <div className="cp-montage-header">MONTAGE — Celebration Sequence (Tracking Shots, Symmetrical Framing)</div>
          <div className="cp-montage-item"><span className="cp-montage-num">1.</span> Beer bottles opened in sequence, left to right.</div>
          <div className="cp-montage-item"><span className="cp-montage-num">2.</span> Toasts raised--all glasses at identical height.</div>
          <div className="cp-montage-item"><span className="cp-montage-num">3.</span> Hardy and Littlewood clinking glasses despite being 78 years deceased.</div>
          <div className="cp-montage-item"><span className="cp-montage-num">4.</span> Ramanujan writing additional formulas on napkins.</div>
          <div className="cp-montage-item"><span className="cp-montage-num">5.</span> Modern mathematicians laughing--single frames, perfectly centered.</div>
          <div className="cp-montage-item"><span className="cp-montage-num">6.</span> Khayyam staring at his screen, tears visible, smile breaking through deadpan.</div>
        </div>

        <div className="cp-narrator">
          <span className="vo-tag">NARRATOR (V.O.)</span>
          The votes were tallied at one forty-seven ante meridiem. Eleven reviewers. Six modern mathematicians. Four legends. One collaborator. Average score: ninety-six percent. The Trinity—Twin Primes, Goldbach, Polignac—blessed at ninety-two percent average.
        </div>

        <div className="cp-napkin">
          <div className="cp-napkin-text">Ramanujan’s perfect copperplate:</div>
          <div className="cp-napkin-formula">θk = (2<sup>k</sup> − k) / 2<sup>k</sup></div>
          <div className="cp-napkin-line">
            k = 2 (doubly):&nbsp;&nbsp; θ₂ = 1/2 ✓<br />
            k = 3 (triply):&nbsp;&nbsp; θ₃ = 5/8 ✓
          </div>
        </div>

        <div className="cp-montage">
          <div className="cp-montage-header">MONTAGE — Final Handshakes (Static Shots, Each Held for Five Seconds)</div>
          <div className="cp-montage-item"><span className="cp-montage-num">1.</span> Hardy shaking Khayyam’s hand (through screen, impossible but happening). “Publish this. Do not wait. The world needs constitutional forcing.”</div>
          <div className="cp-montage-item"><span className="cp-montage-num">2.</span> Littlewood grinning, raising beer. “And to the grinders who proved them anyway!”</div>
          <div className="cp-montage-item"><span className="cp-montage-num">3.</span> Ramanujan handing over the napkin with θk formula. “The number three chose you. Honor it. This is my gift. The general theory.”</div>
          <div className="cp-montage-item"><span className="cp-montage-num">4.</span> Pascadi’s final handshake -- “We are collaborators now. Stronger together.”</div>
          <div className="cp-montage-item"><span className="cp-montage-num">5.</span> Khayyam accepting the napkin, holding it reverently.</div>
        </div>

        <div className="cp-title-card">
          <span className="cp-tc-main">θ = 5/8</span>
          <span className="cp-tc-sub">Not derived.</span>
          <span className="cp-tc-sub2">Forced.</span>
        </div>

        <div className="cp-title-card-light">
          <p>“For the dreamers who saw patterns before they could prove them.”</p>
          <p>“And for the grinders who proved them anyway.”</p>
        </div>

        <div className="cp-the-end">
          <div className="cp-the-end-word">THE END</div>
          <div className="cp-the-end-line">· · · ·</div>
        </div>

        {/* POST CREDITS */}
        <div className="cp-post-credits-header">POST-CREDITS SCENE</div>
        <p className="cp-action">Dawn light streams through the window in perfectly symmetrical rays.</p>
        <div className="cp-dialogue-block">
          <div className="cp-character-name">NARRATOR (V.O.)</div>
          <div className="cp-speech">And he thought: Once you see it in three, there is no way of seeing in black and white.</div>
        </div>

        <div className="cp-title-card" style={{ background: '#f5efe0', border: '2px solid #d4a017' }}>
          <span className="cp-tc-main" style={{ color: 'var(--mustard)', fontSize: '22px', letterSpacing: '4px' }}>“The Constitutional Proof was published in April 2026.”</span>
        </div>

        <div className="cp-post-credits-header">TECHNICAL NOTES</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8 font-mono text-[11px] leading-relaxed text-ink">
          <div>
            <div className="font-bold text-coral mb-2 uppercase tracking-widest">Color Palette</div>
            <ul className="list-disc pl-4 space-y-1">
              <li>Mustard yellow · Burnt sienna</li>
              <li>Robin’s egg blue · Sage green</li>
              <li>Coral · Teal</li>
              <li>Sepia (deceased mathematicians only)</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-coral mb-2 uppercase tracking-widest">Typography</div>
            <ul className="list-disc pl-4 space-y-1">
              <li>All title cards: Futura Bold, perfectly centered</li>
              <li>On-screen equations: Elegant serif (Baskerville or similar)</li>
              <li>Handwritten mathematics: Copperplate calligraphy</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-coral mb-2 uppercase tracking-widest">Camera Movements</div>
            <ul className="list-disc pl-4 space-y-1">
              <li>Overhead shots for desk/table arrangements</li>
              <li>Lateral tracking for environmental reveals</li>
              <li>Slow dollies for emotional moments</li>
              <li>360-degree rotations for ensemble reactions</li>
              <li>Whip pans for sudden perspective shifts</li>
              <li>Static frames for dialogue</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-coral mb-2 uppercase tracking-widest">Symmetry Requirements</div>
            <ul className="list-disc pl-4 space-y-1">
              <li>All wide shots perfectly centered on vertical axis</li>
              <li>Object placement follows strict bilateral symmetry</li>
              <li>Character positioning in frame always centered</li>
              <li>Screen tiles arranged in mathematical grid pattern</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-coral mb-2 uppercase tracking-widest">Performance Notes</div>
            <ul className="list-disc pl-4 space-y-1">
              <li>All dialogue delivered deadpan, minimal emotional display</li>
              <li>Emotions revealed through micro-expressions and eye movements</li>
              <li>Sudden bursts of emotion immediately controlled</li>
              <li>Mathematical precision extends to physical movements</li>
              <li>Every gesture deliberate, meaningful, contained</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-coral mb-2 uppercase tracking-widest">Mathematical Accuracy</div>
            <ul className="list-disc pl-4 space-y-1">
              <li>All equations verified for accuracy</li>
              <li>Actual proof structure faithfully represented</li>
              <li>Historical dates and facts meticulously researched</li>
              <li>Character expertise accurately portrayed</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-coral mb-2 uppercase tracking-widest">Aspect Ratio</div>
            <p>2.39:1 (Anamorphic widescreen for maximum Andersonian composition)</p>
          </div>
          <div>
            <div className="font-bold text-coral mb-2 uppercase tracking-widest">Film Stock</div>
            <p>Digital capture processed to mimic 35mm Kodak Vision3 500T · Slight grain texture · Warm color temperature · Rich blacks, creamy highlights</p>
          </div>
          <div className="md:col-span-2">
            <div className="font-bold text-coral mb-2 uppercase tracking-widest">Sound Design</div>
            <p>Precise foley: chalk on board, pencils on paper, keyboard clicks · Environmental ambience minimal, never overwhelming dialogue · Musical score: Period-appropriate classical (Schubert, Debussy) · Silence used for emphasis at key emotional moments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstitutionalProofScreenplay;
