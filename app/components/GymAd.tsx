export default function GymAd() {
  return (
    <div className="ad">
      <div className="top">
        <div className="brand">XOVERA</div>
        <div className="tag">gym revenue calculator</div>
      </div>

      <div className="hook">
        Your gym has
        <br />
        a leak.
        <br />
        <span className="dim">This finds it.</span>
      </div>

      <div className="proof">
        case study: NPI
        <br />
        <b>486 leads → 214 tours → 42 members</b>
      </div>

      <div className="card">
        <div className="label">Your numbers last month</div>
        <div className="rows">
          <div className="row">
            <div className="k">Leads that came in</div>
            <div className="v">120</div>
          </div>
          <div className="row">
            <div className="k">Leads that walked in</div>
            <div className="v">31</div>
          </div>
          <div className="row">
            <div className="k">Avg. membership value</div>
            <div className="v">$149/mo</div>
          </div>
        </div>
        <div className="result">
          <div className="label">Revenue leaking every month</div>
          <div className="big">
            $7,940<span>/mo</span>
          </div>
        </div>
      </div>

      <div className="cta">
        <div className="line">
          Run your real numbers. <em>Free, 60 seconds.</em>
        </div>
        <div className="btn">Calculate →</div>
      </div>
    </div>
  );
}
