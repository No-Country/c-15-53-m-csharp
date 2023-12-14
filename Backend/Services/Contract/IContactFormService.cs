using Backend.Models;

namespace Backend.Services.Contract
{

    public interface IContactFormService
    {
        Task<ContactForm> Add(ContactForm contactForm);
    }

}