using Backend.Models;

namespace Backend.Services.Contract
{
    public interface IProductService
    {
        Task<List<Product>> GetList();
        Task<Product> Get(int ProductId);
        Task<List<Product>> GetProductsByCategory(int CategoryId);
        Task<List<Product>> GetProductsByCategoryAndSubCategory(int CategoryId, int SubCategoryId);
    }
}
