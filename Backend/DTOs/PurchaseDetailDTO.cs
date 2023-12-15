using Backend.Models;
using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs
{
    public class PurchaseDetailDTO
    {
        [Required(ErrorMessage = "La cantidad del producto es obligatoria.")]
        [Range(1, int.MaxValue, ErrorMessage = "La cantidad del producto debe ser mayor que cero.")]
        public int? ProductQuantity { get; set; }

        [Required(ErrorMessage = "El total de los productos en la compra es obligatorio.")]
        [Range(0, double.MaxValue, ErrorMessage = "El total de los productos en la compra debe ser mayor o igual a cero.")]
        public decimal? ProductTotal { get; set; }

        [Required(ErrorMessage = "La lista de variantes de productos es obligatoria.")]
        public virtual ICollection<ProductsVariantDTO> ProductsVariants { get; set; } = new List<ProductsVariantDTO>();
    }
}
