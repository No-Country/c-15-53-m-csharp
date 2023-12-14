using Backend.Models;
using Backend.Services.Contract;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services.Implementation
{
    public class ContactFormService : IContactFormService
    {
        private readonly BasicPointDbContext _context;

        public ContactFormService(BasicPointDbContext context)
        {
            _context = context;
        }

        public async Task<ContactForm> Add(ContactForm contactForm)
        {
            try
            {

                _context.ContactForms.Add(contactForm);
                await _context.SaveChangesAsync();
                return contactForm;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
