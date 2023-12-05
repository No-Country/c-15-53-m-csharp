using Backend.Data;
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

        public async Task<List<Product>> GetProductsByCategory(int categoryId)
        {
            try
            {
                List<Product> productList = await _context.Products
                    .Where(p => p.CategoryId == categoryId)
                    .ToListAsync();

                return productList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<Product>> GetProductsByCategoryAndSubCategory(int categoryId, int subCategoryId)
        {
            try
            {
                List<Product> productList = await _context.Products
                    .Where(p => p.CategoryId == categoryId && p.SubCategoryId == subCategoryId)
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
                    .Where(x => x.ProductId == ProductId)
                    .FirstOrDefaultAsync();
                return productFound;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<Product> Add(Product model)
        {
            try
            {
                _context.Products.Add(model);
                await _context.SaveChangesAsync();
                return model;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<Product> Update(Product model)
        {
            try
            {
                _context.Products.Update(model);
                await _context.SaveChangesAsync();
                return model;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<bool> Delete(Product model)
        {
            try
            {
                model.Activity = "Inactivo";
                _context.Products.Update(model);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
