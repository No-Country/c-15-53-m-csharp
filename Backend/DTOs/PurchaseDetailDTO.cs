using Backend.Models;

namespace Backend.DTOs
{
    public class PurchaseDetailDTO
    {
        public int? ProductQuantity { get; set; }

        public decimal? ProductTotal { get; set; }

        public virtual ICollection<ProductsVariantDTO> ProductsVariants { get; set; } = new List<ProductsVariantDTO>();
    }
}
