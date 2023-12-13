using Backend.Models;
using Backend.Services.Contract;

namespace Backend.Services.Implementation
{
    public class PurchaseService : IPurchaseService
    {
        private readonly BasicPointDbContext _context;

        public PurchaseService(BasicPointDbContext context)
        {
            _context = context;
        }
        public async Task<Purchase> Add(Purchase model)
        {
            try
            {
                _context.Purchases.Add(model);
                await _context.SaveChangesAsync();
                return model;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
