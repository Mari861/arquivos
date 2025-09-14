/* ========= Helpers ========= */
const $ = (sel) => document.querySelector(sel);

function setImgBoth(src) {
  const perfil = $("#fotoPerfil");
  const resumo = $("#fotoResumo");
  if (perfil) perfil.src = src;
  if (resumo) resumo.src = src;
}

/* ========= Foto de perfil (upload + persistência) ========= */
// Carrega imagem salva (se houver). Se não houver, mantém o src do HTML.
const fotoSalva = localStorage.getItem("perfil.fotoBase64");
if (fotoSalva) setImgBoth(fotoSalva);

// Input de arquivo (o id PRECISA ser uploadFoto)
const inputFoto = $("#uploadFoto");
if (inputFoto) {
  inputFoto.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const base64 = ev.target.result;
      setImgBoth(base64);
      localStorage.setItem("perfil.fotoBase64", base64);
    };
    reader.readAsDataURL(file);
  });
}

/* Fallback se a imagem inicial falhar (caminho incorreto) */
["#fotoPerfil", "#fotoResumo"].forEach((sel) => {
  const img = $(sel);
  if (!img) return;
  img.onerror = () => {
    // Tenta trocar para caminho relativo padrão
    img.onerror = null;
    img.src = "../imagens/image2.jpg";
  };
});

/* ========= Form: salvar automaticamente no localStorage ========= */
const campos = [
  "nome",
  "especialidade",
  "telefone",
  "email",
  "site",
  "instagram",
  "facebook",
  "tiktok",
  "area",
  "skills-text",
  "competencias-text",
];

function key(k) { return `perfil.${k}`; }

function loadFields() {
  campos.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const val = localStorage.getItem(key(id));
    if (val !== null) el.value = val;
  });
}
function bindAutosave() {
  campos.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", () => {
      localStorage.setItem(key(id), el.value);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadFields();
  bindAutosave();
});
