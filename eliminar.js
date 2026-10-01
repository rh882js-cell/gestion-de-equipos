// Función para borrar un registro según su id
async function eliminarComponente(idParaEliminar) {
  const { data, error } = await supabase
    .from("componentes")
    .delete()
    .eq("id", idParaEliminar);

  if (error) {
    console.error("Error al eliminar:", error.message);
    return false;
  }

  console.log("Registro eliminado con éxito");
  return true;
}