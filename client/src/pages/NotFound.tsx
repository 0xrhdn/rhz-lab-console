// RHZ LAB / Instrument Console: error state remains a controlled operational readout, never a generic blank page.
import { AlertTriangle, ArrowLeft, Radio, RotateCcw } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return <div className="error-state"><div className="error-panel"><div className="error-panel-top"><span className="eyebrow">SYSTEM EVENT / ROUTE ANOMALY</span><span className="status-tag fault"><span className="status-dot" /> FAULT 404</span></div><div className="error-glyph"><AlertTriangle size={42} /><div className="fault-ring" /></div><div className="error-code">404</div><h1>Signal not found.</h1><p>Rute yang diminta tidak terdaftar di workspace ini. Sistem tetap online; kembali ke dashboard untuk melanjutkan operasi.</p><div className="error-readout"><span><Radio size={12} /> ROUTER</span><strong>ONLINE</strong><span><RotateCcw size={12} /> LAST SAFE STATE</span><strong>STABLE</strong></div><Link href="/" className="primary-button"><ArrowLeft size={15} /> Return to dashboard</Link></div><div className="error-footer"><span>RHZ LAB / CONTROLLED EXCEPTION</span><span>TRACE 0x04F · NO DATA LOST</span></div></div>;
}
