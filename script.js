
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("is-open");
    });
  }

  const calcForm = document.getElementById("calcForm");
  const resultGrid = document.getElementById("resultGrid");
  if (calcForm && resultGrid) {
    const concMgMl = document.getElementById("concMgMl");
    const concMcgUnit = document.getElementById("concMcgUnit");
    const doseMl = document.getElementById("doseMl");
    const doseUnits = document.getElementById("doseUnits");

    calcForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const vialMg = parseFloat(document.getElementById("vialAmount").value || "0");
      const bacMl = parseFloat(document.getElementById("bacVolume").value || "0");
      const targetMcg = parseFloat(document.getElementById("targetDose").value || "0");
      const syringeUnits = parseFloat(document.getElementById("syringeSize").value || "100");
      if (!vialMg || !bacMl || !targetMcg || !syringeUnits) return;

      const concMgPerMl = vialMg / bacMl;
      const concMcgPerMl = concMgPerMl * 1000;
      const mlPerDose = targetMcg / concMcgPerMl;
      const unitsPerMl = syringeUnits;
      const unitsPerDose = mlPerDose * unitsPerMl;
      const mcgPerUnit = concMcgPerMl / unitsPerMl;

      concMgMl.textContent = concMgPerMl.toFixed(2);
      concMcgUnit.textContent = mcgPerUnit.toFixed(1);
      doseMl.textContent = mlPerDose.toFixed(3);
      doseUnits.textContent = unitsPerDose.toFixed(1);
      resultGrid.classList.remove("hidden");
    });
  }
});
