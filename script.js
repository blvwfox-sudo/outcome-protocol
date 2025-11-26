// Outcome Protocol – basic JS
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("is-open");
    });
  }

  // Calculator logic
  const calcForm = document.getElementById("calcForm");
  const resultGrid = document.getElementById("resultGrid");
  const concMgMl = document.getElementById("concMgMl");
  const concMcgUnit = document.getElementById("concMcgUnit");
  const doseMl = document.getElementById("doseMl");
  const doseUnits = document.getElementById("doseUnits");

  if (calcForm) {
    calcForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const vialAmount = parseFloat(
        document.getElementById("vialAmount").value || "0"
      );
      const bacVolume = parseFloat(
        document.getElementById("bacVolume").value || "0"
      );
      const targetDose = parseFloat(
        document.getElementById("targetDose").value || "0"
      );
      const syringeSize = parseFloat(
        document.getElementById("syringeSize").value || "100"
      );

      if (!vialAmount || !bacVolume || !targetDose || !syringeSize) return;

      // mg/mL
      const concentrationMgMl = vialAmount / bacVolume;
      // mcg per mL
      const concentrationMcgMl = concentrationMgMl * 1000;
      // mL per dose
      const mlPerDose = targetDose / concentrationMcgMl;
      // units per mL (100 units in 1 mL if syringeSize is 100)
      const unitsPerMl = syringeSize;
      const unitsPerDose = mlPerDose * unitsPerMl;
      const mcgPerUnit = concentrationMcgMl / unitsPerMl;

      concMgMl.textContent = concentrationMgMl.toFixed(2);
      concMcgUnit.textContent = mcgPerUnit.toFixed(1);
      doseMl.textContent = mlPerDose.toFixed(3);
      doseUnits.textContent = unitsPerDose.toFixed(1);
      resultGrid.classList.remove("hidden");
    });
  }
});
