/**
 * Postman-collection 1:1 Vitest tests for compliance (generated)
 *
 * One it() = one API request. Add sample data to vars for e2e runs.
 * Run: pnpm test:e2e or pnpm test:suite:db
 * Requires: API server at baseUrl (default http://localhost:3000)
 */

import { describe, it, expect } from "vitest";

const vars: Record<string, string> = {
  baseUrl: "http://localhost:3000",
  orgId: "test-org",
  accessToken: "",
  cursor: "",
  limit: "",
  verdict: "",
};

function sub(s: string): string {
  return s.replace(/\{\{([^}]+)\}\}/g, (_, k) => vars[k.trim()] ?? "");
}

describe("Postman / compliance (1:1 generated)", () => {

  it("listUnbundlingChecks", async () => {
    const url = sub("{{baseUrl}}/v1/compliance/unbundling-checks?cursor={{cursor}}&limit={{limit}}&verdict={{verdict}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("listAutomationReleases", async () => {
    const url = sub("{{baseUrl}}/v1/compliance/releases");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("approveAutomationRelease", async () => {
    const url = sub("{{baseUrl}}/v1/compliance/releases");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"capability\": \"\",\n  \"version\": \"\",\n  \"approvedBy\": \"\",\n  \"changeSummary\": \"\",\n  \"affectedIntents\": null\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("generateEvidencePack", async () => {
    const url = sub("{{baseUrl}}/v1/compliance/evidence-packs");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"sessionId\": \"newman_sessionId\",\n  \"complaintCaseId\": \"newman_complaintCaseId\"\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });
});
