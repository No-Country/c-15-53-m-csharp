using Backend.Models;
using Backend.Services.Contract;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services.Implementation
{
    public class ProductService : IProductService
    {
        private readonly BasicPointDbContext _context;

        public ProductService(BasicPointDbContext context)
        {
            _context = context;
        }

        public async Task<List<Product>> GetList()
        {
            try
            {
                List<Product> productList = new List<Product>();
                productList = await _context.Products.ToListAsync();
                return productList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<Product>> GetProductsByCategory(int CategoryId)
        {
            try
            {
                List<Product> productList = await _context.Products
                    .Where(p => p.CategoryId == CategoryId)
                    .ToListAsync();

                return productList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<Product>> GetProductsByCategoryAndSubCategory(int CategoryId, int SubCategoryId)
        {
            try
            {
                List<Product> productList = await _context.Products
                    .Where(p => p.CategoryId == CategoryId && p.SubCategoryId == SubCategoryId)
                    .ToListAsync();

                return productList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<Product> Get(int ProductId)
        {
            try
            {
                Product? productFound = new Product();
                productFound = await _context.Products
                    .Where(x => x.Id == ProductId)
                    .FirstOrDefaultAsync();
                return productFound;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
       
    }
}
