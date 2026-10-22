document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".recipe-image").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.display = "none";
      const note = document.createElement("p");
      note.className = "image-note";
      note.textContent = "Adicione a foto deste prato em assets/images para exibi-la aqui.";
      img.insertAdjacentElement("afterend", note);
    }, { once: true });
  });
  const form = document.querySelector("#formulario form");
  if (form) form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.querySelector("#nome")?.value.trim();
    if (!name) { form.querySelector("#nome")?.focus(); return; }
    alert(`Obrigado pelo feedback, ${name}! Este formulário é demonstrativo e ainda não envia dados para um servidor.`);
  });
});
