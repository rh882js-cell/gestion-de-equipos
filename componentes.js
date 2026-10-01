// Función para guardar en la tabla 'componentes'
async function agregarComponente(nuevoObjeto) {
  const { data, error } = await supabase
    .from("componentes")
    .insert([
      {
        codigo: nuevoObjeto.codigo,
        nombre: nuevoObjeto.nombre,
        categoria: nuevoObjeto.categoria,
        marca: nuevoObjeto.marca,
        cantidad: nuevoObjeto.cantidad,
        estado: nuevoObjeto.estado,
        descripcion: nuevoObjeto.descripcion
      }
    ]);

  if (error) {
    console.error("Error al guardar:", error.message);
    return false;
  }

  console.log("Componente guardado con éxito:", data);
  return true;
}