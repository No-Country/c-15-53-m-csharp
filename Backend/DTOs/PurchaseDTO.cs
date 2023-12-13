using Backend.Models;
using Backend.DTOs;
namespace Backend.DTOs
{
    public class PurchaseDTO
    {
        public string? FullName { get; set; }

        public string? Dni { get; set; }

        public string? Phone { get; set; }

        public string? Email { get; set; }

        public string? Address { get; set; }

        public string? PostalCode { get; set; }

        public decimal? Total { get; set; }

        public List<PurchaseDetailDTO> PurchasesDetails { get; set; } = new List<PurchaseDetailDTO>();
    }
}
