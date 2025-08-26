// Adicionar habilidades
function addSkill() {
  const input = document.getElementById("skill-input");
  const value = input.value.trim();
  if (value !== "") {
    const li = document.createElement("li");
    li.textContent = value;
    document.getElementById("skills-list").appendChild(li);
    input.value = "";
  }
}

// Adicionar competências
function addCompetencia() {
  const input = document.getElementById("competencia-input");
  const value = input.value.trim();
  if (value !== "") {
    const li = document.createElement("li");
    li.textContent = value;
    document.getElementById("competencias-list").appendChild(li);
    input.value = "";
  }
}
// Upload de foto de perfil
document.getElementById("uploadFoto").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("fotoPerfil").src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
});
