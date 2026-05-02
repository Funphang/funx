<script>
function openModal(e, url) {
  e.preventDefault();
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-frame").src = url;
}
</script>