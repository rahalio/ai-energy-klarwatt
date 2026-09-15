import { NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { LoginPage } from './pages/LoginPage';
import { AdvisorDeskPage } from './pages/AdvisorDeskPage';
import { ContactSessionPage } from './pages/ContactSessionPage';
import { OpsHomePage } from './pages/OpsHomePage';
import { ContactsExplorerPage } from './pages/ContactsExplorerPage';
import { ExplanationPage } from './pages/ExplanationPage';
import { ConsentPage } from './pages/ConsentPage';
import { VulnerabilityPage } from './pages/VulnerabilityPage';
import { ComplaintsPage } from './pages/ComplaintsPage';
import { DataDefectsPage } from './pages/DataDefectsPage';
import { ResolutionsAdvicePage } from './pages/ResolutionsAdvicePage';
import { CohortsPage } from './pages/CohortsPage';
import { ReleasesPage } from './pages/ReleasesPage';
import { ComplianceEvidencePage } from './pages/ComplianceEvidencePage';
import { ScaffoldViewsPage } from './pages/ScaffoldViewsPage';

const NAV = [
  {
    label: 'Advisor',
    items: [
      { to: '/advisor', label: 'Live queue' },
      { to: '/advisor/session/demo', label: 'Contact session' },
      { to: '/vulnerability', label: 'Vulnerability queue' },
    ],
  },
  {
    label: 'Customer ops',
    items: [
      { to: '/ops', label: 'Ops home' },
      { to: '/contacts', label: 'Contacts' },
      { to: '/consumption', label: 'Explanation' },
      { to: '/defects', label: 'Data defects' },
      { to: '/resolutions', label: 'Resolutions & advice' },
    ],
  },
  {
    label: 'Compliance',
    items: [
      { to: '/consent', label: 'Purpose & consent' },
      { to: '/complaints', label: 'Complaints & clocks' },
      { to: '/releases', label: 'Release control' },
      { to: '/compliance', label: 'Unbundling & evidence' },
    ],
  },
  {
    label: 'Analytics',
    items: [{ to: '/cohorts', label: 'Cohort analytics' }],
  },
];

function Shell({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">Klarwatt</span>
          <span className="brand-sub">licence desk</span>
        </div>
        {NAV.map((group) => (
          <div className="nav-group" key={group.label}>
            <div className="nav-label">{group.label}</div>
            {group.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-link${isActive || location.pathname.startsWith(item.to) ? ' active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        ))}
        <div className="nav-group">
          <div className="nav-label">Scaffold</div>
          <NavLink to="/scaffold" className="nav-link">
            Generated domain views
          </NavLink>
        </div>
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/*"
        element={
          <Shell>
            <Routes>
              <Route path="/" element={<Navigate to="/advisor" replace />} />
              <Route path="/advisor" element={<AdvisorDeskPage />} />
              <Route path="/advisor/session/:sessionId" element={<ContactSessionPage />} />
              <Route path="/ops" element={<OpsHomePage />} />
              <Route path="/contacts" element={<ContactsExplorerPage />} />
              <Route path="/consumption" element={<ExplanationPage />} />
              <Route path="/consent" element={<ConsentPage />} />
              <Route path="/vulnerability" element={<VulnerabilityPage />} />
              <Route path="/complaints" element={<ComplaintsPage />} />
              <Route path="/defects" element={<DataDefectsPage />} />
              <Route path="/resolutions" element={<ResolutionsAdvicePage />} />
              <Route path="/cohorts" element={<CohortsPage />} />
              <Route path="/releases" element={<ReleasesPage />} />
              <Route path="/compliance" element={<ComplianceEvidencePage />} />
              <Route path="/scaffold" element={<ScaffoldViewsPage />} />
            </Routes>
          </Shell>
        }
      />
    </Routes>
  );
}
