using Backend.Models;
using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs
{
    public class ProductsVariantDTO
    {
        [Required(ErrorMessage = "El tamaño es obligatorio.")]
        public string? Size { get; set; }

        [Required(ErrorMessage = "El color es obligatorio.")]
        public string? Color { get; set; }

        [Required(ErrorMessage = "La cantidad es obligatoria.")]
        [Range(1, int.MaxValue, ErrorMessage = "La cantidad debe ser mayor que cero.")]
        public int? Quantity { get; set; }

        [Required(ErrorMessage = "El ID del producto es obligatorio.")]
        [Range(1, int.MaxValue, ErrorMessage = "El ID del producto debe ser mayor que cero.")]
        public int? ProductId { get; set; }


    }
}
