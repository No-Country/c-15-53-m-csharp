using Backend.Models;
using Backend.DTOs;
namespace Backend.DTOs
{
    public class PurchaseDTO
    {
        public int? ProductTotal { get; set; }
        public decimal? Total { get; set; }
        public string? NameLastname { get; set; }
        public string? Dni { get; set; }
        public string? Phone { get; set; }
        public string? PurchaseEmail { get; set; }
        public string? PurchaseAddress { get; set; }
        public string? PostalCode { get; set; }

        public List<PurchaseDetailDTO> PurchaseDetails { get; set; } = new List<PurchaseDetailDTO>();
    }
}
