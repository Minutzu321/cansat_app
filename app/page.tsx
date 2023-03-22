import Scena from '@/components/Scena'

export default function Home() {
  return (
  <main>
    <section>
      <div className="root-page-container">
        <div className="terminal-outer-container">
          <div className="terminal-inner-container">
            <div className="terminal-title-bar">
              <div className="terminal-title-actions">
                <div className="title-btn title-btn__red"></div>
                <div className="title-btn title-btn__yellow"></div>
                <div className="title-btn title-btn__green"></div>
              </div>
  
              <div className="terminal-title-text">terminal</div>
            </div>
  
            <div className="terminal-content-container terminal-padding">
              <div className="terminal-content-text">
                <p>
                  <span className="yellow">ub@can</span>:<span className="blue">~</span>$
                    <span className="cursor">
                      <span id="consolaMesaj"></span>
                  </span>
                </p>
              </div>
            </div>
            <div className="terminal-mode-line-container">
              <div className="terminal-file-display">ub_can.sh</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="root-page-container">
        <div className="terminal-outer-container">
          <div className="terminal-inner-container">
            <div className="terminal-title-bar">
              <div className="terminal-title-text">Randare 3D</div>
            </div>
            
            <div className="terminal-content-container cansat">
                <Scena/>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  </main>
  )
}
