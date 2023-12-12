using Backend.Models;
namespace Backend.Services.Contract
{
    public interface IPurchaseService
    {
        Task<Purchase> Add(Purchase model);
    }
}
