// Constante para la clave en localStorage
export const PAIS_STORAGE_KEY = 'pais_actual_ar';

// Guardar el país en localStorage
export const guardarPaisActual = (pais: string): void => {
  localStorage.setItem(PAIS_STORAGE_KEY, pais);
};

// Obtener el país del localStorage
export const obtenerPaisActual = (): string | null => {
  return localStorage.getItem(PAIS_STORAGE_KEY);
};

// Eliminar el país del localStorage
export const eliminarPaisActual = (): void => {
  localStorage.removeItem(PAIS_STORAGE_KEY);
};

// Verificar si hay un país activo
export const hayPaisActivo = (): boolean => {
  return localStorage.getItem(PAIS_STORAGE_KEY) !== null;
};