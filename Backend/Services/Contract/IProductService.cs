using Backend.Models;

namespace Backend.Services.Contract
{
    public interface IProductService
    {
        Task<List<Product>> GetList();
        Task<Product> Get(int ProductId);
        Task<Product> Add(Product model);
        Task<Product> Update(Product model);
        Task<bool> Delete(Product model);
        Task<List<Product>> GetProductsByCategory(int categoryId);
        Task<List<Product>> GetProductsByCategoryAndSubCategory(int categoryId, int subCategoryId);
    }
}
